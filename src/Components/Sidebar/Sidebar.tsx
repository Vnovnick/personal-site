import React, { useState } from "react";
import "./Sidebar.scss";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import calmLoopArt from "../../Assets/trackArt/calmLoopCropped.jpg";
import ecumenopolis from "../../Assets/trackArt/ecumenopolis.webp";
import gitHubImage from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";

const stellaris = require("../../Assets/tracks/FS_Mast_v2.wav");
const calmLoop = require("../../Assets/tracks/freeSamplesLoop.wav");

export default function Sidebar() {
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
      <div
        className={`w-full flex group transition-[background] duration-100 text-[1em] lg:text-[1.2em] ${
          location.pathname === link
            ? "bg-left bg-gradient-to-r from-black via-green-900/50 bg-[length:700px_100px]"
            : "hover:bg-gradient-to-r hover:from-black hover:via-green-900/50 hover:bg-[length:600px_100px] bg-right"
        }`}
      >
        <p
          className={`transition-all w-fit ${
            location.pathname === link
              ? "pl-[20%]"
              : "pl-[5%] group-hover:tracking-wide"
          }`}
        >
          {linkName}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-black flex flex-col h-fit md:h-screen">
      <div className="mx-auto flex flex-col">
        <Link to="/about-me" id="name">
          <p className="text-white text-3xl pt-[10%]" id="fullName">
            Nicholas Safonov
          </p>
        </Link>
        <div className="flex mx-auto">
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
      </div>
      <div className="flex flex-col text-green-400 text-lg h-1/4 justify-between mt-10 w-full">
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
