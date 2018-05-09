
'use strict';

const version = 'v1.01';
const staticCachePrefix = 'wave-pd1-static-';
const staticCacheName = staticCachePrefix + version;

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            // 缓存所有的静态资源，以便用户离线时可以访问到。即UI外壳
            return cache.addAll([
                './',
                'index.html',
                'static/js/manifest.2ae2e69a05c33dfc65f8.js',
                'static/js/vendor.4fea789d7b45a52ad86b.js',
                'static/js/app.772233b49dfaeed09ed3.js',
                'static/css/app.66145e74e07a8d2d0e64a12031111655.css',
                'static/img/icons/favicon.ico'
            ]);
        }).then(() => {
            // activate the new service worker immediately, without waiting for next load.
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            // remove any old caches once the new service worker is activated.
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith(staticCachePrefix) && cacheName !== staticCacheName;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        }).then(() => {
            // tell service worker to take control of any open pages.
            self.clients.claim();
        })
    );
});

self.addEventListener('fetch', event => {
    let request = event.request;
    let url = new URL(request.url);

    // 只有具有相同的domain时才去处理 request请求
    if (url.origin !== location.origin) {
        return;
    }

    // for non-GET requests, go to the network.
    if (request.method !== 'GET') {
        event.respondWith(fetch(request));  //fetch为window的内置方法
        return;
    }

    // 对于一切的请求 先去缓存查找，如果没有，再去访问网络
    event.respondWith(
        caches.match(request).then(response => {
            return response || fetch(request);
        })
    );
});
