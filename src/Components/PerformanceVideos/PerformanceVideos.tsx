import React from "react";
import PerfVideoComp from "./PerfVideoComp";
import "./PerformanceVideos.scss";

const scrollTo = (target: string) =>
  (document.getElementById(target) as HTMLFormElement).scrollIntoView({
    block: "end",
    behavior: "smooth",
  });

export default function PerformanceVideos() {
  return (
    <div className="h-fit w-full flex" id="perf">
      <div className="w-[5%] text-white text-center text-2xl timeline-grid">
        <p className="row-start-1 place-self-center">2019</p>
        <p className="row-start-3 place-self-center">2018</p>
      </div>
      <div className="w-[95%] lg:flex lg:flex-col">
        <div className="flex text-white bg-black text-lg py-2 pl-10 sticky top-0">
          <button
            type="button"
            className="hover:text-green-100"
            onClick={() => scrollTo("first-2019-vid")}
          >
            2019
          </button>
          <div className="w-1 h-1 bg-white rounded-full my-auto mx-5" />
          <button
            type="button"
            className="hover:text-green-100"
            onClick={() => scrollTo("first-2018-vid")}
          >
            2018
          </button>
        </div>
        <PerfVideoComp
          id="first-2019-vid"
          src="https://www.youtube.com/embed/Z3sLFa3FkmI"
          description="Bach Sonata No. 2 in A minor - Grave"
          left
        />
        <PerfVideoComp
          src="https://www.youtube.com/embed/vPrTJeND3-k"
          description='Ysaye Sonata No. 3 "Ballade"'
          right
        />
        <PerfVideoComp
          id="first-2018-vid"
          src="https://www.youtube.com/embed/qP12tqO3ZdM"
          description="Bach Partita No. 2 in D minor - Chaconne"
          left
        />
      </div>
    </div>
  );
}
