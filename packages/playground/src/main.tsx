import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root");
rootEl &&
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
