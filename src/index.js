import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./Fonts/aveny-t-bold.woff2";
import "./Fonts/aveny-t-light.woff2";
import "./Fonts/din-pro-bold.woff2";
import "./Fonts/din-pro-medium.woff2";
import "./Fonts/din-pro-regular.woff2";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
