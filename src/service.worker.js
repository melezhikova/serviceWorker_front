import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute([
  { url: '/img/loading-2.png', revision: '1' },
]);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

const { strategies } = workbox;

self.addEventListener('fetch', (evt) => {
  const url = new URL(evt.request.url);
  if (url.pathname.startsWith('/?method')) {
    const cacheFirst = new strategies.NetworkFirst();
    evt.respondWith(cacheFirst.makeRequest({ request: evt.request }));
  }
});

// workbox.precaching.precacheAndRoute(self.__precacheManifest);
