```
/*
 self 表示 ServiceWorkerGlobalScope 即，全局的serviceworker工作环境（包含window对象）。在此文件中，js的其他api无法使用。
 定义需要缓存哪些资源，监听 install  activate message fetch sync push6个事件
  self 的api
  {
    babelHelpers: {
        asyncToGenerator: [function]
    },
    caches: [CacheStorage],
    clients: [Clients],
    cookieStore: [CookieStore],
    crypto: [Crypto]
        subtle: SubtleCrypto
    fetch: [function],
    fonts:[ FontFaceSet]
        onloading:null,
        onloadingdone:null,
        onloadingerror:null,
        status: "loaded",
        ready: [promise]
    indexedDB: [ IDBFactory],
    isSecureContext: true,
    location: [WorkerLocation]
        hash: ""
        host: "libbgit.github.io"
        hostname: "libbgit.github.io"
        href: "https://libbgit.github.io/person//service-worker.js"
        origin: "https://libbgit.github.io"
        pathname: "/person//service-worker.js"
        port: ""
        protocol: "https:"
        search: ""
    navigator: [WorkerNavigator]
        appCodeName: "Mozilla"
        appName: "Netscape"
        appVersion: "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
        connection: [ NetworkInformation]
        deviceMemory: 8
        hardwareConcurrency: 4,
        locks: LockManager {}
        onLine: true
        permissions: [ Permissions ]
        platform: "Win32"
        product: "Gecko"
        serial: null
        storage: [ StorageManager ]
        usb: null
        userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
    onabortpayment: null
    onactivate: null
    onbackgroundfetchabort: null
    onbackgroundfetchclick: null
    onbackgroundfetchfail: null
    onbackgroundfetchsuccess: null
    oncanmakepayment: null
    oncookiechange: null
    onerror: null
    onfetch: null
    oninstall: null
    onmessage: null
    onnotificationclick: null
    onnotificationclose: null
    onpaymentrequest: null
    onpush: null
    onrejectionhandled: null
    onsync: null
    onunhandledrejection: null
    origin: "https://libbgit.github.io",
    performance:  [ Performance]
        oneventtimingbufferfull: null
        onresourcetimingbufferfull: null
        timeOrigin: 1550566172889.59
    registration: [ ServiceWorkerRegistration ]
    skipWaiting: [ function ]
    
    __precacheManifest: [ {revision: "a15186b79e5a9cad3fbdbaa8892f852c", url: "/person/static/media/iconfont.a15186b7.woff"} ]   // __precacheManifest 通过 importScripts( "/person/precache-manifest.71cd493771c1fd5e72be9609cc52e7cd.js" );得到的

    //还包括通用的一切通用的api，如addEventListener
  }
 */

self.addEventListener("install", function(event) { 
  event.waitUntil(
    caches.open("v1").then(function(cache) {
      return cache.addAll([
        "/sw-test/",
        "/sw-test/index.html",
        "/sw-test/style.css",
        "/sw-test/app.js",
        "/sw-test/image-list.js",
        "/sw-test/star-wars-logo.jpg",
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg"
      ]);
    })
  );
});

self.addEventListener("activate", function(event) {
  //todo
});

self.addEventListener("message", function(event) {
  //todo
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then(function(response) {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            let responseClone = response.clone();

            caches.open("v1").then(function(cache) {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(function() {
            return caches.match("/sw-test/gallery/myLittleVader.jpg");
          });
      }
    })
  );
});

self.addEventListener("sync", function(event) {});

self.addEventListener("push", function(event) {});

```