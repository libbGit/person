### 一、项目创建

```
> npm install create-react-app -g
> create-react-app react-app
```

### 二、基础
> react的组件实例(this)有几下几个属性context，props，refs，state：
> > state  用来存放本地的变量， 通过setState改变值
> 
> > props  用来获取父组件传入的值，不可改变。可以接受任意元素，包括基本数据类型、React元素(slot)或函数(包括事件函数)。
> 
> > refs  获取已渲染的dom元素节点，还可以操作元素  this.refs.inputRef.focus(); 但不能在无状态组件(只接受props，返回element)上使用，因为它们没有渲染的dom实例

在react中对变量设置值和获取值都是采用*单花括号"{}"*

当元素类型以小写字母开头时，它表示一个内置的组件，如 \<div> 或 \<span>，并将字符串 ‘div’ 或 ‘span’ 传 递给 React.createElement。 以大写字母开头的类型，如 \<Foo /> 编译为 React.createElement(Foo)，并它正对应于你在 JavaScript 文件中定义或导入的组件。
我们建议用大写开头命名组件


**切记，react中组件最好使用 *大写开头，中间驼峰* 方式命名。否则如果小写，会认为是html标准的组件，而不去解析render。导致内容无法渲染出来**


#### 1、state
- 总是使用setState更新state，不能直接修改state
- setState异步的，可以设置回调，在异步处理完值后，进行其他处理。

```
this.setState({ name: "i see" });
// 等价于下面这种

// this.setState((prevState, props) => ({
//   name: 'i see"
//}))

//如果在setState处理完成后，再进行其他操作。则设置回调
// this.setState((prevState, props) => ({
//     name: "i see"
// }),
// ()=>{
//     //异步执行完 成后的回调     
// });

```
setState更新的只是 this.state的值，不是其他的值。


#### 2、props
组件的属性可以接受任意元素，包括基本数据类型(props)、React元素(slot)或函数(包括事件函数)。

props主要来源2处: 父组件传值和通过connect绑定的state和reducer

```
<Home author="libingbing">内容不错呀</Home>
<!--author值，在子组件通过this.props.author获取-->

<Home author="libingbing"><span>子元素</span></Home>
<!--span元素，在子组件通过this.props.children获取-->

<TestProp options={<span>我是个react节点</span>}/>
<!-- 在子元素中直接this.props.options， 并通过{this.props.options}放入jsx中 -->

<Home author="libingbing" onClickChange={this.handleClickChange}></Home>
<!--在子组件中this.props.onClickChange(2)， 则父组件的handleClickChange方法会得到响应-->
```



```
<Select defaultValue="lucy" style={{ width: 120 }}/>

//如果赋值的是个变量，则只需提供{}即可
let name = "lucy";
<Select defaultValue={name} style={{ width: 120 }}/>
//除了字符串之外，其他的（变量，react元素，事件等）必须用{}赋值给props
```


#### 3、ref
表示为对组件真正实例的引用

```
<input type="text" ref={this.setTextInputRef} />


this.setTextInputRef = element => {
  this.textInput = element;  //element为普通的javascript dom，textInput持有input dom,  
  //this.textInput赋值之前，可以不用在constructor中提前声明。直接赋值
};

this.myRef = React.createRef();


//可以在其他地方操作dom
this.textInput.focus();
this.textInput.value;  //获取value属性
```

但是无状态组件，不能有ref属性

#### 4、事件
采用驼峰法 onClick，onChange...名字和普通的js事件一致

```
<div onClick={this.handleClick}>click me</div>

//作为事件的函数必须用箭头函数的形式，才能绑定this
handleClick = (event) => {
  event.target.value    //如果为input元素，可以获取其上的值
};


//给事件传递参数。比如删除列表时的id
<div onClick={(e)=>this.handleClick(e,"123")}>click me</div>

//作为事件的函数必须用箭头函数的形式，才能绑定this
handleClick = (event,id) => {
  event.target.value    //如果为input元素，可以获取其上的值
  // 对 id 操作
};

```



#### 5、样式
可以通过import导入css文件，但是引入的样式，会在当前组件和所有子组件，孙子组件中都能通过访问到。

可以使用className给元素设置class样式，之所以不用class的原因是，在react中class关键字已经被用来定义组件类了。

可以使用style来给元素设置样式属性，其值必须为一个对象，对象中的css的属性采用驼峰法。

```
//采用className
<div className="App"></div>

//采用style
//可以在组件外部提前定义好
const div1 = {
  width: "300px",
  margin: "30px auto",
  backgroundColor: "#44014C",  //驼峰法
  minHeight: "200px",
  boxSizing: "border-box"
};

//然后再render中即可
<div style={div1}>
```
#### 6、条件渲染 和 列表渲染
条件渲染

```
//render函数
if (isLoggedIn) {
  button = <div>1</div>;
} else {
  button = <div>2</div>;
}

return (
    <div>{button}</div>
)

//可以返回null，让组件 返回null,则禁止渲染组件。 //但componentWillUnmount和componentDidMount会执行
//render(){
//  return null;
//}
//类似于vue中的v-if


//或者通过一个无状态组件，在其中进行if else判断，并返回
```

列表渲染

```
三种方式，
第一种，在return前，将列表计算完成，并嵌入  dom中  {listItem}
第二种，直接在dom中计算  
  {
      list.map(item => {
        return <li key={item + "003"}>{item}</li>;
      })
  }
第三种，使用无状态组件，<ListComponent data={list} />    推荐

必须提供 key 属性。
当你在map()方法的内部调用元素时，你最好随时记得为每一个元素加上一个独一无二的key。元素的key在他的兄弟元素之间应该唯一
```

#### 7、JSX（javascript xml）
使用点 表示法

```
const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

在运行时选择类型

```
function Story(props) {
  // 错误！JSX 标签名不能为一个表达式。
  return <components[props.storyType] story={props.story} />;
}

function Story(props) {
  // 正确！JSX 标签名可以为大写开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

属性

```
//使用javascript表达式
<MyComponent foo={1 + 2 + 3 + 4} />

//字符串常量
<MyComponent message="hello world" />
//等价于 下面
<MyComponent message={'hello world'} />


//默认为 True
<MyTextBox autocomplete />
//等价于后面
<MyTextBox autocomplete={true} />


//扩展属性, 下面两个等效
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}


//子代  props.children. 可以像其它属性一样传递任何数据，而不仅仅是 React 元素
<MyComponent>Hello world!</MyComponent>

<Repeat numTimes={10}>
    {(index) => <div key={index}>This is item {index} in the list</div>}
</Repeat>

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));  //props.children(i)  此时(index) =>参数接受不同的i值，渲染不同的结果
  }
  return <div>{items}</div>;
}



//布尔值、Null 和 Undefined 被忽略, 不会显示在界面上。下面等价
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
 //这在利用短路的特性，判断是否渲染组件非常有用,showHeader如果为false，则压根不渲染后面的组件。生命周期钩子全都不进。
<div>
  {showHeader && <Header />}
</div>

如果你想让null，boolean值出现在渲染中，则需要转为字符串
{String(myVariable)}
```



#### 8、react中的变量的定义和使用
1)、将变量定义在state上。  对于组件中*的需要根据数据来做出页面响应*的字段，如isShow，isLoading之类的与状态有关的，需要定义到state上。
这样既可在react-devtools中看到，又能追踪到数据流的变化。

2)、将变量直接定义在this上。
对于组件中不需要根据数据变化，而更新页面的数据，如定时器ID、ref等，可直接定义在this上，不需要放入state中。

```
constructor(props,context){
    super(props);
    
    this.setTextInputRef = element => {
      this.textInput = element;  //element为普通的javascript dom，textInput持有input dom,  
      //this.textInput赋值之前，可以不用在constructor中提前声明。直接赋值
    };
}

componentDidMount() {
  this.timerID = setInterval(
      () => this.tick(),
      1000
  );
}
```
this.textInput获得值后，很少再改变，之后都是通过操作dom

```
this.textInput.focus();
this.textInput.value;  //获取value属性

clearInterval(this.timerID);
```


#### 9、react中定义组件的方法
```
//1、通过 extends Component 的class类，为有状态组件
class Model extends Component {
    
}

//2、通过 定义一个function, （可以传入props）,return 出一个 dom对象。为无状态组件
const PandaSvg = (props) => (
   //props上有传入的PandaSvg的属性和children，比如props.name   props.children
  <div></div>
);
// 高阶组件
function Base(Wrapper) {
  return class Base extends Component {
    render() {
      return (
        <div>
          <Wrapper></Wrapper>
        </div>
      );
    }
  };
}

//3、react dom
<Form>
    <div></div>
</Form>
```
所以在遇到 一个组件的参数需要传入组件时，可以使用上面3种的任意一种；

```
//使用无状态组件
<Icon component={PandaSvg}/>
```


#### 10、react中引入静态文件的方式
```
import logo from "@/assets/images/logo.svg";

//render中
<img src={logo}/>
```


```
import fist from "@/assets/images/2131.png";
import styled from "styled-components";

const SelfButton = styled.div`
  height: 150px;
  width: 150px;
  background-image: url(${props => props.src});
  background-size: 150px 150px;
`;


//render中
<SelfButton src={fist}>
   SelfButton
</SelfButton>
```


### 二、高级
#### 1、生命周期
```
//父  子组件的生命周期执行属性
 初始化   
      父 constructor==>componentWillMount==>render                                                                ==>componentDidMount
      子                                          ==>constructor==>componentWillMount==>render==>componentDidMount
      
更新
      父  shouldComponentUpdate==>componentWillUpdate==>render                                                                                                        ==>componentDidUpdate
      子                                                      ==>componentWillReceiveProps==>shouldComponentUpdate==>componentWillUpdate==>render==>componentDidUpdate  
```

![image](https://images2015.cnblogs.com/blog/588767/201612/588767-20161205190022429-1074951616.jpg)

#### 2、碎片Fragment
```
class Columns extends React.Component {
    render() {
      return (
        <div>
          <td>Hello</td>
          <td>World</td>
        </div>
      );
    }
}
```

因为render方法返回的元素必须有个跟节点，此处的td元素外面有个div，如果我们不想要这个div。而是直接返回两个td呢?

```
//使用 <></> 包裹元素
class Columns extends React.Component {
    render() {
      return (
        <>
          <td>Hello</td>
          <td>World</td>
        </>
      );
    }
}
```
但是<></> 不能设置key值，如果要设置key值，则用React.Fragment

```
<React.Fragment key={'001'}>
  <td>Hello</td>
  <td>World</td>
</React.Fragment>
```


#### 3、传送门createPortal
```
<Modal>
   Child />
</Modal>
```
默认会将Child组件放入Modal组件的某个位置，但是如果我们希望将Child放在一个Modal外面的地方呢？

此时在Modal中只需要通过 ReactDOM.createPortal 设置一个传送门即可。


```
  const appRoot = document.getElementById("root");
  class Model extends Component {
    constructor(props) {
      super(props);
      this.el = document.createElement("div"); //只能先创建，不能直接从界面获取，会报dom不存在。
    }
    componentDidMount() {
      appRoot.appendChild(this.el);  //等创建的el被传送出去之后，再挂到appRoot下，就能看到了。否则不挂看不到
    }
    render() {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
  }

  export default Model;
```

#### 4、过渡和动画
```
> yarn add react-transition-group.
> yarn add animate.css
```

> react-transition-group库有三个组件:
> 
> 1)、Transition过渡  表示元素在多个状态之间的切换，比如active，hover等。*它下面的元素总会显示*，只是根据不同的条件显示不同的元素，然后在这几个元素间过渡切换
> 
> 2)、CSSTransition 单个元素的显示和隐藏。 
> 
> 3)、TransitionGroup 一组元素间的显示和隐藏(比如list的新增，删除)

##### 4.1、Transition的使用

```
import {Transition} from "react-transition-group";

//render中
<Transition in={show} timeout={3000}>
    {status => {
      if (status == "entering") return <div>entering</div>;
      if (status == "entered") return <div>entered</div>;
      if (status == "exiting") return <div>exiting</div>;
      if (status == "exited") return <div>exited</div>;
    }}
</Transition>
```
此处的show的值，并不是指定Transition展示还是不展示。
Transition会直接加载，然后通过show的值判断status加载children的东西。
如果show为true，会依次返回条件为entering和entered组件。
如果show为false，则依次返回条件为exiting和exited组件。



在Transition上使用animate.css中预设的动画

```
import  "animate.css"

//render
<Transition in={show} timeout={3000}>
  {status => {
    if (status == "entering") return <div className="animated lightSpeedIn ">entering</div>;
    if (status == "entered") return <div>entered</div>;
    if (status == "exiting") return <div className="animated lightSpeedOut">exiting</div>;
    if (status == "exited") return <div>exited</div>;
  }}
</Transition>
```

##### 4.2、CSSTransition 的使用
```
import { CSSTransition } from "react-transition-group";
//render中
<CSSTransition
    in={this.state.show}
    timeout={300}
    classNames="message"
    unmountOnExit
    onExited={() => {
        this.setState({
          showValidationButton: true
        });
    }}>
    <div>hello</div>
</CSSTransition>
```
CSSTransition组件的in如果为false，则里面的元素都不显示，如果为true，则显示。
 
classNames的message前缀代表了一组动画的名称，需要在css中定义:

```
  /* 开始进入状态 */
  .message-enter {
    opacity: 0.01;
    transform: scale(0.9) translateY(50%);
  }
  /* 进入中 */
  .message-enter-active {
    opacity: 1;
    transform: scale(1) translateY(10%);
    transition: all 300ms ease-out;
  }
  /* 开始退出 */
  .message-exit {
    opacity: 1;
    transform: scale(1) translateY(0%);
  }
  /* 退出中 */
  .message-exit-active {
    opacity: 0.01;
    transform: scale(0.9) translateY(50%);
    transition: all 300ms ease-out;
  }
```
这些都是定义的元素在显示和消失过称中的样式，与最终界面显示的样式无关
CSSTransition上同时还可以监听以下的事件。

```
onEnter 
onEntering
onEntered
onExit
onExiting
onExited
```

在CSSTransition上使用animate.css中预设的动画

```
import  "animate.css"

<CSSTransition
  in={this.state.showValidationMessage}
  timeout={300}
  classNames={{
    enterActive: "animated lightSpeedIn",
    exitActive: "animated lightSpeedOut"
  }}>
  <div>hello</div>
</CSSTransition>
```
将原来的通过classNames设置前缀的方式改为，直接修改对应动画过称的class名。


##### 4.3、TransitionGroup的使用
```
import { TransitionGroup } from "react-transition-group";

//render方法
<TransitionGroup>
    {this.state.items.map(({ id, text }) => (
        <CSSTransition key={id} timeout={500} classNames="fade">
          <div>
            <Button>&times;</Button>{text}
          </div>
        </CSSTransition>
    ))}
</TransitionGroup>
```
TransitionGroup下必须包裹CSSTransition子元素。TransitionGroup上不设置classNames。


在TransitionGroup上使用animate.css中预设的动画

```
import  "animate.css"

<TransitionGroup>
  {this.state.items.map(({ id, text }) => (
    <CSSTransition 
      key={id} 
      timeout={500} 
      classNames={{
        enterActive: "animated lightSpeedIn",
        exitActive: "animated lightSpeedOut"
      }}>
      <div>
        <Button>&times;</Button>{text}
      </div>
    </CSSTransition>
  ))}
</TransitionGroup>
```
同理，也将classNames替换。


*注意:*
由于react-transition-group定义了动画持续时间timeout，而aniamte.css也有时间，所以两者必须要设置一致。否则一个过渡完了，另一个时间还没到。



#### 5、CSS in JS
在react中，如果引入一个.css文件，那么这个文件中的样式，不仅会作用于当前组件，还会作用于当前组件的所有子组件。

为了解决这种非组件专属的css，引入下面的几种方式:
##### 1)、styled-components
使用步骤:

```
> yarn add styled-components
```

```
//import "./style.css";
//将css文件改为js
import "./style.js";
```

```
import styled from "styled-components";

//表示创建一个带样式的div组件，组件名为SelfLink(注意命名方式)
export const SelfLink = styled.div`
  height:50px;
  color:blue;
`

export const SelfAbbr = styled.abbr`
  height:50px;
  color:blue;
  background-color: yellow;   //和直接在页面上使用style对象不同。style需要驼峰法
`
```

```
import { SelfLink, SelfAbbr } from "./style.js";
//SelfLink样式组件只对当前组件有效，有后代组件无效

//在react组件的render方法中
<selfLink>app.js</selfLink>
//它等价于
<div style="height:50px;color:blue;">app.js</div>

//给样式组件设置属性
<SelfAbbr title="People's Republic of China">PRC</SelfAbbr>
等价于
<abbr title="People's Republic of China">PRC</abbr>
```
这样我们可以在根组件下导入一个reset.css文件，然后在每个自身组件下导入 styled-components 样式组件。

styled.*后面不能随便加元素。必须是下面类型中的一种

```
//html = 
'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 
'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 
'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 
'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 
'em', 'embed', 
'fieldset', 'figcaption', 'figure', 'footer', 'form', 
'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 
'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 
'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 
'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 
'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 
'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 
'g', 'image', 'line', 'linearGradient', 'mask', 
'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 
'stop', 'svg', 'text', 'tspan'

```
比如写styled.img就会报错

**高级用法**

```
//styled-components中使用属性
<SelfButton type="primary">SelfButton</SelfButton>

//使用${(props)=>{//todo}}  获取值
export const SelfButton = styled.div`
  height:50px;
  color:${props => (props.type === "primary" ? "palevioletred" : "yellow")};
`
//如果 props.type? "palevioletred" : "yellow" 表示是否存在type属性，不管值是多少
```
注意在css中 使用颜色时，不需要加引号，palevioletred即可，而在${()=>()}表达式中，因为无法识别palevioletred，所以使用引号"palevioletred",但在最后解析完，在chrome中还是展示  color:palevioletred。

使用${}  获取值时，比如传入一个函数(props)=>{}，参数为props，然后将结果在函数中返回

```
//styled-components中使用继承
export const BaseButton = styled.div`
  height: 50px;
  width:100px;
  border:1px solid red;
  color:yellow;
`;

//styled(BaseButton)中传入要嵌套的css组件
export const PrimaryButton = styled(BaseButton)`
  color: palevioletred;
`;
```
PrimaryButton组件继承了BaseButton组件的样式，并且使用自身的color:palevioletred,将继承的 color:yellow;覆盖掉，最终PrimaryButton结果:

```
{
  height: 50px;
  width:100px;
  border:1px solid red;
  color:palevioletred;
}
```
当然，你任然可以在 PrimaryButton 组件上使用style属性，设置行内样式。

```
<SelfButton color="palevioletred" style={{color:"pink"}}>SelfButton</SelfButton>
//则最终color为pink
```

##### 2)、Radium
Radium是一组用于管理React元素上的内联样式的工具.
在传统的内联css中，对于处理变量、媒体查询、伪类等是不方便的。

而Radium可以直接处理这些问题，并且可以直接使用js中的数学，连接，正则表达式，条件，函数等。

**使用步骤:**

```
//1
import Radium from 'radium';

//2 定义样式
var styles = {
  base: {
    color: '#fff',
    
    ':hover': {
      background: '#0074d9'
    }
  },

  primary: {
    background: '#0074D9'
  },

  warning: {
    background: '#FF4136'
  }
};

//3 在元素的内敛属性style上使用
<button
    style={[
      styles.base,
      styles[this.props.kind]
    ]}>
    {this.props.children}
</button>

//4 包裹组件
export default Radium(Form);
```


**用法详解:**

```
var styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em'
  }
};

<button style={styles.base}>
    {this.props.children}
</button>
```

修饰符

```
var styles = {
  base: {  //这个base应用到那个react元素上，那么那个react元素获得:hover的样式
    ':hover': {
      backgroundColor: 'red'
    },

    ':focus': {
      backgroundColor: 'green'
    },

    ':active': {
      backgroundColor: 'yellow'
    },
  },
};

<button style={styles.base}>
    {this.props.children}
</button>
```
媒体查询

```
var style = {
  width: '25%',

  '@media (min-width: 320px)': {
    width: '100%'
  }
};

<button style={styles}>
    {this.props.children}
</button>




//还可以在媒体查询中嵌套修饰符
var style = {
  width: '25%',

  '@media (min-width: 320px)': {
    width: '100%',

    ':hover': {
      background: 'white'
    }
  }
};
<button style={styles}>
    {this.props.children}
</button>
```

在单个组件中设置多个元素的样式

```
var styles = {
  both: {
    background: 'black',
    border: 'solid 1px white',
    height: 100,
    width: 100
  },
  one: {
    ':hover': {
      background: 'blue',
    }
  },
  two: {
    ':hover': {
      background: 'red',
    }
  }
};
<div key="one" style={[styles.both, styles.one]} />
<div key="two" style={[styles.both, styles.two]} />
```




### 三、redux
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/react/redux-flow.jpg)

应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。 惟一改变 state 的办法是触发 action，一个描述发生什么的对象。 为了描述 action 如何改变 state 树，你需要编写 reducers。

从图中我们得出以下执行步骤:

- 1)、react组件通过action creator获得一个action对象，
- 2)、在react组件中通过store的dispatch方法传入并执行这个action
- 3)、store接受到这个action，然后执行reducers方法，将上一次的state和当前的action传入
- 4)、在reducer中判断action的type，然后执行对应逻辑，并将新的state返回给store
- 5)、在react组件中监听到store的state的改变，进而做出响应，改变页面数据


redux中的store提供下列方法:

- getState();  获取当前的state树
- dispatch(action);  分发action
- subscribe(listener);  监听store中state的改变


react本身和redux没什么关系，因为react是view层面的框架，redux是状态管理的框架，使用react-redux将两者联系起来，react-redux只有两个接口:

- Provider  在根组件中使用，使得所以子组件都能够获得 Redux store
- connect   在组件中连接 React 组件与 Redux store，可以获取state和dispatch。


**redux的中间件**
![image](https://raw.githubusercontent.com/libbGit/static-file/master/image/react/redux-thunk.jpg)
正常情况下，action是个对象，包含type和payload，当redux调用dispath之后，store直接接受action，并找到对应的reducers去执行。

而如果使用中间件之后，action可以是个方法，在这个方法中可以执行异步操作。这样，当redux调用dispatch后，store发现action是个方法，则不会直接给reducer，而是先执行方法，然后再方法执行结束之后，显示调用dispatch方法，store才会去调 reducer。

常用的redux中间件有:

- redux-thunk
- redux-saga
- Redux-Promise


下面是使用redux和redux-thunk的示例:

```
//App.js
import React from "react";
import ReactDOM from "react-dom";
import "@/assets/css/index.css";
import App from "@/App";
import * as serviceWorker from "@/serviceWorker";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";  //将redux持久化

import configureStore from "@/store/Index";
const { store, persistor } = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
```


```
//store.js
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage/index"; // defaults to localStorage for web and AsyncStorage for react-native

import reducers from "./reducers/Index";
import thunk from "redux-thunk";

//持久化key
const config = { key: "root", storage };
let persistedReducer = persistCombineReducers(config, reducers); //将redux持久化，并将多个reducer combine起来

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //配置redux devtools

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store);

export default { store, persistor };
```


```
// Login组件中
export default withRouter(
  connect(
    state => ({
      userInfo: state.User   //指定user模块的state，作为属性传入
    }),
    dispatch => ({
      onSaveLoginInfo: value => {
        //将修改action的函数，作为一个属性传入。
        //此处并未指定执行那个模块的reducer，因为它会在所有的模块中寻找。直到找到对应的action.type的那个reducer并执行，然后更新对应模块的state
        dispatch(UserActions.saveLoginInfo(value)); //dispatch中传入的是个action对象，saveUserInfo只是个action的创建函数
      }
    })
  )(Login)
);
```

redux执行action时，是遍历所有加载的模块的reducer，然后找到匹配模块的去执行。并更新那个模块的state



### 四、route

```
> yarn add react-router-dom
```

在组件中按需加载，rect-router4中不在进行集中配置。即在当前组件中定义link和匹配到link后需要跳转的组件

如果子组件需要获取路由的信息，则必须使用withRouter包裹，所以将withRouter放到根组件下

```
class App extends Component {
}
export default withRouter(App);
```
这样，App下的所有组件,都能获取到通过this.props获取到==history,location,match== 三个路由参数

##### 1)、路由的3中渲染方式:

- \<Route component>  
- \<Route render>
- \<Route children>
可以任意的使用其中的一种，不能同时使用多种。


```
import {  Switch, Route, Link } from "react-router-dom";
```


```
//<Route component>   
<Route path="/user/:username" component={User} />
```

```
//<Route render>   这种方式不会将组件卸载，而是直接在线更新渲染。
//props中含有history,location,match 3个属性。 render方式可以充当路由钩子，可以在满足条件时渲染组件。(router V4中取消了路由钩子)
<Route path="/user" render={props => (
   this.state.auth ? 
      (<Component {...props}/>):
      (<Redirect to={
        { pathname: '/login', state:{from: props.location }}
     }/>)
)}/>
```

```
//<Route children>  和render类似，只是它用来判断当前路径和路由是否匹配，children中可以接收history,location,match 3个属性。如果不匹配，match为null。这允许您根据路径是否匹配动态调整UI。
<Route path={to} children={({ match }) => (
      <li className={match ? "active" : ""}>
        <Link to={to} {...rest} />
      </li>
)}/>
```


父和子组件的路由嵌套

```
//父组件中
<Link to="/">home</Link>
<Link to="/form">form</Link>

<Route exact path="/" component={Home} />
<Route path="/form" component={Form} />
```

```
//而在子组件中
<Link to={`${this.props.match.path}/model`}>model</Link>

<Route path={`${this.props.match.path}/model`} component={Model} />
```
##### 2)、路由传参:

```
//通过params:  
<Route path='/form/:id'   component={Form}></Route>

html方式      <Link to="/form/2">form</Link>    　　　　
js方式        this.props.history.push('/form/2')

获取          this.props.match.params.id
```


```
//通过query
<Route path="/form" component={Form} />  

html方式    <Link to="/form?day=Friday">form</Link>
            <Link to={{pathname:"/form",search:"?day=Friday"}}>form</Link>

JS方式      this.props.history.push({pathname:"/form",search:"?day=Friday"});

获取方式1   this.props.location.search     //  ?day=Friday (只能获取到字符串) 
获取方式2   new URLSearchParams("?day=Friday").get("day")     // "Friday"
            //在现代浏览器中，可以通过URLSearchParams将"?day=friday"解析,然后用get获得
```




### 五、react中常见问题
##### 1)、npm run eject报错
```
This git repository has untracked files or uncommitted changes:
```

```
cd my-react-app
git init
git add .
git commit -m 'add_upload_picture'  //报错的话，修改描述
npm run eject
```
出现如下的界面表示成功提交

```
Auto packing the repository in background for optimum performance.
See "git help gc" for manual housekeeping.
Counting objects: 23004, done.
Delta compression using up to 4 threads.
Compressing objects:  22% (4782/21732)
```


##### 2)、在react中使用sass
因为react中默认已经支持了sass(通过eject后的文件可以看出。)

```
  {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
  },
```
但是在引入.scss的文件时，报错。所以需要安装node-sass

```
yarn add node-sass
```
如果让npm rebuild node-sass，直接删除node_modules。然后重新安装 >yarn

##### 3)、不在组件中，而在其他地方(如axios拦截器中)使用router进行页面跳转
在顶级组件中将this.props.history赋值给window的一个变量

```
componentDidMount(){
    window.myhistory = this.props.history
}
```
在axios拦截器中使用window的变量

```
window.myhistory.push('/form', { day: 'Friday' })
```

##### 4)、不在组件中，而在其他地方(如axios拦截器中)更新store中的state
在对应的文件中

```
import configureStore from "@/store";


//在对应的位置
let {store}  = configureStore;  //configureStore中包含store和persist。如果没有persist，不用解构，直接赋值
store.dispatch(action);
```


##### 5)、在redux的reducer中，如何更新其他模块的state
由于redux中在执行dispath时，是遍历所有加载的reducer，所以只需要在dispatch的后面，执行另一个模块的action即可

```
dispath({type:'LOGIN', payload:10});
dispath({type:'HOME', payload:20});
```

在react中如何使用css modules？
创建的css名称  如下
login.module.css

```
.selfLink {
  height: 50px;
  border: 1px solid red;
  color: yellow;
}

.SelfButton {
  height: 150px;
  width: 150px;
  color: red;
  background-image: url("@/assets/images/2131.png");
  background-size: 150px 150px;
}

```

在react组件中

```
import loginCss from "./login.module.css";


//render中
<div className={loginCss.SelfButton}>libingbing</div>
```


##### 6)、动态加载静态资源时，路径不能为变量

```
let url = "@/assets/images/carousel/logo.svg"
require(url)    //报错

let url = "logo.svg"
require("@/assets/images/carousel/"+url); //正确
```

这是因为webpack在编写完，保存时，需要进行工程的打包，然后打包正确，才能热加载运行并刷新页面，打包静态资源时，如果require中传入的是个变量。那么在打包时，它有可能是计算机系统中的任何目录下的任何文件。所以至少需要给出在哪个路径下，这样才能精确的将那个路径下的对应文件打包，然后在代码运行时，直接用对应文件名生成正则匹配(因为打包后的文件，可能有hash值。不能直接查文件名)，找到后，加载到代码中。

所以 *应该是尽可能静态化表达包所处的路径，最小化变量控制的区域。*

```
let url = "logo.svg"
require("@/assets/images/carousel/"+url); //好

let url = "carousel/logo.svg"
require("@/assets/images/"+url); //不好
```