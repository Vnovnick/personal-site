import React from "react";
import "./Sidebar.scss";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";
import calmLoopArt from "../../Assets/trackArt/calmLoopCropped.jpg";
import ecumenopolis from "../../Assets/trackArt/ecumenopolis.webp";

const stellaris = require("../../Assets/tracks/FS_Mast_v2.wav");
const calmLoop = require("../../Assets/tracks/freeSamplesLoop.wav");

export default function Sidebar() {
  const location = useLocation();

  window.onload = () => {
    fullNameResize();
  };

  // handles nav scroll to element
  // const scrollTo = (target: string) => (document.getElementById(target) as HTMLFormElement).scrollIntoView();

  // resizes name on window resize
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
  // got online

  const navLinkFormatter = (link: string, linkName: string) => {
    return (
      <div
        className={`w-full flex group transition-[background] duration-100 ${
          location.pathname === link
            ? "bg-left bg-gradient-to-r from-black via-green-900/50 bg-[length:700px_100px]"
            : "hover:bg-gradient-to-r hover:from-black hover:via-green-900/50 hover:bg-[length:600px_100px] bg-right"
        }`}
      >
        <p
          className={`transition-all w-fit ${
            location.pathname === link
              ? "pl-10"
              : "pl-3 group-hover:tracking-wide"
          }`}
        >
          {linkName}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-black flex flex-col h-screen">
      <div className="mx-auto">
        <Link to="/bio" id="name">
          <p className="text-white text-3xl pt-5" id="fullName">
            Nicholas Safonov
          </p>
        </Link>
      </div>
      <div className="flex flex-col text-green-400 text-lg h-1/5 justify-between mt-10 w-full">
        <Link to="/bio" id="bio-link">
          {navLinkFormatter("/bio", "Bio")}
        </Link>
        <Link to="/portfolio" id="portfolio-link">
          {navLinkFormatter("/portfolio", "Portfolio")}
        </Link>
        <Link to="/performance-videos" id="perf-videos-link">
          {navLinkFormatter("/performance-videos", "Performance Videos")}
        </Link>
        <p className="hover:bg-green-900/50 pl-3" id="nav-misc">
          Sound Design
        </p>
      </div>
      <div className="mt-8">
        <p className="text-white pl-3 text-lg font-bold mb-5">Music</p>
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
      </div>
    </div>
  );
}
