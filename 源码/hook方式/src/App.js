import React, { useState, useCallback, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useMappedState } from "redux-react-hook";
import { Layout } from "antd";

import Home from "@/views/home/Home";
import Login from "@/views/login/Login";

import "@/assets/css/app.scss";

function App() {
  let { islogIn } = useMappedState(useCallback(state => state["User"]));

  //
  const handleAddToHomescreen = useCallback(() => {
    console.log("handleAddToHomescreen");
  });

  return <RouteView loggedIn={islogIn} />;
}

let RouteView = props => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          props.loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />
        }
      />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default App;
