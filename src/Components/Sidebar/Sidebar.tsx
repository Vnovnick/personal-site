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

  const navLinkFormatter = (link: string, linkName: string) => {
    return (
      <div
        className={`w-full flex transition-all ${
          location.pathname === link
            ? "bg-green-900/50"
            : "hover:bg-green-900/50"
        }`}
      >
        <p
          className={`pl-3 transition-all ${
            location.pathname === link && "ml-auto pr-7"
          }`}
        >
          {linkName}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-black flex flex-col border h-screen border-white">
      <p className="text-white text-3xl mx-auto" id="fullName">
        Nicholas Safonov
      </p>
      <div className="flex flex-col text-green-400 text-lg h-1/5 justify-between mt-10 w-full">
        <Link to="/bio">{navLinkFormatter("/bio", "Bio")}</Link>
        <Link to="/portfolio">
          {navLinkFormatter("/portfolio", "Portfolio")}
        </Link>
        <Link to="/performance-videos">
          {navLinkFormatter("/performance-videos", "Performance Videos")}
        </Link>
        <p className="hover:bg-green-900/50 pl-3" id="nav-misc">
          Sound Design
        </p>
      </div>
    </div>
  );
}
