import React from "react";
import ReactDOM from "react-dom/client";
import Site from "./Site";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Site/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
