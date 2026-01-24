self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('magic-store').then((cache) => cache.addAll([
      'remote.html',
      'manifest.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

