/* Tripomonk service worker — caches the app shell so it loads instantly
   and works offline. Bump CACHE when you change index.html / app.js so
   users get the new version. */
const CACHE = 'tripomonk-v259';
const ASSETS = [
  './',
  './index.html',
  './config.js',
  './app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
          .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // CRITICAL: never cache anything that isn't our own static shell.
  // Cross-origin GETs include every Supabase read (posts, profiles, host_trips,
  // bookings…). Caching those froze the app — new data never appeared. Let the
  // browser hit the network directly; the SW stays out of the way.
  if (url.origin !== self.location.origin) return;

  // Live data / config that must always be fresh: never cache. Network first,
  // fall back to cache only when truly offline.
  if (url.pathname.startsWith('/itineraries/') ||
      url.pathname.endsWith('.pdf') ||
      url.pathname.endsWith('/config.js')) {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request)));
    return;
  }

  // Our own static shell (html/js/css/icons): cache-first for speed + offline,
  // but refresh the cached copy in the background so the next load is current.
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => cached || caches.match('./index.html'));
      return cached || network;
    })
  );
});
