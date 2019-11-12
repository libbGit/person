## 前言 
对于 *数字*，*boolean* 和 *字符串* 等基本类型 而言，赋值、浅拷贝和深拷贝无意义，因为每次都会在堆中开辟一块新的空间，指向新的地址。

## 一、赋值: 
指向同一个地址，不拷贝。

![image](https://image-static.segmentfault.com/266/319/2663191658-5be8fe6ddb083_articlex)

```
var obj1 = {name:'圆', radius:10, point:{x:0,y:0}};
var obj2 = obj1;
 
obj2.name = "圆2";  //obj1中的name也会变
```

## 二、浅拷贝: 
![image](https://image-static.segmentfault.com/413/426/413426385-5be8fec3bc9e4_articlex)

```
var obj1 = {name:'圆', radius:10, point:{x:0,y:0}};
var obj2 = Object.assign({},obj1);
 
obj2.name="圆2"  // obj1.name不会变
obj2.point.x = 2       //obj1.point.x 改变，因为只拷贝到point一层

同样，解构赋值也是如此
var obj1 = {name:'圆', radius:10, point:{x:0,y:0}};
var obj2 = {…obj1}
```

## 三、深拷贝: 
![image](https://image-static.segmentfault.com/410/881/4108810455-5be8ff385c57d_articlex)

#### 方法1 
> JSON.stringify(obj)  先将对象转换为字符串
>
> JSON.parse(str)      然后再将字符串转为对象。

```
var obj1 = {name:'圆', radius:10, point:{x:0,y:0}};
var obj2 = JSON.stringify(obj1 );
var obj2 = JSON.parse(obj2);
 
obj2.name = "圆2";  // obj1 不变
obj2.point.x = 3;     //  obj1 不变
```
但JSON.stringify在转换**Date，RegExp对象及function**时会出现问题，同时也会**忽略undefined、function**。

```
//date 类型
var o = new Date();
console.log(o.toString());         //  Mon Nov 06 2017 11:23:35 GMT+0800 (China Standard Time)  本地标准时间
console.log(JSON.stringify(o));    // "2017-11-06T03:23:35.547Z"  国际标准时间
```
因为stringify默认调用的是Object的toJSON方法，所以重写Date的toJSON，然后stringify就是ok的。

```
Date.prototype.toJSON = function () {
  return this.toLocaleString();
}
console.log(JSON.stringify(o));      // "11/6/2017, 11:23:35 AM"
```

同理RegExp

```
//RegExp类型
r1 = /\d+/;
console.log(JSON.stringify(r1));           //   {}
 
RegExp.prototype.toJSON = function(){
return this.toString();
}
console.log(JSON.stringify(r1));          //    "/\\d+/" 
```

#### 方法2

> 类库的方式。jquery,lodash等库

```
//jquery
let  y = $.extend(true,{},x)   //第一个参数 必须为true

//lodash库
let  y = _.cloneDeep(x);
```

