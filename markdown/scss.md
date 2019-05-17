sass让人们受益的一个重要特性就是它为css引入了变量。你可以把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值。

##### 1、变量声明;【使用$符号】
当变量定义在css规则块内，那么该变量只能在此规则块内使用。如果它们出现在任何形式的{...}块中（如@media或者@font-face块）中时，只能在块内生效。

```
$highlight-color: #F90;  //变量名使用中划线和下划线都行

.login-wrap {
  text-align: center;
  font-size: 30px;
  color:$highlight-color;
  border:1px solid $highlight-color
}
```

```
$highlight-color: #F90;    //可以在login-wrap外的块中使用

.login-wrap {
  $width: 30px;
  text-align: center;
  font-size: $width;    //只能在login-wrap块中使用
  color:$highlight-color;
}
```

##### 2、css嵌套
可以避免重复多次的写父选择器。将嵌套的选择器作为子选择器。

```
.center{
  .title{
    font-size: 20px;
    font-weight: bold;
  }

  input{
    background-color: gray;
  }
}
 /* 编译后 */
.center .title {
   font-size: 20px;
   font-weight: bold; 
}
.center input { background-color: gray;}
```

群组的嵌套

```
//子元素群组
.container {
  h1, h2, h3 {margin-bottom: 10px}
}
编译后
.container h1, .container h2, .container h3 { margin-bottom: 10px }
```

```
//父元素群组
nav, aside {
  a {color: blue}
}
编译后
nav a, aside a {color: blue}
```

##### 3、父元素的引用
有时并不是让嵌套的作为子原则器，而是父选择器的补充，比如:hover,，此时必须使用 父元素的引用符 &, 此时&代表父元素 

```
.center{
  input{
    background-color: gray;
  }

  &:hover{ 
    color:red;
  }
}
编译后
.center input{background-color: gray;}
.center:hover{color:red;}
```
##### 4、子组合和同胞选择器的使用 >、+ 和 ~ ;
可以把它们放在==外层选择器**后边**==，或==里层选择器**前边**==：

```
article {
  ~ article { border-top: 1px dashed #ccc }  //里层选择器前面
  > section { background: #eee }
  dl > {    //外层选择器前面
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}

//编译后
article ~ article { border-top: 1px dashed #ccc }
article > footer { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }
```
##### 5、混合器
通过变量我们可以对单个css值，定义定义和重用，如果对多个css值，都写变量，显得太麻烦，所以使用混合器一次性定义多个。

**通过@mixin定义， 通过@include使用**

```
@mixin rounded-corners {
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
}

.center{
  input{
    background-color: gray;
    @include rounded-corners;
  }
}
编译后
.center{
  input{
    background-color: gray;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
  }
}
```

可以给混合器传参

```
@mixin rounded-corners($normal) {
  -moz-border-radius: $normal;
  -webkit-border-radius: $normal;
  border-radius: $normal;
}

.center{
  input{
    background-color: gray;
    @include rounded-corners(50%);
  }
}
```
##### 6、继承
变量是基于单个 css 属性的，mixin是基于多个css属性的，并且这两个都是同属一个css样式文件才生效，

而继承是基于css类的，可以在不同的css文件间使用，既可以给自身的选择器用，也可以给继承的后代选择器用

```
//1.css
@mixin rounded-corners($normal) {
  -moz-border-radius: $normal;
  -webkit-border-radius: $normal;
  border-radius: $normal;
}

.center{  //可用于class为center的元素
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  input{
    background-color: gray;
    @include rounded-corners(50%);   //使用混合器
  }
  &:hover{
    color:red;
  }
}
```

```
//2.css
.password {
  @extend .center;      //继承.center的所有样式。
  box-shadow: 0 0 0 10px red inset;
}
```
不仅会继承.center自身的所有样式，任何跟.center有关的组合选择器样式也会被.password 以组合选择器的形式继承

```
//不要使用后代选择器去继承
.password .text{   //不推荐
  @extend .center;
}
```
extend-Only 选择器【将原来的“ . ”使用“ % ”定义，只用于继承，不会给某个元素用】

```
%center{  //只用于@extend的使用，不会给class为center的元素用，况且此时也不是class样式了
  input{
    background-color: gray;
    @include rounded-corners(50%);
  }
  &:hover{
    color:red;
  }
}
.password {
  @extend %center;
  box-shadow: 0 0 0 10px red inset;
}
```
