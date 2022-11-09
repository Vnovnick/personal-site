import React, { FC } from "react";

const PerformanceVideos: FC = () => {
  return (
    <div
      className="performance-videos h-full w-full section lg:flex lg:flex-col"
      id="perf"
    >
      <div className="flex h-[423px] border">
        <iframe
          className="embed-vid w-[750px]"
          src="https://www.youtube.com/embed/Z3sLFa3FkmI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="text-white">Bach Sonata No. 2 in A minor - Grave</p>
      </div>

      <div className="vid-2 flex">
        <iframe
          className="embed-vid w-2/5"
          src="https://www.youtube.com/embed/vPrTJeND3-k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="text-white">Ysaye Sonata No. 3 "Ballade"</p>
      </div>
      <div className="vid-3 flex">
        <iframe
          className="embed-vid w-2/5"
          src="https://www.youtube.com/embed/qP12tqO3ZdM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="text-white">Bach Partita No. 2 in D minor - Chaconne</p>
      </div>
    </div>
  );
};

export default PerformanceVideos;
