## 一、method 4种方式
### 1、get方式( 获取数据)
> get(url: string, config?: AxiosRequestConfig)

```
fetch.get("/advertiser/getList", {
    params: {
        ids: [1, 2, 3],
    }
})
```
会进入局部或者全局的paramsSerializer函数进行序列化处理

如果不处理，上面的 {ids:[1, 2, 3]} 最后变成advertiser/getList?[object%20Object]

```
let instance = axios.create({
  baseURL: base_url,
  timeout: 60000,
  paramsSerializer: function(params) {
    return params;
  }
});
```
### 2、post（修改数据）
> post(url: string, data?: any, config?: AxiosRequestConfig)
>
> 第二个参数为post的data，第三个参数为config

```
fetch.post("/advertiser/getList", {
        id,
        page: this.currentPage, 
        limit: this.pageSize,
        keyword: this.ser_name
    },
    {
        params: {
            ids: [1, 2, 3],
        },
        
    }
)
```
post方式 如果不配置config 的params，则不会进入paramsSerializer， 不序列化处理。

如果配置了config的params，则进入进入paramsSerializer进行params的序列化

此时它既可以发送 rquest payload， 又可以发送 query 参数。

### 3、put（新建数据）
> put(url: string, data?: any, config?: AxiosRequestConfig)

类似post方式。

### 4、delete（删除数据）
> delete(url: string, config?: AxiosRequestConfig)

### 4、all（执行并发）
```
function getUserAccount() {
  return fetch.get('/user/12345');
}

function getUserPermissions() {
  return fetch.get('/user/12345/permissions');
}

fetch.all([getUserAccount(), getUserPermissions()])
  .then(fetch.spread(function (acct, perms) {
    // 两个请求现在都执行完成
}));
```

## 二、自定义axios实例
由于在上面4中method中，可以通过config配置自己的配置项。

但我们可以通过创建axios实例，配置全局的配置项，它对所有的请求生效

Axios的定义， instanceConfig 可以为 AxiosRequestConfig 的部分或者全部

```
function Axios(instanceConfig) {
	this.defaults = instanceConfig;
	this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	};
}
```
通过axios.create创建实例时，将传入的instanceConfig和内部默认的defaults合并，再赋值给this.defaults

```
axios.create(instanceConfig)
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  paramsSerializer: function(params) {
    //TODO
    return params;
  }
});
```

所以在外部既可以访问defaults，又可以配置defaults

```
instance.defaults.baseURL = 'https://api.example.com';
instance.defaults.timeout = 2500;
```

甚至配置 拦截器interceptors

```
instance.interceptors.request.use(
  config => {
      //TODO
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
```
## 三、配置选项全部字段
AxiosRequestConfig的全部字段

```
{
  // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: : {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```



