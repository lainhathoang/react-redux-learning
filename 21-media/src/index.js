import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById("root");
// const root = ReactDOM.createRoot(el);
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
