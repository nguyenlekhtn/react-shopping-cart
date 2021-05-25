import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PRODUCTS from "./Data";

ReactDOM.render(
  <React.StrictMode>
    <App products={PRODUCTS} />
  </React.StrictMode>,
  document.getElementById("root")
);
