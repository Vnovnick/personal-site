import React from "react";
import runGif from "./runTracker.gif";
import discordVid from "./discordGif.gif";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-10 m-auto w-full max-w-[1440px] py-5 px-3">
      <div
        className="flex flex-col xl:flex-row w-fit xl:w-full justify-between mx-auto gap-5 bg-[#7289da]/20 items-center p-5 transition-all duration-100 rounded-lg"
        id="port"
      >
        <a
          href="https://github.com/Vnovnick/apex_discord_bot"
          target="_blank"
          rel="noreferrer"
        >
          <div className="grid group w-[330px] md:w-[560px] h-[350px]">
            <div className="col-start-1 row-start-1 bg-[#7289da] w-[320px] h-[270px] md:w-[540px] md:h-[325px] rounded-xl duration-100 transition-all" />
            <img
              src={discordVid}
              className="rounded-xl w-[320px] h-[270px] md:w-[540px] md:h-[325px] object-scale-down bg-[#36393e] mx-auto col-start-1 row-start-1 mt-5 md:ml-5 group-hover:mt-8 md:group-hover:ml-8 shadow-[0_5px_15px_5px] shadow-black/40 duration-100 transition-all"
              alt="Discord Bot Demo Gif"
            />
          </div>
        </a>
        <a
          className="w-full max-w-[600px] xl:w-1/2 p-4 group hover:bg-[#7289da]/20 bg-[#7289da]/10 h-[325px] duration-100 transition-all rounded-xl overflow-auto"
          href="https://github.com/Vnovnick/apex_discord_bot"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="text-white text-lg">Dec 2022 - Feb 2023</p>
            <div className="flex text-white items-center mb-3 justify-between">
              <p className="mr-2 text-2xl text-[#7289da]">Discord Stat Bot</p>
              <p className="text-white/80 group-hover:text-white mr-2 group-hover:mr-0 transition-all duration-100">
                {">"}
                {">"}
              </p>
            </div>
          </div>
          <p className="text-white text-lg">
            Created a Discord chat bot that retrieves in-game user stat data for
            the game Apex Legends. Using the Apex Legends Status API, this bot
            allows for the user to type in commands which will post their stats
            for specific legends, current in-game map rotations, news updates,
            and general account info, such as current season rank and level,
            into the server. The bot was built using JavaScript, Node.js,
            Express.js, and the DiscordJS library with all interactions being
            handled with ngrok.
          </p>
        </a>
      </div>
      <div
        className="flex flex-col xl:flex-row w-fit xl:w-full justify-between mx-auto rounded-lg gap-5 items-center p-5 transition-all duration-100 bg-amber-100/10"
        id="port"
      >
        <a
          className="grid h-[350px] w-[330px] md:w-[560px] group"
          href="https://github.com/Vnovnick/run-tracker-ns"
          target="_blank"
          rel="noreferrer"
        >
          <div className="col-start-1 row-start-1 bg-amber-100 w-[320px] h-[270px] md:w-[540px] md:h-[325px] rounded-xl duration-100 transition-all" />
          <img
            src={runGif}
            className="rounded-xl w-[320px] h-[270px] md:w-[540px] md:h-[325px] object-scale-down bg-[#ffeecc] mx-auto col-start-1 row-start-1 mt-5 md:ml-5 group-hover:mt-8 md:group-hover:ml-8 shadow-[0_5px_15px_5px] shadow-black/40 duration-100 transition-all"
            alt="Run Tracker Demo Gif"
          />
        </a>
        <a
          className="w-full max-w-[600px] xl:w-1/2 p-4 group hover:bg-amber-100/20 bg-amber-100/10 h-[325px] duration-100 transition-all rounded-xl overflow-auto"
          href="https://github.com/Vnovnick/run-tracker-ns"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <p className="text-white text-lg">May - June 2022</p>
            <div className="flex text-white items-center mb-3 justify-between">
              <p className="mr-2 text-2xl text-amber-100">Run Tracker</p>
              <p className="text-white/80 group-hover:text-white mr-2 group-hover:mr-0 transition-all duration-100">
                {">"}
                {">"}
              </p>
            </div>
          </div>
          <p className="text-white text-lg">
            This project started with the desire to see my Spotify song activity
            during my runs. Since I use Strava to track runs, I created the
            project to work with the user data available from both the Spotify
            and Strava APIs. The page displays the user's last 10 runs.
          </p>
        </a>
      </div>
    </div>
  );
}
