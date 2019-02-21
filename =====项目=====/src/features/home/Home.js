import React, { Component } from "react";
import { Layout, Menu, Carousel, Icon } from "antd";
import PropTypes from "prop-types";

import { Switch, Route, Link } from "react-router-dom";

import "./home.scss";
import CssScss from "@/features/blog/CssScss";
import CssFlex from "@/features/blog/CssFlex";
import CssLayout from "@/features/blog/CssLayout";
import CssBem from "@/features/blog/CssBem";
import CssBase from "@/features/blog/CssBase";
import JsEs6Async from "@/features/blog/JsEs6Async";
import JsIssue from "@/features/blog/JsIssue";


import carouselConfig from "@/assets/images/carousel/config.json";

class Home extends Component {
  constructor(props, context) {
    super(props);
  }

  getCarouselImages = () => {
    return carouselConfig.list.map((item, index) => {
      let image = require(`@/assets/images/carousel/${item}`);
      return (
        <div key={index}>
          <img src={image} className="carousel-img" />
        </div>
      );
    });
  };

  render() {
    const { SubMenu } = Menu;
    const { Header, Content, Footer, Sider } = Layout;

    let images = this.getCarouselImages();

    //通过阿里巴巴字体库生成图标
    // const IconFont = Icon.createFromIconfontCN({
    //   scriptUrl: '//at.alicdn.com/t/font_1048945_1n0hcui62yb.js', // 在 iconfont.cn 上生成
    // });
    
    return (
      <>
        <Layout>
          <Header className="app-header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} style={{ lineHeight: "64px" }}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content className="app-main">
            <div className="app-main-summary">
              <div className="carousel">
                <Carousel autoplay>{images}</Carousel>
              </div>
              <div className="information">
                <div>
                  <h2>我的名片</h2>
                </div>
                <div className="email">
                  <span>职业：Web前端工程师</span>
                  <span>现居：陕西省-西安市</span>
                  <span>Email：lbbyx163@163.com</span>
                </div>
              </div>
            </div>

            <Layout className="app-layout">
              <Content>
                <Layout className="app-middle-layout">
                  <Sider width={250} style={{ background: "#fff" }}>
                    <Menu
                      mode="inline"
                      defaultSelectedKeys={["1"]}
                      defaultOpenKeys={["sub1"]}
                      style={{ height: "100%" }}
                    >
                      <SubMenu
                        key="css"
                        title={
                          <span>
                            <i className="iconfont blog-css"></i>CSS
                          </span>
                        }
                      >
                        <Menu.Item key="css-scss">
                          <Link to={`${this.props.match.path}/css-scss`}>SCSS简易教程</Link>
                        </Menu.Item>
                        <Menu.Item key="css-flex">
                          <Link to={`${this.props.match.path}/css-flex`}>Flex布局</Link>
                        </Menu.Item>
                        <Menu.Item key="css-layout"><Link to={`${this.props.match.path}/css-layout`}>CSS常见布局方案</Link></Menu.Item>
                        <Menu.Item key="css-bem"><Link to={`${this.props.match.path}/css-bem`}>CSS命名规范—BEM思想</Link></Menu.Item>
                        <Menu.Item key="css-base"><Link to={`${this.props.match.path}/css-base`}>CSS基础知识</Link></Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="html"
                        title={
                          <span>
                            <i className="iconfont blog-html"></i>
                            HTML
                          </span>
                        }
                      >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="javascript"
                        title={
                          <span>
                            <i className="iconfont blog-js"></i>
                            JAVASCRIPT
                          </span>
                        }
                      >
                        <Menu.Item key="js-es6-async"><Link to={`${this.props.match.path}/js-es6-async`}>ES6之async-await</Link></Menu.Item>
                        <Menu.Item key="js-issue"><Link to={`${this.props.match.path}/js-issue`}>JS学习笔记之常见问题</Link></Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="vue"
                        title={
                          <span>
                            <i className="iconfont blog-vue"></i>
                            VUE
                          </span>
                        }
                      >
                        <Menu.Item key="9">vue常见问题及解决</Menu.Item>
                        <Menu.Item key="10">一个完整的vue组件的内容格式</Menu.Item>
                      </SubMenu>
                      <SubMenu
                        key="react"
                        title={
                          <span>
                            <i className="iconfont blog-react"></i>
                            REACT
                          </span>
                        }
                      >
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                      </SubMenu>
                    </Menu>
                  </Sider>
                  <Content className="app-layout-content">
                    <RouteView route={this.props.match.path} />
                  </Content>
                </Layout>
              </Content>
            </Layout>
          </Content>
          <Footer className="app-footer">Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </>
    );
  }

  componentDidMount() {
    // // this.props.onAsyncGetTodoList();
  }
}

let RouteView = props => {
  if (!props.route) {
    return null;
  }
  return (
    <Switch>
      <Route path={`${props.route}/css-scss`} component={CssScss} />
      <Route path={`${props.route}/css-flex`} component={CssFlex} />
      <Route path={`${props.route}/css-layout`} component={CssLayout} />
      <Route path={`${props.route}/css-bem`} component={CssBem} />
      <Route path={`${props.route}/css-base`} component={CssBase} />
      <Route path={`${props.route}/js-es6-async`} component={JsEs6Async} />
      <Route path={`${props.route}/js-issue`} component={JsIssue} />
    </Switch>
  );
};

export default Home;
