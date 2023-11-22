import React from "react";
import runvid from "./RunTracker.mp4";
import discord from "./discord.svg";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-10 m-auto w-full max-w-[1440px] py-5">
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
