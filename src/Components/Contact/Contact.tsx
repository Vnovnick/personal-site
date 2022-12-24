import React from "react";
import gitHubImage from "../../Assets/images/gitHubWhiteLogo.png";
import linkedIn from "../../Assets/images/linkedIn.png";

export default function Contact() {
  return (
    <div className="grid h-full w-full bg-black">
      <div className="grid col-start-1 row-start-1">
        <div className="col-start-1 row-start-1 w-0 h-0 border-b-white/10 border-x-transparent border-x-[400px] border-b-[400px] -rotate-45 -mt-14 -ml-64" />
        <div className="col-start-1 row-start-1 w-0 h-0 border-b-green-900/30 border-x-transparent border-x-[400px] border-b-[400px] -rotate-45 -mt-10 -ml-60" />
        <div className="col-start-1 row-start-1 w-0 h-0 border-b-green-800/30 border-x-transparent border-x-[400px] border-b-[400px] -rotate-45 -mt-6 -ml-56" />
        <div className="col-start-1 row-start-1 w-0 h-0 border-b-black border-x-transparent border-x-[400px] border-b-[400px] -rotate-45 -mt-2 -ml-52" />
      </div>
      <div className="col-start-1 row-start-1 z-50 m-20">
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
          className="text-green-200 hover:text-green-300 text-xl"
          href="https://drive.google.com/file/d/1TeD28kkEYqRii4MuZkhA1SCO634hWmSd/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
