const CACHE_NAME = "pwa-cahce-v2";
const FILES_TO_CACHE = [
  "./",
  "./public/index.html",
  "./public/css/styles.css",
  "./public/css/tailwind.css",
  "./public/images/Em_Sereyvathna-CV.png",
  "./public/images/Profile.jpeg",
  "tailwind.config.js",
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
