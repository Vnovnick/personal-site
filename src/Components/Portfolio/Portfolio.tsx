import React from "react";
import runvid from "./RunTracker.mp4";
import proppex from "../../Assets/images/Proppex.jpg";
import discord from "./discord.svg";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-10 m-auto w-full max-w-[1440px] py-5">
      <p className="text-4xl text-white">Work</p>
      <div className="flex w-full gap-5" id="port">
        <div className="w-1/2 flex">
          <img
            src={proppex}
            alt="proppex-logo"
            className="mx-auto rounded-xl w-44 h-44 md:w-56 md:h-56"
          />
        </div>
        <div className="w-1/2 p-4">
          <p className="text-2xl text-white">
            <a
              className="text-cyan-200"
              href="https://www.proppex.com/"
              target="_blank"
              rel="noreferrer"
            >
              Proppex
            </a>{" "}
            - Junior Frontend Developer
          </p>
          <p className="text-white mb-3 text-lg"> (March 2023 - Present)</p>
          <p className="text-white text-lg">
            As a Junior Frontend Developer at Proppex, I have developed many
            core functionalites of the Proppex application such as the task
            creation/calendar tool, the new user onboarding process, and the
            Dashboard properties filter. I have also introduced initiatives to
            clean up tech debt in the codebase and have accelerated project
            completion time by mentoring interns throughout sprints. For my
            role, I use React, Tailwind, Jest, Git, JSX, TypeScript, and
            JavaScript.
          </p>
        </div>
      </div>
      <div className="flex w-full gap-5" id="port">
        <div className="w-1/2" />
        <div className="w-1/2 p-4 ml-auto">
          <p className="text-2xl text-white">
            <a
              className="text-cyan-200"
              href="https://www.proppex.com/"
              target="_blank"
              rel="noreferrer"
            >
              Proppex
            </a>{" "}
            - Frontend Developer Intern
          </p>
          <p className="text-white mb-3 text-lg">
            {" "}
            (September 2022 - March 2023)
          </p>
          <p className="text-white text-lg">
            As a Frontend Developer Intern at Proppex, I work to create UI
            elements and replicate designs created by our designer. I also am
            often tasked with overseeing development processes such as backlog
            prep, ticket creation, and peer mentoring, reporting directly to the
            CTO.
          </p>
        </div>
      </div>
      <p className="text-4xl text-white">Projects </p>
      <div className="flex w-full mx-auto gap-5" id="port">
        <div className="w-1/2">
          <img src={discord} alt="discord" className="w-1/3 mx-auto" />
        </div>
        <div className="w-1/2 p-4">
          <div className="flex text-white items-center mb-3">
            <a
              className="mr-2 text-2xl text-indigo-300"
              href="https://github.com/Vnovnick/apex_discord_bot"
              target="_blank"
              rel="noreferrer"
            >
              Discord Stat Bot
            </a>
          </div>
          <div>
            <p className="text-white text-lg">
              Created a Discord chat bot that retrieves in-game user stat data
              for the game Apex Legends. Using the Apex Legends Status API, this
              bot allows for the user to type in commands which will post their
              stats for specific legends, current in-game map rotations, news
              updates, and general account info, such as current season rank and
              level, into the server. The bot was built using JavaScript,
              Node.js, Express.js, and the DiscordJS library with all
              interactions being handled with ngrok.
            </p>
            <p className="text-white text-lg">
              (See{" "}
              <a
                href="https://github.com/Vnovnick/apex_discord_bot"
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
      <div className="flex w-full  mx-auto gap-5" id="port">
        <div className="w-1/2">
          <video autoPlay muted loop className="rounded-xl w-4/5 mx-auto">
            <source src={runvid} type="video/mp4"></source>
          </video>
        </div>
        <div className="w-1/2 p-4">
          <div className="flex text-white items-center mb-3">
            <a
              className="mr-2 text-2xl text-amber-100"
              href="https://github.com/Vnovnick/run-tracker-ns"
              target="_blank"
              rel="noreferrer"
            >
              Run Tracker
            </a>
          </div>
          <div className="details">
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
