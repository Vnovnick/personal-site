import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
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

  return (
    <div className="bg-black flex flex-col h-screen border border-white">
      <p className="text-white text-3xl mx-auto">Nicholas Safonov</p>
      <ul className="flex flex-col text-green-400 text-lg ml-3 h-1/5 justify-between mt-10">
        <a className="hover:bg-green-900/50" id="nav-bio" href="#bio">
          Bio
        </a>
        <a className="nav-link" id="nav-port" href="#port">
          Portfolio
        </a>
        <a className="nav-link" id="nav-perf" href="#perf">
          Performance Videos
        </a>
        <a className="nav-link" id="nav-misc" href="#">
          Sound Design
        </a>
      </ul>
    </div>
  );
}
