import React, { Component } from "react";
import { Layout, Menu, Affix, BackTop, Button } from "antd";
import { Switch, Route, Link, Redirect, withRouter } from "react-router-dom";

// import overlayscrollbars from "overlayscrollbars";

import "@/assets/css/app.scss";
import Article from "@/features/article/Article";
import MindMap from "@/features/mindmap/MindMap";

class App extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      loggedIn: true
    };

    this.deferredPrompt = null;
  }
  render() {
    const { Header, Content, Footer } = Layout;

    let activeRoute = "article";
    let pathname = this.props.location.pathname.substring(1);
    if (pathname.indexOf("/") > 0) {
      activeRoute = pathname.substring(0, pathname.indexOf("/"));
    } else {
      activeRoute = pathname;
    }

    return (
      <Layout>
        <BackTop />

        <Header className="app-header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[activeRoute]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="article">
              <Link to={`/article`}>文章</Link>
            </Menu.Item>
            <Menu.Item key="mind-map">
              <Link to={`/mind-map`}>脑图</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Layout className="app-layout">
          <Content className="app-main">
            <RouteView loggedIn={this.state.loggedIn} />
          </Content>
          <Footer className="app-footer">
            My blog ©2018 Created by libb
            <Button
              type="link"
              size="small"
              onClick={this.handleAddToHomescreen}
            >
              Add To Homescreen
            </Button>
          </Footer>
        </Layout>
      </Layout>
    );
  }

  handleAddToHomescreen = () => {
    console.log("this", this);
    if (this.deferredPrompt) {
      // The user has had a postive interaction with our app and Chrome
      // has tried to prompt previously, so let's show the prompt.
      this.deferredPrompt.prompt();

      // Follow what the user has done with the prompt.
      this.deferredPrompt.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome);

        if (choiceResult.outcome == "dismissed") {
          console.log("User cancelled home screen install");
        } else {
          console.log("User added to home screen");
        }

        // We no longer need the prompt.  Clear it up.
        this.deferredPrompt = null;
      });
    }
  };

  componentDidMount() {
    // window.addEventListener("beforeinstallprompt", e => {
    //   console.log("beforeinstallprompt Event fired");
    //   //e.preventDefault();   //I even try with this uncommented no luck so far
    //   this.deferredPrompt = e;
    //   return false;
    // });
    // window.addEventListener("appinstalled", evt => {
    //   console.log("appinstalled");
    // });
  }
}

let RouteView = props => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          props.loggedIn ? <Redirect to="/article" /> : <Redirect to="/login" />
        }
      />
      <Route path="/article" component={Article} />
      <Route path="/mind-map" component={MindMap} />
    </Switch>
  );
};

export default withRouter(App);
