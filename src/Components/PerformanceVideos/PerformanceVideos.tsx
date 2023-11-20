import React from "react";
import PerfVideoComp from "./PerfVideoComp";
import "./PerformanceVideos.scss";

const scrollTo = (target: string) =>
  (document.getElementById(target) as HTMLFormElement).scrollIntoView({
    block: "start",
    behavior: "smooth",
  });

export default function PerformanceVideos() {
  return (
    <div className="h-fit mx-auto w-full md:w-4/5 flex" id="perf">
      <div className="hidden lg:grid sm:w-[5%] text-white text-center text-[1.5em] timeline-grid">
        <p className="row-start-1 place-self-center">2022</p>
        <p className="row-start-2 place-self-center">2019</p>
        <p className="row-start-6 place-self-center">2018</p>
        <p className="row-start-7 place-self-center">2017</p>
      </div>
      <div className="flex flex-col w-full md:w-[95%] md:mx-auto">
        <div className="flex w-full justify-center sm:justify-start sm:mr-auto  text-white bg-black text-lg py-2 sticky top-0">
          <button
            type="button"
            className="hover:text-green-300"
            onClick={() => scrollTo("first-2022-vid")}
          >
            2022
          </button>
          <div className="w-1 h-1 bg-white rounded-full my-auto mx-5" />
          <button
            type="button"
            className="hover:text-green-300"
            onClick={() => scrollTo("first-2019-vid")}
          >
            2019
          </button>
          <div className="w-1 h-1 bg-white rounded-full my-auto mx-5" />
          <button
            type="button"
            className="hover:text-green-300"
            onClick={() => scrollTo("first-2018-vid")}
          >
            2018
          </button>
          <div className="w-1 h-1 bg-white rounded-full my-auto mx-5" />
          <button
            type="button"
            className="hover:text-green-300"
            onClick={() => scrollTo("first-2017-vid")}
          >
            2017
          </button>
        </div>
        <PerfVideoComp
          id="first-2022-vid"
          src="https://www.youtube.com/embed/JaF5JwZJy48?html5=1"
          description={
            <div className="text-white m-auto text-[1.3em] lg:text-[1.5em] text-center">
              <p>Schubert Piano Trio in E flat major No. 2, Op.100</p>
              <p>II. Andante con moto</p>
            </div>
          }
          right
        />
        <PerfVideoComp
          id="first-2019-vid"
          src="https://www.youtube-nocookie.com/embed/Z3sLFa3FkmI"
          description={
            <div className="text-white m-auto text-[1.3em] lg:text-[1.5em] text-center">
              <p>Bach Sonata No. 2 in A minor</p>
              <p>Grave</p>
            </div>
          }
          left
        />
        <PerfVideoComp
          src="https://www.youtube-nocookie.com/embed/vPrTJeND3-k"
          description={
            <p className="text-white m-auto text-[1.3em] lg:text-[1.5em]">
              Ysaye Sonata No. 3 &quot;Ballade&quot;
            </p>
          }
          right
        />
        <PerfVideoComp
          src="https://www.youtube-nocookie.com/embed/7yx9MddaXPQ"
          description={
            <p className="text-white m-auto text-[1.3em] lg:text-[1.5em]">
              Paganini Caprice No. 10
            </p>
          }
          left
        />
        <PerfVideoComp
          src="https://www.youtube.com/embed/vxzJjWYAz2U?start=596"
          description={
            <div className="text-white m-auto text-[1.3em] lg:text-[1.5em] text-center">
              <p>String Quartet No. 5 in A major, Op. 18, No. 5</p>
              <p>I. Allegro (9:56)</p>
              <p>II. Minuet (15:10)</p>
              <p>III. Andante cantabile con variazioni (20:08)</p>
            </div>
          }
          right
        />
        <PerfVideoComp
          id="first-2018-vid"
          src="https://www.youtube-nocookie.com/embed/qP12tqO3ZdM"
          description={
            <div className="text-white m-auto text-[1.3em] lg:text-[1.5em] text-center">
              <p>Bach Partita No. 2 in D minor</p>
              <p>Chaconne</p>
            </div>
          }
          left
        />
        <PerfVideoComp
          id="first-2017-vid"
          src="https://www.youtube-nocookie.com/embed/0jftN00EoSA"
          description={
            <div className="text-white m-auto text-[1.3em] lg:text-[1.5em] text-center">
              <p>Sibelius Violin Concerto</p>
              <p>I. Allegro moderato (0:00)</p>
              <p>II. Adagio di molto (11:50)</p>
              <p>III. Allegro, ma non tanto (18:37)</p>
            </div>
          }
          right
        />
      </div>
    </div>
  );
}
