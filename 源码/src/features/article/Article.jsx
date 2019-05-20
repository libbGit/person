import React, { Component } from "react";
import { Layout, Menu, Carousel } from "antd";
import PropTypes from "prop-types";

import { Switch, Route, Link } from "react-router-dom";

import AnchorArea from "./AnchorArea";

import "./article.scss";
import CssScss from "@/features/article/blog/css/CssScss";
import CssFlex from "@/features/article/blog/css/CssFlex";
import CssLayout from "@/features/article/blog/css/CssLayout";
import CssBem from "@/features/article/blog/css/CssBem";
import CssBase from "@/features/article/blog/css/CssBase";
import CssBfc from "@/features/article/blog/css/CssBfc";
import CssPercent from "@/features/article/blog/css/CssPercent";
import JsEs6Async from "@/features/article/blog/js/JsEs6Async";
import JsIssue from "@/features/article/blog/js/JsIssue";
import JsDeepCopy from "@/features/article/blog/js/JsDeepCopy";
import VueVuex from "@/features/article/blog/vue/VueVuex";
import VueDemoComponent from "@/features/article/blog/vue/VueDemoComponent";
import VueAssetsUrl from "@/features/article/blog/vue/VueAssetsUrl";
import ReactSimpleTutorial from "@/features/article/blog/react/ReactSimpleTutorial";
import ReactDemoComponent from "@/features/article/blog/react/ReactDemoComponent";
import PwaRegister from "@/features/article/blog/pwa/PwaRegister";
import PwaListener from "@/features/article/blog/pwa/PwaListener";

import carouselConfig from "@/assets/images/carousel/config.json";

class Article extends Component {
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
    const { Content, Sider } = Layout;

    let images = this.getCarouselImages();

    //通过阿里巴巴字体库生成图标
    // const IconFont = Icon.createFromIconfontCN({
    //   scriptUrl: '//at.alicdn.com/t/font_1048945_1n0hcui62yb.js', // 在 iconfont.cn 上生成
    // });

    return (
      <div className="main-article">
        <div className="article-summary">
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
        <Layout className="article-layout">
          <Sider width={250} style={{ background: "#fff" }}>
            <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }}>
              <SubMenu
                key="css"
                title={
                  <span>
                    <i className="iconfont blog-css" /> CSS
                  </span>
                }
              >
                <Menu.Item key="css-scss">
                  <Link to={`${this.props.match.path}/css-scss`}>SCSS简易教程</Link>
                </Menu.Item>
                <Menu.Item key="css-flex">
                  <Link to={`${this.props.match.path}/css-flex`}>Flex布局</Link>
                </Menu.Item>
                <Menu.Item key="css-layout">
                  <Link to={`${this.props.match.path}/css-layout`}>CSS常见布局方案</Link>
                </Menu.Item>
                <Menu.Item key="css-bem">
                  <Link to={`${this.props.match.path}/css-bem`}>CSS命名规范—BEM思想</Link>
                </Menu.Item>
                <Menu.Item key="css-base">
                  <Link to={`${this.props.match.path}/css-base`}>CSS基础知识</Link>
                </Menu.Item>
                <Menu.Item key="css-bfc">
                  <Link to={`${this.props.match.path}/css-bfc`}>CSS-BFC</Link>
                </Menu.Item>
                <Menu.Item key="css-percent">
                  <Link to={`${this.props.match.path}/css-percent`}>CSS中的百分比值属性</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="html"
                title={
                  <span>
                    <i className="iconfont blog-html" /> HTML
                  </span>
                }
              >
                <Menu.Item key="html-5">待定义</Menu.Item>
              </SubMenu>
              <SubMenu
                key="javascript"
                title={
                  <span>
                    <i className="iconfont blog-js" /> JAVASCRIPT
                  </span>
                }
              >
                <Menu.Item key="js-es6-async">
                  <Link to={`${this.props.match.path}/js-es6-async`}>ES6之async-await</Link>
                </Menu.Item>
                <Menu.Item key="js-issue">
                  <Link to={`${this.props.match.path}/js-issue`}>JS学习笔记之常见问题</Link>
                </Menu.Item>
                <Menu.Item key="js-deepcopy">
                  <Link to={`${this.props.match.path}/js-deepcopy`}>深拷贝与浅拷贝</Link>
                </Menu.Item>
                <Menu.Item key="js-nginx-deploy">搭建测试服务器(nginx)</Menu.Item>
              </SubMenu>
              <SubMenu
                key="vue"
                title={
                  <span>
                    <i className="iconfont blog-vue" /> VUE
                  </span>
                }
              >
                <Menu.Item key="vue-vuex">
                  <Link to={`${this.props.match.path}/vue-vuex`}>vuex最完整的模块定义</Link>
                </Menu.Item>
                <Menu.Item key="vue-demo-component">
                  <Link to={`${this.props.match.path}/vue-demo-component`}>vue单组件结构</Link>
                </Menu.Item>
                <Menu.Item key="vue-assets-url">
                  <Link to={`${this.props.match.path}/vue-assets-url`}>vue中处理静态资源</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="react"
                title={
                  <span>
                    <i className="iconfont blog-react" /> REACT
                  </span>
                }
              >
                <Menu.Item key="react-simple-tutorial">
                  <Link to={`${this.props.match.path}/react-simple-tutorial`}>react简易教程</Link>
                </Menu.Item>
                <Menu.Item key="react-demo-component">
                  <Link to={`${this.props.match.path}/react-demo-component`}>react单组件结构</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="pwa"
                title={
                  <span>
                    <i className="iconfont blog-react" /> PWA
                  </span>
                }
              >
                <Menu.Item key="pwa-register">
                  <Link to={`${this.props.match.path}/pwa-register`}>PWA注册文件</Link>
                </Menu.Item>
                <Menu.Item key="pwa-listener">
                  <Link to={`${this.props.match.path}/pwa-listener`}>PWA监听文件</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="article-content">
            <RouteView route={this.props.match.path} />
          </Content>
        </Layout>

        {/* <AnchorArea /> */}
      </div>
    );
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
      <Route path={`${props.route}/css-bfc`} component={CssBfc} />
      <Route path={`${props.route}/css-percent`} component={CssPercent} />
      <Route path={`${props.route}/js-es6-async`} component={JsEs6Async} />
      <Route path={`${props.route}/js-issue`} component={JsIssue} />
      <Route path={`${props.route}/js-deepcopy`} component={JsDeepCopy} />
      <Route path={`${props.route}/vue-vuex`} component={VueVuex} />
      <Route path={`${props.route}/vue-demo-component`} component={VueDemoComponent} />
      <Route path={`${props.route}/vue-assets-url`} component={VueAssetsUrl} />
      <Route path={`${props.route}/react-simple-tutorial`} component={ReactSimpleTutorial} />
      <Route path={`${props.route}/react-demo-component`} component={ReactDemoComponent} />
      <Route path={`${props.route}/pwa-register`} component={PwaRegister} />
      <Route path={`${props.route}/pwa-listener`} component={PwaListener} />
    </Switch>
  );
};

export default Article;
