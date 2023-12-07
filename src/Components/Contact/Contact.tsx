import React from "react";
import gitHubImage from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";
import "./Contact.css";

export default function Contact() {
  return (
    <div
      className="grid h-full max-h-[700px] w-full mx-auto max-w-[1000px] bg-black"
      id="contact"
    >
      <div className="grid col-start-1 row-start-1">
        <div className="col-start-1 row-start-1 bg-white/10 rounded-xl" />
        <div className="col-start-1 row-start-1 bg-green-900/30 m-2 rounded-xl" />
        <div className="col-start-1 row-start-1 bg-green-800/30 m-4 rounded-xl" />
        <div className="col-start-1 row-start-1 bg-black m-6 pt-6 pl-6 rounded-xl flex flex-col gap-3">
          <p className="text-green-200 text-4xl">Contact</p>
          <p className="text-white text-3xl">
            Send me a message or get in touch via{" "}
            <a
              href="https://www.linkedin.com/in/nicholas-safonov/"
              target="_blank"
              className="text-blue-200 hover:text-blue-400 transition-all duration-100"
            >
              LinkedIn
            </a>
            !
          </p>
          <div>
            <a href="mailto: safonov.nick10@gmail.com">
              <div className="text-white/80 hover:text-white text-lg py-3 px-6 bg-green-900/30 group hover:bg-green-900/50 rounded-2xl transition-all duration-100 w-fit">
                Send a Message{" "}
                <span className="pl-0 group-hover:pl-2 transition-all duration-100">
                  {">"}
                  {">"}
                </span>
              </div>
            </a>
            <div className="flex mt-3">
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
          <a
            href="https://drive.google.com/file/d/1SFLxL2B9wNtQq56UctmMKEGAvC60fL26/view?usp=sharing"
            target="_blank"
          >
            <div className="text-white/80 hover:text-white text-lg py-3 px-6 bg-green-900/30 group hover:bg-green-900/50 rounded-2xl transition-all duration-100 w-fit">
              My Resume{" "}
              <span className="pl-0 group-hover:pl-2 transition-all duration-100">
                {">"}
                {">"}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
