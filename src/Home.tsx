import React from "react";
import "./Components/SiteContent/SiteContent.scss";
import Bio from "./Components/Bio/Bio";
import Portfolio from "./Components/Portfolio/Portfolio";
import PerformanceVideos from "./Components/PerformanceVideos/PerformanceVideos";
import SoundDesign from "./Components/SoundDesign/SoundDesign";

export default function Home() {
  return (
    <div className="site-content">
      SiteContent
      <Bio />
      <Portfolio />
      <PerformanceVideos />
      <SoundDesign />
    </div>
  );
}
