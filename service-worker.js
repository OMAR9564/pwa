const CACHE_NAME = "v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/js/script.js",
    "/js/detail.js",
];


// Service Worker Kurulumunda Önbelleğe Alma
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Çevrimdışı Destek İçin Önbellekten Yanıt Verme
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (res) {
            if (res) {
                return res;
            }
            return requestBackend(event);
        })
    )
});

// Eski Önbellekleri Temizleme
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
