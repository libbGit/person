```
//此文件中可以正常使用js的api
navigator.serviceWorker
  .register("sw.js")  //在注册时会自动的下载 sw.js，并解析代码
  .then(registration => {
    //libb add 
    if (registration.installing) { 
      console.log("Service worker installing");
    } else if (registration.waiting) {
      console.log("Service worker installed");
    } else if (registration.active) {
      console.log("Service worker active");
    }
    //libb end
    
    /**
     * 用户首次访问service worker控制的网站或页面时，service worker会立刻被下载。
     * 当register成功后，会进入安装阶段，在这个阶段中，如果sw.js中监听 install 事件，会执行，并缓存指定资源。
     * 一旦监听的安装事件执行成功，则进入 activate 阶段，在此阶段会清除旧的缓存资源，使用新的缓存资源。
     * 
     * 
     * registration对象的api
      registration= {
        installing: null,                    //inst
        waiting: null                        //installed
        active: [ServiceWorker]             //actived
           onerror:null,
           onstatechange: [function],
           scriptURL: "https://libbgit.github.io/person//service-worker.js",
           state:'activated'
        },
        backgroundFetch: [BackgroundFetchManager],
        navigationPreload: [NavigationPreloadManager],
        onupdatefound: [function],
        paymentManager: [PaymentManager]
          userHint:'',
          instruments: [PaymentInstruments]
        pushManager: [PushManager],
        scope:"https://libbgit.github.io/person/",
        sync: [SyncManager],
        updateViaCache: "imports",
     * 
     */
    

    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            
          }
        }
      };
    };
  }).catch(error => {
    console.error("Error during service worker registration:", error);
  });

```