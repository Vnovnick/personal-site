import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./Assets/main.css";
import Bio from "./Components/Bio/Bio";
import PageContainer from "./Components/PageContainer";
import PerformanceVideos from "./Components/PerformanceVideos/PerformanceVideos";
import Portfolio from "./Components/Portfolio/Portfolio";
import SoundDesign from "./Components/SoundDesign/SoundDesign";
import Contact from "./Components/Contact/Contact";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>
);
