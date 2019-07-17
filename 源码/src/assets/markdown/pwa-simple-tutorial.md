前言:

我们的应用可以分为两部分，一部分是属于主进程的(包括 js(同步,异步)，以及 dom 渲染等等)，在一个时刻点，只能执行一个，要么先去渲染 dom，完了再去执行 js；要么执行完 js，在去渲染 dom，而不能同时执行 js 和 dom 渲染。 另一部分属于 worker 进程，它重新在后台起了一个进程，它和应用的主进程互不影响，可以同时执行。

常见的 worker 有，web worker， service worker， shared worker 等等。

> 其中 service worker 一般作为 web 应用程序、浏览器和网络（如果可用）之间的代理服务。他们旨在创建有效的离线体验，拦截网络请求，以及根据网络是否可用采取合适的行动，更新驻留在服务器上的资源。他们还将允许访问推送通知和后台同步 API。用来构建 PWA 应用

使用 service-worker 前，我们必须要先在主进程中注册它，然后才能在 service-worker 进程中编写逻辑。

**主进程**

```
//index.js
if ("serviceWorker" in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").then(registration=>{
        console.log("register succces...")
      }, err=>{
        console.log("register error...",err)
      });
    });
  }
```

**service-worker 进程**

```
//service-worker.js
console.log('Hello from service-worker.js');
```

> service-worker 的语法简介
>
> 在 service-worker.js 中，self/this 表示 ServiceWorkerGlobalScope， 即全局的 serviceworker 工作环境，相当于在主进程中的 window。在此文件中，js 的其他 api 无法使用，如 DOM，BOM 操作等，但是大部分的 js api 可用，同时 ES6 也可以使用。
>
> 在 service-worker 中可以定义监听事件，然后在对应事件中进行逻辑处理。
>
> 具体 api 可查看[ service worker MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)

service-worker 进程的执行流程

1. 首先在主进程中开始注册，调用 register 方法，进入 sw 进程，在 sw 进程中判断如果还没有安装 service worker.js，则触发 install 事件。开始安装
2. 一旦 sw 进程安装完成，会通知主进程 register 成功。
3. 接着在 sw 进程 触发到 activate 事件。
4. 如果已经安装过 service-worker.js 文件，则在注册时会发现并跳过 install 事件，直接进入注册成功，然后触发 activate 事件。
5. 然后开始在 sw 进程中通过 fetch 事件，来监听 http 请求，并对请求和响应进行缓存。

```
//在service worker中监听install
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
```

除了 install 之外，还有 activate，message，fetch，sync，push 等事件。

打开 chrome 浏览器的 application->service workers，会看到
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/chrome-service-worker.png)
可以看到 status 为 actived and is running，表明 service-worker 已经安装成功了。

而我们每次手动维护 install 中的缓存列表，尤其在 npm run build 后，文件都会包含 hash 值，每次都可能不一样，所以要维护这个列表效率是相当低的。

所以 chrome 官方推出了**wokbox**框架

> wokbox 是用于向 web 应用程序添加离线支持的 JavaScript 库。

要使用 wokbox，只需在 service-worker.js 文件中引入 workbox-sw.js 即可，然后会自动的在 service-worker.js 中创建 workbox 对象，

```
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
```

在 wokbox 对象中，包含很多模块，比如 workbox.routing 模块，workbox.precaching 模块，workbox.strategies 模块，workbox.expiration 模块等等，它们分别负责处理不同的逻辑。

## 1、workbox 缓存/预缓存

```
//缓存文件
workbox.routing.registerRoute(
  /\.css$/,   //通过正则匹配需要缓存哪些文件
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'css-cache',  //缓存名，可在application-> Cache storage下找到
  })
);

workbox.routing.registerRoute(
  /\.(?:js)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'js-cache',
    plugins: [
      //设置过期时间和最大数量
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
```

workbox.routing.registerRoute 表明 当 service-worker 在安装之后，当页面有发送对应 http 请求时，开始缓存。

而下面的 workbox.precaching.precacheAndRoute 可以在 service-worker 在安装之前，就把对应文件预先缓存下来。

```
workbox.precaching.precacheAndRoute([
  "/app.0.css",
  "/app.bundle.js",
  { url: "/start.html", revision: "dd75b1ef1ac2d4726b03fe46e90423f1" }
]);
```

此时我们在 chrome 下的 application->cache storage，会看到
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/chrome-caches.png)

缓存的名称，和缓存的文件列表

## 2、workbox 路由

首先了解下处理路由的 workbox 的策略

- StaleWhileRevalidate， 此策略将对请求使用缓存响应，并在后台使用网络响应更新缓存。如果没有缓存，它将等待网络响应并使用它），这是一种相当安全的策略，因为这意味着用户会定期更新其缓存。
- NetworkFirst，这将首先尝试从网络获取请求。如果收到响应，它会将其传递给浏览器并将其保存到缓存中。如果网络请求失败，将使用最后一个缓存的响应。
- CacheFirst，此策略将首先检查缓存中的响应，如果有可用则使用该策略。如果请求不在缓存中，则将使用网络，并且在传递给浏览器之前，任何有效响应都将添加到缓存中。
- NetworkOnly，强制从网络获取。
- CacheOnly，，强制从缓存获取。

```
workbox.routing.registerRoute(
  '/logo.png',    //匹配字符串路由
  new workbox.strategies.NetworkFirst()    //采用NetworkFirst策略
);
```

```
workbox.routing.registerRoute(
  /\.js$/,   // 配置 正则 路由，
  new workbox.strategies.StaleWhileRevalidate(),  //采用StaleWhileRevalidate策略
);
```

```
//缓存第三方，比如jquery, 则策略最好使用NetworkFirst或者StaleWhileRevalidate， 不要使用CacheFirst
workbox.routing.registerRoute(
  'https://cdn.bootcss.com/jquery/3.4.1/jquery.js',
  new workbox.strategies.StaleWhileRevalidate(),
  //new workbox.strategies.NetworkFirst(),
);

//如果非要使用CacheFirst策略，则使用workbox.cacheableResponse.Plugin限定
workbox.routing.registerRoute(
  'https://cdn.bootcss.com/jquery/3.4.1/jquery.js',
  new workbox.strategies.CacheFirst({
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  }),
);
```

```
//还可以自定义策略的名称，过期时间等等
workbox.routing.registerRoute(
  /\.(?:js)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'js-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
```

在前面我们看到 cache 的名称为 workbox-precache-v2-http://127.0.0.1:8081/，下面我们修改下

```
//最好写在紧贴着importScripts workbox-sw.js的下面，如果写在文件最后，则不生效。
workbox.core.setCacheNameDetails({
  prefix: "my-app",
  suffix: "v1",
  precache: "custom-precache-name",
  runtime: "custom-runtime-name"
});
```

![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/custome-cache-name.png)

## 3、workbox 插件

- workbox.backgroundSync.Plugin：如果网络请求失败，请将其添加到后台同步队列，并在触发下一个同步事件时重试该请求。
- workbox.broadcastUpdate.Plugin：每当缓存更新调度时，广播频道上的消息或通过 postMessage()。
- workbox.cacheableResponse.Plugin：仅缓存符合特定条件的缓存请求。
- workbox.expiration.Plugin：管理缓存中项目的数量和最长期限。
- workbox.rangeRequests.Plugin：响应包含 Range:标头的请求，其中包含来自缓存的部分内容。

## 4、workbox debug

```
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts("precache-manifest.7df9e91fe595ae52486747ebe221a710.js");

//强制在service worker中使用debug。这样service worker中的log也能打印到chrome console上
workbox.setConfig({
  debug: true
});
```

![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/service-worker-log.png)

## 4、在 webpack 中 集成 workbox，来自动的生成 service worker

```
yarn add workbox-webpack-plugin
```

```
//webpack.config.js:
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack config...

  plugins: [
    // Other plugins...

    new WorkboxPlugin.GenerateSW()
  ]
};
```

然后执行

```
npm run build
```

此时在 dist 目录下会自动生成 precache-manifest.<revision>.js 和 service-worker.js 文件(为什么名字是这个，不是 sw.js，因为在注册时 register("/service-worker.js")写的这个名字)，如图:

![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/auto-generate-precache-manifest.png)

在 precache-manifest.<revision>.js 文件中，将预缓存列表通过全局变量 self.\_\_precacheManifest 公开，以便在 service-worker.js 中调用。
默认会预缓存一切资源。
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/precache-manifest.png)

在 service-worker.js 中，则自动加载 workbox cdn 和 precache-manifest.<revision>.js 文件，如图:
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/service-worker.png)

瞬间感觉方便了很多........

因为默认会预缓存一切资源，如果你不喜欢预缓存某些文件，如图片，而在运行时缓存，则可以在 runtimeCaching 中定制它们

```
// 这些选项帮助 ServiceWorkers 快速启用
new WorkboxPlugin.GenerateSW({
      // 在预缓存中排除 图片
      exclude: [/\.(?:png|jpg|jpeg|svg)$/],

      //定义运行时缓存（可接受多个json对象）
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          // 在缓存时使用 StaleWhileRevalidate 策略.
          handler: "StaleWhileRevalidate",
          options: {
            // 定义缓存这些图片的 cache名称
            cacheName: "my-images-cache",

            //配置 expiration
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60
            },

            // 配置 background sync.
            backgroundSync: {
              name: "my-queue-name",
              options: {
                maxRetentionTime: 60 * 60
              }
            },

            //配置哪些响应被认为是可缓存的
            cacheableResponse: {
              statuses: [0, 200],
              headers: { "x-test": "true" }
            },

            //配置广播缓存更新插件。
            broadcastUpdate: {
              channelName: "my-update-channel"
            },

            //matchOptions和fetchOptions用于配置handler
            fetchOptions: {
              mode: "no-cors"
            },
            matchOptions: {
              ignoreSearch: true
            }
          }
        }
      ],

      importWorkboxFrom: "cdn", //通过cdn加载workbox, 还可通过‘local’加载，这样会将整个workbox下载到本地，再从本地引用
      skipWaiting: false, // service worker是否应该跳过等待生命周期阶段
      clientsClaim: false, //service worker是否应该在任何现有客户端激活后立即开始控制它

      cacheId: "my-app-test",
      offlineGoogleAnalytics: true
    })
```

运行 npm run build 后，会看到自动生成如下的 service-worker.js
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/service-worker-webpack.png)

如果没出现，则只需要清空 cache 和 service-worker 文件即可，在 clear storage 中勾选 unregister service workers 和 cache storage，然后点击 clear site data 即可清理，然后刷新页面就会看到最新的 service worker 和 cache storage。
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/pwa/clear-storage.png)
