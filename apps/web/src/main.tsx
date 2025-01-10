/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

import "./styles/global.css";
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
