import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Login from "./pages/login/index";
import Write from "./pages/write/index";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import { GlobalStyle } from "./style";
// import * as serviceWorker from './serviceWorker';

const App = (
  // Provider 把store提供给所有内部组件
  <Provider store={store}>
    <Fragment>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
        </Fragment>
      </BrowserRouter>
      <GlobalStyle />
    </Fragment>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
