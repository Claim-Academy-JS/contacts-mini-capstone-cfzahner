import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Destructure named export
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
