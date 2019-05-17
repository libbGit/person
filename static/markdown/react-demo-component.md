react单组件形式

```
import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom"; //ReactDOM.createPortal
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import { Form, InputNumber, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
import "animate.css";

import UserActions from "@/store/actions/User";
import "./style.css";

class Home extends Component {
  /**
   * 构造器，用来初始化组件的本地数据，即state
   * 必须使用super调用父类。 不重写constructor时，默认会调用
   * 可以接受 props  和 context，props由父组件传入，context用来传入全局的状态，比如主题等
   */
  constructor(props, context) {
    super(props);

    this.state = {
      name: "you know nothing",
      hasError: false
    };

    this.myRef = React.createRef();
    setTimeout(() => {
      this.getName();
    }, 2000);
  }

  /**普通的方法 */
  getName() {
    //总是使用setState更改state， 不要直接修改state。 setState是个异步的方法, 
    this.setState({ name: "i see" });
    
    //this.setState((prevState, props) => ({
    //  counter: prevState.counter + props.increment
    //}));
  }

  /**
   * 事件方法： 作为事件的函数必须用箭头函数的形式，才能绑定this
   */
  handleClick = () => {
    this.props.onClickChange("321");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    let button = null;
    const isLoggedIn = this.state.isLoggedIn;

    //条件渲染
    if (isLoggedIn) {
      button = <div>1</div>;
    } else {
      button = <div>2</div>;
    }

    // 列表渲染1
    const list = [1, 2, 3];
    const listItem = list.map(item => {
      return <li key={item + "001"}>{item}</li>;
    });

    return (
      <React.Fragment key={"nihao"}>
        {this.props.author}
        {this.props.children}
        <hr />
        <div onClick={this.handleClick}>
          <input ref={this.myRef} />
          {this.state.name}
        </div>
        {button}
        <WarningBanner warn={this.state.showWarning} />
        <hr />
        {/* 列表渲染1 */}
        {listItem}
        {/* 列表渲染2 */}
        <ListComponent data={list} />
        {/* 列表渲染3 */}
        {list.map(item => {
          return <li key={item + "003"}>{item}</li>;
        })}
        
      </React.Fragment>
    );
  }

  ////=============================================================
  /**
   * 生命周期钩子  初始化
   */

  /**
   * dom渲染完成(包括子元素)，可以调用ajax请求来更新页面
   */
  componentDidMount() {
    console.log("child=componentDidMount");
  }

  ////=============================================================
  /**
   * 生命周期钩子  更新
   */
  /**
   * 父组件改变props后，触发子组件重新渲染时进入。如果props不改变，则不执行
   */
  componentWillReceiveProps(nextProps) {
    console.log("child=componentWillReceiveProps");
  }

  /**
   * 用来控制组件重新渲染，必须要有返回。 react父组件的重新渲染会导致其所有子组件的重新渲染,
   *
   * 如果当前组件不需要重新渲染，则return false。那么后面的狗子，包括render都不会执行。
   */
  shouldComponentUpdate(nextProps, nextState) {
    //可以通过nextProps，nextState与当前的props和state比对是否相等
    console.log("child=shouldComponentUpdate");
    return true;
  }

  /**
   * shouldComponentUpdate返回true以后，组件进入重新渲染的流程。
   */
  componentWillUpdate(nextProps, nextState) {
    console.log("child=componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("child=componentDidUpdate");
  }

  /**
   * 生命周期钩子  销毁
      1.clear你在组建中所有的setTimeout,setInterval
      2.移除所有组建中的监听 removeEventListener
   */
  componentWillUnmount() {
    console.log("child=componentWillUnmount");
  }

  /**
   * 错误边界，用来给当前组件提供一个回退的ui
   */
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
}

//可以创建一个函数式组件，没有html，只有函数计算
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}
// 列表渲染2
function ListComponent(props) {
  if (!props.data) {
    return null;
  }
  const items = props.data.map(item => {
    return <li key={item + "002"}>{item}</li>;
  });

  return <div>{items}</div>;
}

//为属性指定类型检查，通过PropTypes库
Home.propTypes = {
  author: PropTypes.string,
  onClickChange: PropTypes.func,
  homeInfo: PropTypes.object,
  onSaveLoginInfo: PropTypes.func
};
// 为属性指定默认值:
Home.defaultProps = {
  author: "me"
};


export default withRouter(   // withRouter包裹的组件，可以直接通过props获取history,location,match 三个路由参数, 进行编程式的路由跳转
    connect(
      state => ({    //  (state,route)
        homeInfo: state.Home //指定Home模块的state，作为属性传入。homeInfo必须在propTypes定义
      }),
      dispatch=>({    // (dispatch,route)
      
        //将修改action的函数，作为一个属性传入。
        //此处并未指定执行那个模块的reducer，因为它会在所有的模块中寻找。
        //直到找到对应的action.type的那个reducer并执行，然后更新对应模块的state
        //onSaveLoginInfo必须在propTypes定义
        
        onSaveLoginInfo:(value)=>{
          dispatch(UserActions.saveLoginInfo(value));  //dispatch中传入的是个action对象，saveUserInfo只是个action的创建函数
        }
      })
    )(Home)
);

//withRouter(App);  withRouter只需要添加到根组件就行了，后代所有组件都能获取history,location,match
```
