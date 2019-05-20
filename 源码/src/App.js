import React, { Component } from "react";
import { Layout, Menu, Affix, BackTop } from "antd";

import { Switch, Route, Link, Redirect, withRouter } from "react-router-dom";

import "@/assets/css/app.scss";
import Article from "@/features/article/Article";
import MindMap from "@/features/mindmap/MindMap";

class App extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      loggedIn: true
    };
  }
  render() {
    const { Header, Content, Footer } = Layout;

    let activeRoute = "";
    let pathname = this.props.location.pathname.substring(1);
    if (pathname.indexOf("/") > 0) {
      activeRoute = pathname.substring(0, pathname.indexOf("/"));
    } else {
      activeRoute = pathname;
    }

    return (
      <Layout>
        <BackTop />

        <Affix offsetTop={0}>
          <Header className="app-header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[activeRoute]} style={{ lineHeight: "64px" }}>
              <Menu.Item key="article">
                <Link to={`/article`}>文章</Link>
              </Menu.Item>
              <Menu.Item key="mind-map">
                <Link to={`/mind-map`}>脑图</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Affix>

        <Content className="app-main">
          <RouteView loggedIn={this.state.loggedIn} />
        </Content>
        <Footer className="app-footer">My blog ©2018 Created by libb</Footer>
      </Layout>
    );
  }

  componentDidMount() {}
}

let RouteView = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => (props.loggedIn ? <Redirect to="/article" /> : <Redirect to="/login" />)} />
      <Route path="/article" component={Article} />
      <Route path="/mind-map" component={MindMap} />
    </Switch>
  );
};

export default withRouter(App);
