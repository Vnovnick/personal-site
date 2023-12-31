import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./Assets/main.css";
import Bio from "./Components/Bio/Bio";
import PageContainer from "./Components/PageContainer";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import LandingPage from "./Components/Landing/LandingPage";
import Extras from "./Components/Extras/Extras";

// still not sure why its not working
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<PageContainer />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<Bio />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extras" element={<Extras />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
