const CACHE_NAME = "sochify-v1";
const CACHE_NAME = "sochify-v3";

const urlsToCache = [
  "/",
  "/index.html",
  "/science/science.html",
  "/science/science.css",
  "/science/science.js",
  "/MATH/",
  "/Reasoning/",
  "/English/",
  "/Hindi/",
  "/manifest.json",
  "/icon/android-launchericon-192-192.png",
  "/icon/android-launchericon-512-512.png"

];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
