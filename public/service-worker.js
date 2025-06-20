const CACHE_NAME = "pwa-cache-v2";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./css/tailwind.css",
  "./images/Em_Sereyvathna-CV.png",
  "./images/Profile.jpeg",
  "./tailwind.config.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
