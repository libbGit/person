import React, { useState, useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import { useMappedState, useDispatch } from "redux-react-hook";
import { Layout, Menu, Affix, BackTop, Button } from "antd";

import Article from "@/views/article/Article";
import MindMap from "@/views/mindmap/MindMap";

import "@/assets/css/app.scss";

const { Header, Content, Footer } = Layout;

function Home() {
  const [activeRoute, setActiveRoute] = useState("article");
  let location = useLocation();
  let { path,url } = useRouteMatch(); //获取父路由
  let { islogIn } = useMappedState(useCallback(state => state["User"]));

  const handleAddToHomescreen = useCallback(() => {
    console.log("handleAddToHomescreen");
  });

  //
  useEffect(() => {
    let pathname = location.pathname.substring(1);
    setActiveRoute(pathname);
  });

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
            <Link to={`${url}/article`}>文章</Link>
          </Menu.Item>
          <Menu.Item key="mind-map">
            <Link to={`${url}/mind-map`}>脑图</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Layout className="app-layout">
        <Content className="app-main">
          <RouteView loggedIn={islogIn} route={path} />
        </Content>
        <Footer className="app-footer">
          My blog ©2018 Created by libb
          <Button type="link" size="small" onClick={handleAddToHomescreen}>
            Add To Homescreen
          </Button>
        </Footer>
      </Layout>
    </Layout>
  );
}

let RouteView = props => {
  return (
    <Switch>
      <Route
        exact
        path={`${props.route}`}
        render={() =>
          props.loggedIn ? (
            <Redirect to={`${props.route}/article`} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route path={`${props.route}/article`}>
        <Article />
      </Route>
      <Route path={`${props.route}/mind-map`}>
        <MindMap />
      </Route>
    </Switch>
  );
};
export default Home;
