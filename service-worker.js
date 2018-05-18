
'use strict';

const version = 'v1.05';  //在部署文件前，请修改版本
const staticCachePrefix = 'wave-pd1-static-';
const staticCacheName = staticCachePrefix + version;  //通过version版本的更新来控制，service-woker文件总是使用最新的

/**监听service worker的注册，一旦发现service worker在注册，
 * 则开始执行安装事件，并预缓存所需要的资源，一旦缓存中有一个失败了，则service worker注册也随之失败。
 * 如果缓存都成功，则event.waitUntil通过promise的方式通知service worker，
 * 然后service worker执行注册成功的回调
 * */
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            // 缓存所有的静态资源，以便用户离线时可以访问到。即UI外壳
            return cache.addAll([
                './',
                'index.html',
                'static/js/manifest.2ae2e69a05c33dfc65f8.js',
                'static/js/vendor.4fea789d7b45a52ad86b.js',
                'static/js/app.a87a2a2b768e08be4131.js',
                'static/css/app.503a92516169206d6d2605c83a4c985b.css',
                'static/img/icons/favicon.ico'
            ]);
        }).then(() => {
            //当第一次访问网站，service worker安装完成后，立即激活，并投入使用。而不用等待下次重新加载页面时去激活。
            return self.skipWaiting();  //self.skipWaiting()强制等待中的 Service Worker 被激活
        })
    );
});

/**
 * 新的service worker激活后，清楚旧的cache缓存，并立即使更新生效
 */
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            
            //删除旧的缓存
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith(staticCachePrefix) && cacheName !== staticCacheName;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        }).then(() => {
            // tell service worker to take control of any open pages.
            self.clients.claim();  //确保底层 Service Worker 的更新立即生效。
        })
    );
});

/**
 * 对于静态的已知的资源可以在安装时缓存，但对于变化的未知名的网络请求资源，则需要通过监听fetch事件来动态缓存
 */
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
    // event.respondWith(
    //     caches.match(request).then(response => {
    //         return response || fetch(request);
    //     })
    // );
    event.respondWith(
        caches.match(request,{ ignoreMethod: true }).then(response => {  //可在match中设置{ ignoreSearch: true }，表示忽略查询字符串,ignoreMethod表示忽略post和get方式来匹配
            if (response) {
                return response;  //如果能在缓存中查找到，则返回缓存中的资源
            }

            let requestToCache = request.clone();
            return fetch(requestToCache).then(response => {
                if (!response || response.status !== 200) {
                    return response;
                }

                let responseToCache = response.clone();
                caches.open(staticCacheName).then(cache => {
                    cache.put(requestToCache, responseToCache);
                });
                return response;
            });
        })
    );
});


/**
 * Service Worker toolbox  库
 */