import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Assets/main.css";
import Bio from "./Components/Bio/Bio";
import PageContainer from "./Components/PageContainer";
import PerformanceVideos from "./Components/PerformanceVideos/PerformanceVideos";
import Portfolio from "./Components/Portfolio/Portfolio";
import SoundDesign from "./Components/SoundDesign/SoundDesign";
import Home from "./Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PageContainer />}>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/performance-videos" element={<PerformanceVideos />} />
          <Route path="/sound-design" element={<SoundDesign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
