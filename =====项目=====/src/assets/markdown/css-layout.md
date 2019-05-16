## 一、居中布局
#### 1、水平居中
###### a、inline-block + text-align
```
//css
.parent{
	text-align: center;
}
.child{
	display: inline-block;
}

//html
<div class="parent">
	<div class="child">Demo</div>
</div>
```
Tips：兼容至IE8.

![image](https://github.com/libbGit/static-file/blob/master/image/layout/horizontal-center.png?raw=true)

###### b、table + margin
```
//css
.child{
	display: table;
	margin: 0 auto;
}

//html
<div>
	<div class="child">Demo</div>
</div>
```
Tips：兼容至IE8.

![image](https://github.com/libbGit/static-file/blob/master/image/layout/horizontal-center.png?raw=true)

###### c、absolute + transform
```
//css
.parent{
	position: relative;
	height: 30px;
	width:200px;
}
.child{
	position: absolute;
	left:50%;
	transform: translateX(-50%);
}

//html
<div class="parent">
    <div class="child">Demo</div>
</div>
```
Tips：可兼容至IE9，因为transform限制。

![image](https://github.com/libbGit/static-file/blob/master/image/layout/horizontal-center.png?raw=true)

###### d、flex  +  justify-content
```
//css
.parent{
	display: flex;
	justify-content: center;
}

//html
<div class="parent">
	<div>Demo</div>
</div>
```
Tips：可兼容至IE10，但flex提供的布局很强大。

![image](https://github.com/libbGit/static-file/blob/master/image/layout/horizontal-center.png?raw=true)

#### 2、垂直居中
###### a、tablet-cell + vertical-align
```
//css
.child{
	display: table-cell;
    vertical-align: middle;
    height: 100px;
}

//html
<div>
	<div class="child">Demo</div>
</div>
```
![image](https://github.com/libbGit/static-file/blob/master/image/layout/vertical-middle.png?raw=true)

###### b、absolute + transform
```
//css
.parent{
	position: relative;
	
	width: 80px;
	height: 120px;
}
.child{
	position: absolute;
	top: 50%;
	transform:translateY(-50%);
}


//html
<div class="parent">
    <div class="child">Demo</div>
</div>
```
![image](https://github.com/libbGit/static-file/blob/master/image/layout/vertical-middle.png?raw=true)

###### c、flex + align-items
```
//css
.parent{
	display: flex;
	align-items: center;

	width: 80px;
	height: 120px;
}

//html
<div class="parent">
	<div>Demo</div>
</div>
```
![image](https://github.com/libbGit/static-file/blob/master/image/layout/vertical-middle.png?raw=true)

#### 3、水平垂直居中
###### a、table-cell  + vertical-align + text-align
```
//css
.parent{
	width: 120px;
	height: 80px;
	
	display: table-cell;
    vertical-align: middle;
    text-align: center;
}

//html
<div class="parent">
	<div>Demo</div>
</div>
```

###### b、absolute + transform
```
//css
.parent{
	position: relative;

	width: 120px;
	height: 80px;
}
.child{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
}

//html
<div class="parent">
	<div class="child">Demo</div>
</div>
```
![image](https://github.com/libbGit/static-file/blob/master/image/layout/center.png?raw=true)

###### c、flex
方案1

```
//css
.parent{
	display: flex;
	justify-content: center;
	align-items: center;

	width: 120px;
	height: 80px;
}

//html
<div class="parent">
	<div>Demo</div>
</div>
```

方案2 

```
.parent{
	display: flex;
    height: 300px;
    width: 200px;
}
.child {
	margin: auto; 
}

//html
<div class="parent">
	<div class="child">Demo</div>
</div>
```
![image](https://github.com/libbGit/static-file/blob/master/image/layout/center.png?raw=true)


## 二、多列布局
一列定宽，一列自适应

```
//css
.container{
   display: flex;
}
.left{
	width: 100px;
	margin-right: 20px;
}
.right{
	flex: 1;
}

//html
<div class="container">
	<div class="left">left</div>
	<div class="right">
		<div>right1</div>
		<div>right2</div>
	</div>
</div>
```
![image](https://github.com/libbGit/static-file/blob/master/image/layout/muti-column.png?raw=true)

## 三、等分布局

```
//css
.parent {
	display: flex;
}

.column {
	flex: 1;
}

//html
<div class="parent">
	<div class="column">column 1</div>
	<div class="column">column 2</div>
	<div class="column">column 3</div>
	<div class="column">column 4</div>
</div>
```
![image](https://github.com/libbGit/static-file/blob/master/image/layout/same-column.png?raw=true)
