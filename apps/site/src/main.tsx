 
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { Providers } from "./providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Providers>
        <App />
      </Providers>
    </Router>
  </React.StrictMode>,
);
