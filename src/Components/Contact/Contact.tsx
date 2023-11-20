import React from "react";
import gitHubImage from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";

export default function Contact() {
  return (
    <div className="grid h-full max-h-[700px] w-full mx-auto max-w-[1440px] bg-black">
      <div className="grid col-start-1 row-start-1">
        <div className="col-start-1 row-start-1 bg-white/10" />
        <div className="col-start-1 row-start-1 bg-green-900/30 m-2" />
        <div className="col-start-1 row-start-1 bg-green-800/30 m-4" />
        <div className="col-start-1 row-start-1 bg-black m-6 pt-6 pl-6">
          <p className="text-white text-2xl">Email: safonov.nick10@gmail.com</p>
          <div className="flex items-center my-3">
            <p className="text-white text-2xl">Other: </p>
            <div className="flex">
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
            className="text-green-200 hover:text-green-300 text-2xl"
            href="https://drive.google.com/file/d/1SFLxL2B9wNtQq56UctmMKEGAvC60fL26/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
