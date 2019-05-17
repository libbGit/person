### 1、css选择符不能以数字开头
[data-date$===20180416==]

```
<div data-date="20180416">第一个 div 元素。</div>

[data-date$=20180416]
{
   background:red;
}
```
这种出错，
div元素处的20180416为一个变量。而变量不能以数字开头。虽然可以以
$开头，但此处的$符已被占用为判断属性结束的标志。所以需要转义下

```
<div data-date="$20180416">第一个 div 元素。</div>

[data-date$=\$20180416]
{
   background:red;
}
```
这样就ok了。

### 2、toFixed()不能用作四舍五入
```
(1.115).toFixed(2)   // "1.11"
(1.125).toFixed(2)    //"1.13"
```
它既不是四舍五入，也不是五舍六入，而是啥都不是。非常不稳定。无法预测。

可以用Math.round()或者math.js库。


### 3、form表单的四种编码方式
- 使用POST方式发送请求，并且enctype="application/x-www-form-urlencoded"(默认方式)
- 使用POST方式发送请求，并且enctype="text/plain"
- 使用POST方式发送请求，并且enctype="multipart/form-data"(二进制上传必须使用此方法)
- 使用GET方式发送请求，自动忽略enctype属性

```
// 第一种=========================================================
Content-Type: application/x-www-form-urlencoded
foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A

// 第二种=========================================================
Content-Type: text/plain

foo=bar
baz=The first line.
The second line.

// 第三种=========================================================
Content-Type: multipart/form-data; boundary=---------------------------314911788813839

-----------------------------314911788813839
Content-Disposition: form-data; name="foo"

bar
-----------------------------314911788813839
Content-Disposition: form-data; name="baz"

The first line.
The second line.

-----------------------------314911788813839--

// 第四种=========================================================
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

### 4、文件上传的3种原生方式
- post方式，form表单enctype="multipart/form-data"，通过submit发送数据
- 使用FormData对象，通过XMLHttpRequest发送数据
- 使用FileReader，通过XMLHttpRequest发送数据或其他

```
//原生js上传文件
var formData = new FormData();

formData.append("username", "Groucho");

//fileInputElement为文件上传元素
formData.append("userfile", fileInputElement.files[0]);

// JavaScript file-like 对象
var content = '<a id="a"><b id="b">hey!</b></a>'; // 新文件的正文...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);


var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);

request.addEventListener("load", function(e){
    //callback
    var response = JSON.parse(e.target.responseText);
    if (response && response.ret == 0) {
        //success
    } else {
        //fail
    }
}, false);

/**
注意:只有在使用XMLHttpRequest方式时采用FormData或FileReader上传文件。
    使用ajax时可以不使用，因为可以使用序列化
*/
```

### 5、动态设置属性名称

如果想让属性名通过字符串拼接，然后访问，则使用[],而不是点，因为点无法拼接。

```
var name = "test_"+1;   //生成函数名
var name = "test_"+2;   //生成函数名
window[name] = 100;  //name会被替换为真实的值 等于window["test_1"] 等于 window.test_1

//window.name 则不会转换name的值，会认为name就是属性名称
```

### 5、在input[type=file]中对同一个文件，无法重复上传的问题
this.$refs.uploadRef.value = null; 
