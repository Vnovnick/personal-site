import React from "react";
import runvid from "./RunTracker.mp4";
import chainLink from "./chainLink.png";
import proppex from "../../Assets/images/Proppex.jpg";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="flex w-full gap-5" id="port">
        <div className="w-1/2 h-[300px] flex">
          <img
            src={proppex}
            alt="proppex-logo"
            className="mx-auto rounded-xl"
          />
        </div>
        <div className="w-1/2 p-4">
          <div className="flex text-white items-center mb-3">
            <p className="mr-2 text-3xl">Proppex - Frontend Developer Intern</p>
          </div>
          <p className="text-white text-lg">
            As a Frontend Developer Intern at Proppex, I work to create UI
            elements and replicate designs created by our designer. For my role,
            I use React, Tailwind, Jest, Git, JSX, TypeScript, and JavaScript.
          </p>
        </div>
      </div>
      <div className="flex w-full  mx-auto gap-5" id="port">
        <div className="w-1/2">
          <video autoPlay muted loop className="rounded-xl">
            <source src={runvid} type="video/mp4"></source>
          </video>
        </div>
        <div className="w-1/2 p-4">
          <div className="flex text-white items-center mb-3">
            <p className="mr-2 text-3xl">Run Tracker</p>
            {/* <a
            href="https://vnovnick.github.io/run-tracker-ns/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="chain-link"
              src={chainLink}
              alt="link"
              width="17px"
              height="17px"
            />
          </a> */}
          </div>
          <div className="details">
            {/* <p className="text-white text-lg">
              This project started with the desire to see my Spotify song
              activity during my runs. Since I use Strava to track runs, I
              created the project to work with the user data available from both
              the Spotify and Strava APIs. Once extracted, the application takes
              the user's 50 most recently played songs (50 being the maximum
              amount set by the API), checks to see if any of the song object{" "}
              <code className="bg-gray-800 p-1 rounded-md">played_at</code>{" "}
              values fall within the time frames of the runs, and displays the
              corresponding song and run data together in one "post." The page
              displays the user's last 10 runs.
            </p> */}
            <p className="text-white text-lg">
              This project started with the desire to see my Spotify song
              activity during my runs. Since I use Strava to track runs, I
              created the project to work with the user data available from both
              the Spotify and Strava APIs. The page displays the user's last 10
              runs.
            </p>
            <p className="text-white text-lg">
              (See{" "}
              <a
                href="https://github.com/Vnovnick/run-tracker-ns"
                target="_blank"
                rel="noreferrer"
                className="text-green-200/80 hover:text-green-300"
              >
                link
              </a>{" "}
              for the full Github repository and README file)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
