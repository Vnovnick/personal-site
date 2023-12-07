import React from "react";
import PerfVideoComp from "./PerfVideoComp";
import "./PerformanceVideos.css";

const scrollTo = (target: string) =>
  (document.getElementById(target) as HTMLFormElement).scrollIntoView({
    block: "start",
    behavior: "smooth",
  });

export default function PerformanceVideos() {
  return (
    <div className="h-fit mx-auto w-full max-w-[1440px] flex" id="perf">
      <div className="hidden lg:grid sm:w-[5%] text-white text-center text-2xl timeline-grid">
        <p className="row-start-1 place-self-center">2022</p>
        <p className="row-start-2 place-self-center">2019</p>
        <p className="row-start-6 place-self-center">2018</p>
        <p className="row-start-7 place-self-center">2017</p>
      </div>
      <div className="flex flex-col w-full md:w-[95%] md:mx-auto">
        <div className="flex w-full justify-center md:justify-start sm:mr-auto text-white bg-black text-xl py-2 sticky top-0 gap-x-3">
          <button
            type="button"
            className="text-white/80 hover:text-white text-lg py-2 px-3 bg-green-900/30 group hover:bg-green-900/50 rounded-2xl transition-all duration-100 w-fit"
            onClick={() => scrollTo("first-2022-vid")}
          >
            2022
          </button>
          <button
            type="button"
            className="text-white/80 hover:text-white text-lg py-2 px-4 bg-green-900/30 group hover:bg-green-900/50 rounded-2xl transition-all duration-100 w-fit"
            onClick={() => scrollTo("first-2019-vid")}
          >
            2019
          </button>
          <button
            type="button"
            className="text-white/80 hover:text-white text-lg py-2 px-4 bg-green-900/30 group hover:bg-green-900/50 rounded-2xl transition-all duration-100 w-fit"
            onClick={() => scrollTo("first-2018-vid")}
          >
            2018
          </button>
          <button
            type="button"
            className="text-white/80 hover:text-white text-lg py-2 px-4 bg-green-900/30 group hover:bg-green-900/50 rounded-2xl transition-all duration-100 w-fit"
            onClick={() => scrollTo("first-2017-vid")}
          >
            2017
          </button>
        </div>
        <PerfVideoComp
          id="first-2022-vid"
          src="https://www.youtube.com/embed/JaF5JwZJy48?html5=1"
          description={
            <div>
              <p>Schubert Piano Trio in E flat major No. 2, Op.100</p>
              <p>II. Andante con moto</p>
            </div>
          }
          right
          link="https://www.youtube.com/watch?v=JaF5JwZJy48"
        />
        <PerfVideoComp
          id="first-2019-vid"
          src="https://www.youtube-nocookie.com/embed/Z3sLFa3FkmI"
          description={
            <div>
              <p>Bach Sonata No. 2 in A minor</p>
              <p>Grave</p>
            </div>
          }
          left
          link="https://www.youtube.com/watch?v=Z3sLFa3FkmI"
        />
        <PerfVideoComp
          src="https://www.youtube-nocookie.com/embed/vPrTJeND3-k"
          description={
            <p className="text-white m-auto text-xl lg:text-2xl">
              Ysaye Sonata No. 3 &quot;Ballade&quot;
            </p>
          }
          right
          link="https://www.youtube.com/watch?v=vPrTJeND3-k"
        />
        <PerfVideoComp
          src="https://www.youtube-nocookie.com/embed/7yx9MddaXPQ"
          description={
            <p className="text-white m-auto text-xl lg:text-2xl">
              Paganini Caprice No. 10
            </p>
          }
          left
          link="https://www.youtube.com/watch?v=7yx9MddaXPQ"
        />
        <PerfVideoComp
          src="https://www.youtube.com/embed/vxzJjWYAz2U?start=596"
          description={
            <div>
              <p>Beethoven String Quartet No. 5 in A major, Op. 18, No. 5</p>
              <p>I. Allegro (9:56)</p>
              <p>II. Minuet (15:10)</p>
              <p>III. Andante cantabile con variazioni (20:08)</p>
            </div>
          }
          right
          link="https://www.youtube.com/watch?v=vxzJjWYAz2U&t=596s"
        />
        <PerfVideoComp
          id="first-2018-vid"
          src="https://www.youtube-nocookie.com/embed/qP12tqO3ZdM"
          description={
            <div>
              <p>Bach Partita No. 2 in D minor</p>
              <p>Chaconne</p>
            </div>
          }
          left
          link="https://www.youtube.com/watch?v=qP12tqO3ZdM"
        />
        <PerfVideoComp
          id="first-2017-vid"
          src="https://www.youtube-nocookie.com/embed/0jftN00EoSA"
          description={
            <div>
              <p>Sibelius Violin Concerto</p>
              <p>I. Allegro moderato (0:00)</p>
              <p>II. Adagio di molto (11:50)</p>
              <p>III. Allegro, ma non tanto (18:37)</p>
            </div>
          }
          right
          link="https://www.youtube.com/watch?v=0jftN00EoSA"
        />
      </div>
    </div>
  );
}
