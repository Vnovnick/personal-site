import React from "react";
import PerfVideoComp from "./PerfVideoComp";

export default function PerformanceVideos() {
  return (
    <div
      className="performance-videos h-fit w-full section lg:flex lg:flex-col overflow-auto"
      id="perf"
    >
      <PerfVideoComp
        src="https://www.youtube.com/embed/Z3sLFa3FkmI"
        description="Bach Sonata No. 2 in A minor - Grave"
        left
      />
      <PerfVideoComp
        src="https://www.youtube.com/embed/vPrTJeND3-k"
        description='Ysaye Sonata No. 3 "Ballade"'
        right
      />
      <div className="flex h-[450px] my-5">
        <iframe
          className="embed-vid w-1/2"
          src="https://www.youtube.com/embed/qP12tqO3ZdM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="text-white m-auto text-2xl">
          Bach Partita No. 2 in D minor - Chaconne
        </p>
      </div>
    </div>
  );
}
