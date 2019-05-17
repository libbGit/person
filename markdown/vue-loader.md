## 一、资源路径处理

### 1、<template>部分

因为 webpack 会将静态资源都打包在 dist 下的某个文件夹中，并且文件名还有 hash 值。这个目录和项目中资源的路径完全不同。

比如

```
src/assets/image/logo.jpg
   经过webpack编译后，可能路径为
dist/public/image/logo.1d997ea3.jpg
```

而 node 的 require("/src/assets/image/logo.jpg")方法在找 url 时，会遍历查找已经编译好的资源，通过正则表达式匹配到相同名称，并带有 hash 值的那个文件，即
dist/public/image/logo.1d997ea3.jpg

然后加载进来。

而当 Vue Loader 编译单文件组件中的 <template> 块时，它也会将所有遇到的资源 URL 转换为 webpack 模块请求。(这样我们就没必要手动调用 require 了，交给 vue-loader 处理了)

**vue-loader 默认可以处理的标签/特性的组合如下:**

```
{
  video: ['src', 'poster'],
  source: 'src',  //source元素上的src属性
  img: 'src',   //即img元素上的src属性
  image: 'xlink:href'
}
```

**转换规则:**

a、如果路径是绝对路径，会被原样保留。如/src/assets/image/login/title.png

```
//代码
<img src="/src/assets/image/login/title.png" alt="">

//渲染后html页面
<img data-v-70c98a68="" src="/src/assets/image/login/title.png" alt="">
//当然这个图片是无法展示的，因为编译后title.png已不在src/assets/image/login下了
```

b、如果路径以 . 开头，将会被看作相对的模块依赖。如 ./titlea.png

```
//代码
<img src="./titlea.png" alt="">

//渲染后html页面
<img data-v-70c98a68="" src="/static/img/titlea.1e9fa570.png" alt="">
```

c、如果路径以 @ 开头，也会被看作模块依赖。如果你的 webpack 配置中给 @ 配置了 alias，这就很有用了。所有 vue-cli 创建的项目都默认配置了将 @ 指向 /src

```
//代码
<img src="@/assets/image/login/title.png" alt="">

//渲染后html页面
<img data-v-70c98a68="" src="/static/img/title.1e9fa570.png" alt="">
```

d、如果路径以 ~ 开头，其后的部分将会被看作模块依赖，即可以加载含有别名的静态资源，又可以加载 node-modules 中的资源。如

```
//代码
<img src="~@/assets/image/login/title.png" alt="">
//渲染后html页面
<img data-v-70c98a68="" src="/static/img/title.1e9fa570.png" alt="">


//代码
<img src="~[npm包名]/logo.png" alt="">
//渲染后的html页面
<img data-v-70c98a68="" src="/static/img/logo.2f53e458.png" alt="">
```

### 2、<style>部分

由于 vue-loader 在处理 style 时，采用的是 style-loader，所以可能 和上面<template>部分的转换规则不太一样。

```
//即在vue-loader的内部使用css-loader
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {  //默认选项
          url: true,
          import: true,
        },
      },
    ],
  },
};
```

url 为 true 时，则意味着可以将 url 中的字符串通过 require()加载进来

**转换规则**

a、如果路径是绝对路径，会被原样保留。如 /src/assets/image/login/title.png

```
//代码
<style scoped>
.login-wrap {
  background-image: url("/src/assets/image/login/title.png");
}
</style>

//渲染后css
.login-wrap[data-v-70c98a68] {
  background-image: url(/src/assets/image/login/title.png);
}
```

b、如果路径以 . 开头，将会被看作相对的模块依赖。如 ./titlea.png

```
//代码
<style scoped>
.login-wrap {
  background-image: url("./titlea.png");
}
</style>

//渲染后css
.login-wrap[data-v-70c98a68] {
  background-image: url(/static/img/titlea.1e9fa570.png);
}
```

c、如果路径以 ~ 开头，其后的部分将会被看作模块依赖，即可以加载含有别名的静态资源，又可以加载 node-modules 中的资源。如

```
//代码
<style scoped>
.login-wrap {
  background-image: url("~[npm包名]/logo.png");
}
</style>

//渲染后css
.login-wrap[data-v-70c98a68] {
  background-image: url(/static/img/logo.e05643fc.png);
}




//代码
<style scoped>
.login-wrap {
  background-image: url("~@/assets/image/login/bg.png");
}
</style>

//渲染后css
.login-wrap[data-v-70c98a68] {
  background-image: url(/static/img/bg.1d997ea3.png);
}
```

注意：
和上面的 template 相比，*唯独少了直接用@开头的方式 url("@/assett/logo.png")*
