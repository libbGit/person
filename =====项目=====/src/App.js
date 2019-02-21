import React, { Component } from "react";
import { Switch, Route, Link, withRouter, Redirect } from "react-router-dom";

import Todo from "@/features/todo/Todo";
import Home from "@/features/home/Home";

class App extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      loggedIn: true
    };
  }
  render() {
    return (
      <div className="">
        <RouteView loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

let RouteView = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => (props.loggedIn ? <Redirect to="/home" /> : <Redirect to="/login" />)} />
      <Route path="/home" component={Home} />
      <Route path="/todo" component={Todo} />
    </Switch>
  );
};

export default withRouter(App);