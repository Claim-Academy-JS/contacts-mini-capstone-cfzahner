import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Destructure named export
import { App } from "./App";
export { contactCard } from "./ContactCard";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
