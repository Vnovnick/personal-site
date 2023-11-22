import React from "react";
import treble from "../Navigation/treble-clef.svg";
import { Link, useLocation } from "react-router-dom";
import gitHub from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";

export default function LandingPage() {
  const location = useLocation();

  const navLinkFormatter = (link: string, linkName: string) => {
    return (
      <div className="flex grid group transition-[background] duration-100 text-xl text-green-400">
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
    <div className="h-full mx-auto w-full max-w-[1100px] grid">
      <div className="col-start-1 row-start-1 grid w-full max-w-[540px] mx-auto px-5">
        <div className="w-fit col-start-1 row-start-1 flex flex-col">
          <img
            alt="Treble clef"
            src={treble}
            className="w-32 h-32 -mt-5 -ml-6 rotate-90"
          />
          <div className="flex flex-col font-semibold text-lg justify-between mx-auto h-4/5">
            <div className="group rotate-90 flex flex-col gap-2">
              <p className="text-white mt-2 text-green-300">
                {"<"} {">"}
              </p>
              <p className="text-white text-green-500">
                {"<"}/{">"}
              </p>
            </div>
            <p className="text-white ml-2 text-green-300 rotate-90">
              {"<"} {">"}
            </p>
            <div className="rotate-90 mr-3">
              <p className="text-white mt-3.5 text-green-300">
                {"<"}/{">"}
              </p>
              <p className="text-white -mt-2.5 text-green-500">
                {"<"} {">"}
              </p>
            </div>
            <div className="rotate-90 mr-6">
              <p className="text-white mt-1 text-green-300">
                {"<"}/{">"}
              </p>
              <p className="text-white -mt-2.5 text-green-100">
                {"<"} {">"}
              </p>
              <div className="flex text-white -mt-2.5 -ml-2.5 ">
                <p className="text-xl text-green-100">{"#"}</p>
                <p className="text-green-300">
                  {"<"}/{">"}
                </p>
              </div>
            </div>
            <div className="rotate-90 mr-3">
              <div className="flex text-white mt-3 -ml-2.5">
                <p className="text-xl text-green-100">{"#"}</p>
                <p className="text-green-300">
                  {"<"} {">"}
                </p>
              </div>
              <p className="text-white -mt-2 text-green-500">
                {"<"}/{">"}
              </p>
            </div>
          </div>
          <div className="mt-auto gap-5 flex flex-col">
            <div className="flex gap-x-3 ml-7">
              <div className="w-1 h-1 rounded bg-white" />
              <div className="w-1 h-1 rounded bg-white" />
            </div>
            <div className="h-1.5 w-[74px] bg-white" />
          </div>
        </div>
        <div className="col-start-1 row-start-1 flex gap-x-4 w-fit h-full">
          <div className="h-full w-0.5 bg-white/80" />
          <div className="h-full w-0.5 bg-white/80" />
          <div className="h-full w-0.5 bg-white/80" />
          <div className="h-full w-0.5 bg-white/80" />
          <div className="h-full w-0.5 bg-white/80" />
        </div>
      </div>
      <div className="col-start-1 row-start-1 flex flex-col items-center">
        <div className="flex flex-col mt-44">
          <p className="text-7xl sm:text-8xl text-green-500 bg-black z-10">
            Nicholas
          </p>
          <p className="text-7xl sm:text-8xl text-green-500 ml-20 bg-black">
            Safonov
          </p>
          <p className="text-white text-5xl ml-32 flex w-fit">
            Software Developer
          </p>
        </div>
        <div className="col-start-1 row-start-1 flex flex-col md:flex-row md:gap-8 xl:gap-12 mb-5 mt-16 p-2 rounded-xl h-fit bg-black z-10">
          <Link to="/about" id="about-me-link">
            {navLinkFormatter("/about", "About")}
          </Link>
          <Link to="/work" id="work-link">
            {navLinkFormatter("/work", "Work")}
          </Link>
          <Link to="/performance-videos" id="perf-videos-link">
            {navLinkFormatter("/performance-videos", "Performance Videos")}
          </Link>
          <Link to="/sound-design" id="sound-design-link">
            {navLinkFormatter("/sound-design", "Sound Design")}
          </Link>
          <Link to="/contact" id="contact-link">
            {navLinkFormatter("/contact", "Contact")}
          </Link>
        </div>
        <div className="flex mx-auto">
          <a
            href="https://github.com/Vnovnick"
            className="grid place-items-center group"
            target="_blank"
          >
            <div className="rounded-full w-10 h-10 group-hover:bg-green-900/50 col-start-1 row-start-1" />
            <img
              src={gitHub}
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
    </div>
  );
}
