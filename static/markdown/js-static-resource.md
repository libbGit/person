前言: 
对于非静态的文件，如js，当webpack打包时，会被直接打到模块文件中，如main.js，如果修改了，需要再次编译

而对于静态文件，如jpg，svg等，我们不希望webpack去打包，只需要在build完后，直接放到dist下的某个路径下即可，随时可以修改，并不需要再次编译

首先，看一段很熟悉的webpack配置

```
{
    test: [/\.jpg/],
    loader: require.resolve('url-loader'),
    options: {
        limit: 10000,
        name: 'static/media/[name].[ext]',
    },
}
```
它表明，在解析jpg文件时，只需要提供一个url即可，bytes小于10000的转为base64。 此url为static/media/xxx.jpg。

**注意：此处的url已经不是 项目文件夹结构的那个url(如src/assets/image/xxx.jpg), 而是 static/media/xxx.jpg，当编译后，dist/static/media中会出现 xxx.jpg**

那么我们如何在组件中引入静态资源呢？

有两种方式:

1、在组件最上方，使用import导入

```
import b  from "@/assets/image/a.jpg"
//此时 b 的值为 static/media/a.jpg
```
在组件中

```
<img src={b}/>
```

2、使用require导入
如果不在组件上方使用import导入，而是在组件中的任意位置使用时，可通过require引入

```
<img src={require("@/assets/image/a.jpg")}>
//此时require("@/assets/image/a.jpg")的值就是static/media/a.jpg
```


那么同理，如果想让markdown等其他文件，也成为静态资源。

第一步:

```
{
    test: [/\.md/],
    loader: require.resolve('url-loader'),
    options: {
        limit: 10,  //可以设置小点
        name: 'static/media/[name].[ext]',
    },
}
```
第二步:

```
//md文件和jpg不同，我们需要的最终是md文件的内容，不是url
axios.get(require("@/assets/image/map.md")).then(res=>{
    //res.data 就是内容
})
```
然后部署上去后，如果后期我们需要对map.md做修改，则直接修改static/media/map.md文件就行了，直接生效，不需要再次编译

