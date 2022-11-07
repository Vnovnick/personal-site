import React from "react";
import "./Sidebar.scss";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

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

  // const sidebarLinks = document.querySelectorAll(`[id$="link"]`);
  // sidebarLinks.forEach((link) => {
  //   link.addEventListener("click", (event) => {});
  // });

  const navLinkFormatter = (link: string, linkName: string) => {
    return (
      <div
        className={`w-full flex group hover:bg-gradient-to-r hover:from-black hover:via-green-900/50 hover:bg-[length:600px_100px] bg-right transition-[background] duration-100 ${
          location.pathname === link &&
          "bg-left bg-gradient-to-r from-black via-green-900/50 bg-[length:700px_100px]"
        }`}
      >
        <p
          className={`pl-3 transition-all w-fit ${
            location.pathname === link ? "pl-10" : "group-hover:tracking-wide"
          }`}
        >
          {linkName}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-black flex flex-col h-screen">
      <p className="text-white text-3xl mx-auto pt-5" id="fullName">
        Nicholas Safonov
      </p>
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
    </div>
  );
}
