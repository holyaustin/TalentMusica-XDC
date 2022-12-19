import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import "./index.css";
import Explore from "./pages/explore";
import Create from "./pages/create";
import Live from "./pages/live";
import Watch from "./pages/watch";

ReactDOM.render(
  <React.StrictMode>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="explore" element={<Explore />} />
          <Route path="live" element={<Live />} />
          <Route path="create" element={<Create />} />
          <Route path="watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root"),
);
