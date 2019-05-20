import React from "react";
import ReactDOM from "react-dom";
import "@/assets/css/index.scss";
import "moment/locale/zh-cn"; //解决antd中日历上的月份为11月，而不是Nov

import App from "@/App";
import * as serviceWorker from "@/serviceWorker";

import { BrowserRouter, HashRouter } from "react-router-dom";

// import { Provider } from "react-redux";
// import store from "@/store";
ReactDOM.render(
  // <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>,
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
