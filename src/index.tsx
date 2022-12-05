import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import "./Assets/main.css";
import Bio from "./Components/Bio/Bio";
import PageContainer from "./Components/PageContainer";
import PerformanceVideos from "./Components/PerformanceVideos/PerformanceVideos";
import Portfolio from "./Components/Portfolio/Portfolio";
import SoundDesign from "./Components/SoundDesign/SoundDesign";
import Contact from "./Components/Contact/Contact";

// still not sure why its not working
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<PageContainer />}>
          <Route path="/" element={<Navigate to="/about-me" />} />
          <Route path="/about-me" element={<Bio />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/performance-videos" element={<PerformanceVideos />} />
          <Route path="/sound-design" element={<SoundDesign />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
