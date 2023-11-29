import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import gitHub from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";

export default function NavigationBar() {
  const location = useLocation();

  const navLinkFormatter = (link: string, linkName: string) => {
    return (
      <div className="flex grid group transition-[background] duration-100 text-xl">
        <div
          className={`col-start-1 row-start-1  group-hover:w-full transition-[width] duration-100  mx-auto bg-gradient-to-r from-green-900/50 via-black to-green-900/50 rounded-md ${
            location.pathname === link ? "w-full" : "w-0"
          }`}
        />
        <p
          className={`col-start-1 row-start-1 transition-all w-fit px-3 py-1 whitespace-nowrap ${
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
      <div className="w-full max-w-[1440px] flex mx-auto">
        <div className="flex items-center ml-5">
          <Link to="/" id="landing-link">
            <p className="text-5xl text-green-600 border-2 border-green-600 px-3 py-1 rounded-lg hover:bg-green-900/50">
              N
            </p>
          </Link>
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
        <div className="col-start-1 row-start-1 flex flex-col md:flex-row text-green-400 text-lg mx-auto lg:gap-8 xl:gap-14 my-5 p-2 rounded-xl h-fit">
          <Link to="/about" id="about-me-link">
            {navLinkFormatter("/about", "About")}
          </Link>
          <Link to="/projects" id="work-link">
            {navLinkFormatter("/projects", "Projects")}
          </Link>
          <Link to="/extras" id="extras-link">
            {navLinkFormatter("/extras", "Extras")}
          </Link>
          <Link to="/contact" id="contact-link">
            {navLinkFormatter("/contact", "Contact")}
          </Link>
        </div>
      </div>
    </div>
  );
}
