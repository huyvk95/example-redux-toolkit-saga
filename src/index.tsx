import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const Context = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
