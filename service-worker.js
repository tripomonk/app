/* Tripomonk service worker — caches the app shell so it loads instantly
   and works offline. Bump CACHE when you change index.html / app.js so
   users get the new version. */
const CACHE = 'tripomonk-v109';
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

  // Itinerary PDFs (and any PDF) must ALWAYS be fresh — never cache them, so a
  // replaced file shows up immediately. Network-first, fall back to cache only if offline.
  if (url.pathname.startsWith('/itineraries/') || url.pathname.endsWith('.pdf')) {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request)));
    return;
  }

  // Everything else: cache-first for speed/offline.
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
