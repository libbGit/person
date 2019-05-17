## css

css 中颜色的关键字一共有 17 个
aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, and yellow.

### 可以使用百分比的 CSS

**背景**

```
background-position
 default:  0% 0%
 参考: 自身高和宽（只设置一个。另一个将会是50%）
```

```
//规定背景图像的尺寸
background-size
 default: auto（即只按照图像的实际大小展示）
 参考: 	当前元素本来的 宽和高(比如给div设置背景图，则自身元素就是div)

<div></div>
div{
  width:100px;
  height:200px;
  background:url(/i/bg_flower.gif);
  background-size:50% 50%;  //实际为50px 100px
  background-repeat:no-repeat;
}
```

**边框**

```
border-radius
 default：0
 参考: 当前元素的宽和高
```

**宽和高**

```
height
 default: auto (浏览器会计算出实际的高度)
 参考：基于包含它的父元素的高度
```

```
width
 default: auto (浏览器会计算出实际的高度)
 参考：基于包含它的父元素的宽度
```

**字体**

```
font-size
 默认值: medium
 参考: 父元素的font-size大小
```

**内/外边距**

```
margin
 默认值: 0
 参考: 基于父元素的宽（即使是margin-top/margin-bottom也是基于宽度）
```

```
padding
 默认值: 0
 参考: 基于父元素的宽（即使是padding-top/padding-bottom也是基于宽度）
```

**定位**

```
bottom/top
 默认值: auto（通过浏览器计算底部的位置）
 参考: 已定位元素的高(relative参考自身元素，absolute参考离自己最近的已定位的父元素)
```

```
left/right
 默认值: auto（通过浏览器计算底部的位置）
 参考: 已定位元素的宽(relative参考自身元素，absolute参考离自己最近的已定位的父元素)
```

```
line-height
 默认值: normal(设置合理的行间距)
 参考: 基于当前字体font-size大小。
```

```
transform-origin
 默认值: 50% 50% 0
 参考: 分别基于x轴，y轴，z轴
```

### CSS 中的 3 个带有 origin 的属性

```
background-origin
默认值: padding-box
值: padding-box|border-box|content-box
```

```
transform-origin
 默认值: 50% 50% 0
 值: x-axis y-axis z-axis(axis可取left、center、right、数值、%值)
```

### CSS 属性的渲染顺序

元素按照 display， position，float 的顺序渲染，
如果 dispaly 为 none，则 position 和 float 都不执行，否则开始执行 position；
如果 position 的值为 absolute 或者 fixed，那么 float 则不执行，元素的位置由 top，right 等决定。
如果 position 为其他值，则开始执行 float
