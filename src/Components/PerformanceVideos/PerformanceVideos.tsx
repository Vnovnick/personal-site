import React, { FC } from "react";

export default function PerformanceVideos() {
  return (
    <div
      className="performance-videos h-fit w-full section lg:flex lg:flex-col overflow-auto"
      id="perf"
    >
      <div className="flex h-[423px]">
        <iframe
          className="embed-vid w-[750px]"
          src="https://www.youtube.com/embed/Z3sLFa3FkmI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="text-white">Bach Sonata No. 2 in A minor - Grave</p>
      </div>

      <div className="flex h-[423px]">
        <iframe
          className="embed-vid w-[750px]"
          src="https://www.youtube.com/embed/vPrTJeND3-k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="text-white">Ysaye Sonata No. 3 "Ballade"</p>
      </div>
      <div className="flex h-[423px]">
        <iframe
          className="embed-vid w-[750px]"
          src="https://www.youtube.com/embed/qP12tqO3ZdM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="text-white">Bach Partita No. 2 in D minor - Chaconne</p>
      </div>
    </div>
  );
}
