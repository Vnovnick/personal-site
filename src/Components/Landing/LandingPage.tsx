import React from "react";
import treble from "../Navigation/treble-clef.svg";
import { Link, useLocation } from "react-router-dom";
import gitHub from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";

export default function LandingPage() {
  const location = useLocation();

  const navLinkFormatter = (link: string, linkName: string) => {
    return (
      <div className="flex grid group transition-[background] duration-100 text-base lg:text-xl text-green-400">
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
    <div className="h-full mx-auto w-full max-w-[1440px] py-5 flex flex-col">
      <div className="flex flex-col mx-auto mt-44">
        <p className="text-8xl text-green-500">Nicholas</p>
        <p className="text-8xl text-green-500 ml-20">Safonov</p>
        <p className="text-white text-5xl ml-32">Frontend Developer</p>
      </div>
      <div className="col-start-1 row-start-1 grid w-[1250px] px-5 mx-auto mt-10">
        <div className="w-full col-start-1 row-start-1 flex">
          <img
            alt="Treble clef"
            src={treble}
            className="w-32 h-32 -mt-5 -ml-5 rotate-[-7deg]"
          />
          <div className="flex font-semibold text-lg justify-between w-4/5">
            <div className="group">
              <p className="text-white -mt-1">
                {"<"} {">"}
              </p>
              <p className="text-white mt-2">
                {"<"}/{">"}
              </p>
            </div>
            <p className="text-white mt-1">
              {"<"} {">"}
            </p>
            <div>
              <p className="text-white mt-3.5">
                {"<"}/{">"}
              </p>
              <p className="text-white -mt-2.5">
                {"<"} {">"}
              </p>
            </div>
            <div>
              <p className="text-white mt-1">
                {"<"}/{">"}
              </p>
              <p className="text-white -mt-2.5">
                {"<"} {">"}
              </p>
              <div className="flex text-white -mt-2.5 -ml-2.5">
                <p className="text-xl">{"#"}</p>
                <p>
                  {"<"}/{">"}
                </p>
              </div>
            </div>
            <div>
              <div className="flex text-white mt-3 -ml-2.5">
                <p className="text-xl">{"#"}</p>
                <p>
                  {"<"} {">"}
                </p>
              </div>
              <p className="text-white -mt-2">
                {"<"}/{">"}
              </p>
            </div>
          </div>
          <div className="ml-auto flex gap-5">
            <div className="flex flex-col gap-3 mt-7">
              <div className="w-1 h-1 rounded bg-white" />
              <div className="w-1 h-1 rounded bg-white" />
            </div>
            <div className="w-1.5 h-[74px] bg-white" />
          </div>
        </div>
        <div className="col-start-1 row-start-1 flex flex-col gap-y-4">
          <div className="w-full h-0.5 bg-white/80" />
          <div className="w-full h-0.5 bg-white/80" />
          <div className="w-full h-0.5 bg-white/80" />
          <div className="w-full h-0.5 bg-white/80" />
          <div className="w-full h-0.5 bg-white/80" />
        </div>
      </div>
      <div className="col-start-1 row-start-1 flex flex-col md:flex-row  mx-auto md:gap-14 my-5 p-2 rounded-xl h-fit">
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
      <div className="flex w-1/6 mx-auto">
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
  );
}
