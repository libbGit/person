import React, { useContext, useCallback, useEffect } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Layout, Menu, Carousel } from "antd";

import carouselConfig from "@/assets/images/carousel/config.json";

import CssScss from "@/views/article/blog/css/CssScss";
import CssFlex from "@/views/article/blog/css/CssFlex";
import CssLayout from "@/views/article/blog/css/CssLayout";
import CssBem from "@/views/article/blog/css/CssBem";
import CssBase from "@/views/article/blog/css/CssBase";
import CssBfc from "@/views/article/blog/css/CssBfc";
import CssPercent from "@/views/article/blog/css/CssPercent";

import JsEs6Async from "@/views/article/blog/js/JsEs6Async";
import JsIssue from "@/views/article/blog/js/JsIssue";
import JsDeepCopy from "@/views/article/blog/js/JsDeepCopy";
import JsAxiosTutorial from "@/views/article/blog/js/JsAxiosTutorial";
import JsStaticResource from "@/views/article/blog/js/JsStaticResource";

import VueVuex from "@/views/article/blog/vue/VueVuex";
import VueDemoComponent from "@/views/article/blog/vue/VueDemoComponent";
import VueAssetsUrl from "@/views/article/blog/vue/VueAssetsUrl";

import ReactSimpleTutorial from "@/views/article/blog/react/ReactSimpleTutorial";
import ReactDemoComponent from "@/views/article/blog/react/ReactDemoComponent";

import PwaRegister from "@/views/article/blog/pwa/PwaRegister";
import PwaSimpleTutorial from "@/views/article/blog/pwa/PwaSimpleTutorial";

import "./article.scss";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function Article() {
  let { path } = useRouteMatch(); //获取父路由

  return (
    <div className="main-article">
      <div className="article-summary">
        <div className="carousel">
          <Carousel autoplay>
            <CarouselImgs />
          </Carousel>
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
        <Sider width={250} className="article-slider">
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
                  <i className="iconfont blog-css" /> CSS
                </span>
              }
            >
              <Menu.Item key="css-scss">
                <Link to={`${path}/css-scss`}>SCSS简易教程</Link>
              </Menu.Item>
              <Menu.Item key="css-flex">
                <Link to={`${path}/css-flex`}>Flex布局</Link>
              </Menu.Item>
              <Menu.Item key="css-layout">
                <Link to={`${path}/css-layout`}>CSS常见布局方案</Link>
              </Menu.Item>
              <Menu.Item key="css-bem">
                <Link to={`${path}/css-bem`}>CSS命名规范—BEM思想</Link>
              </Menu.Item>
              <Menu.Item key="css-base">
                <Link to={`${path}/css-base`}>CSS基础知识</Link>
              </Menu.Item>
              <Menu.Item key="css-bfc">
                <Link to={`${path}/css-bfc`}>CSS-BFC</Link>
              </Menu.Item>
              <Menu.Item key="css-percent">
                <Link to={`${path}/css-percent`}>CSS中的百分比值属性</Link>
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
                <Link to={`${path}/js-es6-async`}>ES6之async-await</Link>
              </Menu.Item>
              <Menu.Item key="js-issue">
                <Link to={`${path}/js-issue`}>JS学习笔记之常见问题</Link>
              </Menu.Item>
              <Menu.Item key="js-deepcopy">
                <Link to={`${path}/js-deepcopy`}>深拷贝与浅拷贝</Link>
              </Menu.Item>
              <Menu.Item key="js-axios">
                <Link to={`${path}/js-axios`}>axios教程</Link>
              </Menu.Item>
              <Menu.Item key="js-static-resource">
                <Link to={`${path}/js-static-resource`}>
                  webpack中处理静态资源
                </Link>
              </Menu.Item>
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
                <Link to={`${path}/vue-vuex`}>vuex最完整的模块定义</Link>
              </Menu.Item>
              <Menu.Item key="vue-demo-component">
                <Link to={`${path}/vue-demo-component`}>vue单组件结构</Link>
              </Menu.Item>
              <Menu.Item key="vue-assets-url">
                <Link to={`${path}/vue-assets-url`}>
                  vue-loader处理静态资源
                </Link>
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
                <Link to={`${path}/react-simple-tutorial`}>react简易教程</Link>
              </Menu.Item>
              <Menu.Item key="react-demo-component">
                <Link to={`${path}/react-demo-component`}>react单组件结构</Link>
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
                <Link to={`${path}/pwa-register`}>PWA注册文件</Link>
              </Menu.Item>
              <Menu.Item key="pwa-simple-tutorial">
                <Link to={`${path}/pwa-simple-tutorial`}>PWA简易教程</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content className="article-content">
          <RouteView route={path} />
        </Content>
      </Layout>
    </div>
  );
}

let CarouselImgs = () => {
  return carouselConfig.list.map((item, index) => {
    let image = require(`@/assets/images/carousel/${item}`);
    return (
      <div key={index}>
        <img src={image} className="carousel-img" alt="img" />
      </div>
    );
  });
};

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
      <Route path={`${props.route}/js-axios`} component={JsAxiosTutorial} />
      <Route
        path={`${props.route}/js-static-resource`}
        component={JsStaticResource}
      />

      <Route path={`${props.route}/vue-vuex`} component={VueVuex} />
      <Route
        path={`${props.route}/vue-demo-component`}
        component={VueDemoComponent}
      />
      <Route path={`${props.route}/vue-assets-url`} component={VueAssetsUrl} />
      <Route
        path={`${props.route}/react-simple-tutorial`}
        component={ReactSimpleTutorial}
      />
      <Route
        path={`${props.route}/react-demo-component`}
        component={ReactDemoComponent}
      />
      <Route path={`${props.route}/pwa-register`} component={PwaRegister} />
      <Route
        path={`${props.route}/pwa-simple-tutorial`}
        component={PwaSimpleTutorial}
      />
    </Switch>
  );
};

export default Article;
