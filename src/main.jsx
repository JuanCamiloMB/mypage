import React from "react";
import ReactDOM from "react-dom/client";
import Site from "./Site";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Site/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
