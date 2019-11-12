import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";
import { PersistGate } from "redux-persist/integration/react"; //将redux持久化

import { BrowserRouter, HashRouter } from "react-router-dom";

import "@/assets/css/index.scss";
import "moment/locale/zh-cn"; //解决antd中日历上的月份为11月，而不是Nov

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./store/index";

const { store, persistor } = configureStore;

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </StoreContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
