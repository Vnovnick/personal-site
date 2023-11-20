import React, { useState } from "react";
import "./NavigationBar.scss";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import calmLoopArt from "../../Assets/trackArt/calmLoopCropped.jpg";
import ecumenopolis from "../../Assets/trackArt/ecumenopolis.webp";
import gitHubImage from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";
import treble from "./treble-clef.svg";

const stellaris = require("../../Assets/tracks/FS_Mast_v2.wav");
const calmLoop = require("../../Assets/tracks/freeSamplesLoop.wav");

export default function NavigationBar() {
  const [showPlayer, setShowPlayer] = useState(false);
  const location = useLocation();

  window.onload = () => {
    fullNameResize();
  };

  const fullNameResize = (): void => {
    let winWidth: number = window.innerWidth;
    if (winWidth < 1270) {
      (document.getElementById("fullName") as HTMLFormElement).innerHTML =
        "Nick S.";
    } else if (winWidth >= 1271) {
      (document.getElementById("fullName") as HTMLFormElement).innerHTML =
        "Nicholas Safonov";
    }
  };
  window.addEventListener("resize", () => {
    fullNameResize();
  });

  const navLinkFormatter = (link: string, linkName: string) => {
    return (
      <div className="flex grid group transition-[background] duration-100 text-base lg:text-xl">
        <div
          className={`col-start-1 row-start-1  group-hover:w-full transition-[width] duration-100  mx-auto bg-gradient-to-r from-green-900/50 via-black to-green-900/50 rounded-md ${
            location.pathname === link ? "w-full" : "w-0"
          }`}
        />
        <p
          className={`col-start-1 row-start-1 transition-all w-fit px-3 py-1 ${
            location.pathname === link ? "font-semibold" : "font-normal"
          }`}
        >
          {linkName}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-black h-fit">
      {/* <div className="mx-auto flex my-5 items-center w-2/3 justify-around">
        <div className="w-1/6" />
        <Link to="/" id="name">
          <p className="text-white text-3xl md:text-5xl" id="fullName">
            Nicholas Safonov
          </p>
        </Link>
        <div className="flex w-1/6">
          <a
            href="https://github.com/Vnovnick"
            className="grid place-items-center group"
            target="_blank"
          >
            <div className="rounded-full w-10 h-10 group-hover:bg-green-900/50 col-start-1 row-start-1" />
            <img
              src={gitHubImage}
              alt="gitHub"
              className="w-14 col-start-1 row-start-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-safonov/"
            className="grid place-items-center group"
            target="_blank"
          >
            <div className="rounded-full w-10 h-10 group-hover:bg-green-900/50 col-start-1 row-start-1" />
            <img
              src={linkedIn}
              alt="gitHub"
              className="w-6 col-start-1 row-start-1"
            />
          </a>
        </div>
      </div> */}
      <div className="w-full max-w-[1440px] grid mx-auto">
        {/* <div className="col-start-1 row-start-1 grid w-full px-5 mt-3">
          <div className="w-full col-start-1 row-start-1">
            <img
              alt="Treble clef"
              src={treble}
              className="w-32 h-32 -mt-5 -ml-5 rotate-[-7deg]"
            />
          </div>
          <div className="col-start-1 row-start-1 flex flex-col gap-y-4">
            <div className="w-full h-0.5 bg-white/80" />
            <div className="w-full h-0.5 bg-white/80" />
            <div className="w-full h-0.5 bg-white/80" />
            <div className="w-full h-0.5 bg-white/80" />
            <div className="w-full h-0.5 bg-white/80" />
          </div>
        </div> */}
        <div className="col-start-1 row-start-1 flex flex-col md:flex-row text-green-400 text-lg mx-auto md:gap-14 my-5 p-2 rounded-xl h-fit">
          <Link to="/about-me" id="about-me-link">
            {navLinkFormatter("/about-me", "About Me")}
          </Link>
          <Link to="/work" id="work-link">
            {navLinkFormatter("/work", "Work")}
          </Link>
          <Link to="/performance-videos" id="perf-videos-link">
            {navLinkFormatter("/performance-videos", "Performance Videos")}
          </Link>
          <Link to="/sound-design" id="sound-design-link">
            {navLinkFormatter("/sound-design", "Sound Design/Music")}
          </Link>
          <Link to="/contact" id="contact-link">
            {navLinkFormatter("/contact", "Contact")}
          </Link>
        </div>
      </div>
      {/* <div className="mt-8 hidden sm:block">
        <button
          type="button"
          className="flex mb-5"
          onClick={() => setShowPlayer(!showPlayer)}
        >
          <p className="text-white pl-3 text-lg font-bold">Music Player</p>
          {showPlayer ? (
            <div className="w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white my-auto mx-3" />
          ) : (
            <div className="w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white my-auto mx-3" />
          )}
        </button>
        {showPlayer && (
          <div className="py-2 w-full overflow-auto flex flex-col gap-2">
            <AudioPlayer
              title="Rain Loop"
              audioSrc={calmLoop}
              image={calmLoopArt}
            />
            <AudioPlayer
              title="Ecumenopolis"
              audioSrc={stellaris}
              image={ecumenopolis}
            />
          </div>
        )}
      </div> */}
    </div>
  );
}
