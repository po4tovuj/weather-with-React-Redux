import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import store from "./store";
import { Provider } from "react-redux";

import App from "./components/App";
import "../node_modules/normalize.css/normalize.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
