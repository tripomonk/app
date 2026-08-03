/* Tripomonk service worker — caches the app shell so it loads instantly
   and works offline. Bump CACHE when you change index.html / app.js so
   users get the new version. */
const CACHE = 'tripomonk-v401';
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

// Photos live in their own cache with its own lifetime. They are content-addressed
// URLs (Unsplash / Wikimedia / Supabase Storage) that never change, so they must
// SURVIVE a version bump — wiping them on every deploy is what made each update feel
// like a first install.
const IMG_CACHE = 'tripomonk-img-v1';
const IMG_MAX = 180;

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE && k !== IMG_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Keep the photo cache from growing without bound. Cache.keys() is insertion-ordered,
// so deleting from the front is a rough least-recently-added eviction.
async function trimImages() {
  const cache = await caches.open(IMG_CACHE);
  const keys = await cache.keys();
  if (keys.length <= IMG_MAX) return;
  await Promise.all(keys.slice(0, keys.length - IMG_MAX).map(k => cache.delete(k)));
}

// Cache-first for photos: they are immutable, so a hit is always safe and instant.
async function imageFirst(req) {
  const cache = await caches.open(IMG_CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    // opaque (no-cors) responses are fine to store — we only ever hand them back to <img>
    if (res && (res.ok || res.type === 'opaque')) {
      cache.put(req, res.clone()).then(trimImages).catch(() => {});
    }
    return res;
  } catch (err) {
    return hit || Response.error();
  }
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // CRITICAL: never cache cross-origin DATA. Those GETs include every Supabase read
  // (posts, profiles, host_trips, bookings…). Caching those froze the app — new data
  // never appeared. Photos are the exception: they're immutable URLs and by far the
  // heaviest thing we load, so they get their own cache.
  if (url.origin !== self.location.origin) {
    const isImage = e.request.destination === 'image' ||
      /\.(png|jpe?g|webp|gif|avif|svg)($|\?)/i.test(url.pathname);
    // never treat a Supabase REST/auth/functions call as an image, whatever it looks like
    const isApi = /\/(rest|auth|functions|realtime)\/v\d/.test(url.pathname);
    if (isImage && !isApi) { e.respondWith(imageFirst(e.request)); }
    return;
  }

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
        // Only cache SUCCESSFUL responses. Previously a 404 (e.g. an asset that didn't
        // exist yet, like a logo added later) got cached and then served forever, so the
        // file stayed "missing" even after it was added. Never store a non-OK response.
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached || caches.match('./index.html'));
      return cached || network;
    })
  );
});
