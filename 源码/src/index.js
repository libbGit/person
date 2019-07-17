import React from "react";
import ReactDOM from "react-dom";
import "@/assets/css/index.scss";
import "moment/locale/zh-cn"; //解决antd中日历上的月份为11月，而不是Nov

import App from "@/App";
import * as serviceWorker from "@/serviceWorker";

import { BrowserRouter, HashRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

import { Provider } from "mobx-react";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Scrollbars
        style={{ width: "100vw", height: "100vh" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        universal
      >
        <App />
      </Scrollbars>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   e.prompt();
// });
