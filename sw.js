const CACHE_NAME = 'gavin-laundry-v10';
const ASSETS = [ 'index.html', 'manifest.json', 'public/logo.png', 'public/laundry-bg.jpg' ];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});

