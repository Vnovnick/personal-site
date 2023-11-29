import React, { useState } from "react";
import PerformanceVideos from "../PerformanceVideos/PerformanceVideos";
import SoundDesign from "../SoundDesign/SoundDesign";

export default function Extras() {
  const [pageView, setPageView] = useState(true);
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col">
      <div className="mx-auto flex gap-x-3 md:gap-x-24 md:gap-x-44 text-lg">
        <button
          type="button"
          onClick={() => setPageView(true)}
          className={`p-2.5 text-white rounded-xl transition-all duration-100 ml-auto bg-gray-700/50 hover:bg-green-900/40 ${
            pageView ? "bg-green-900/40" : ""
          }`}
        >
          Performances
        </button>
        <button
          type="button"
          onClick={() => setPageView(false)}
          className={`p-2.5 text-white rounded-xl transition-all duration-100  bg-gray-700/50 hover:bg-green-900/40 ${
            !pageView ? "bg-green-900/40" : ""
          }`}
        >
          Sound Design
        </button>
      </div>
      {pageView && <PerformanceVideos />}
      {!pageView && <SoundDesign />}
    </div>
  );
}
