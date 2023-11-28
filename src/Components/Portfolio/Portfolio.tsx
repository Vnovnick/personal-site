import React from "react";
import runGif from "./assets/runTracker.gif";
import discordVid from "./assets/discordGif.gif";
import ProjectInfoDisplay from "./ProjectInfoDisplay";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-8 m-auto w-full max-w-[1440px] py-5 px-3">
      <ProjectInfoDisplay
        gif={discordVid}
        link="https://github.com/Vnovnick/apex_discord_bot"
        gifAlt="Discord Bot Demo Gif"
        containerClassName="bg-[#7289da]/20"
        gifClassName="bg-[#36393e]"
        gifbgClassName="bg-[#7289da]"
        descriptionClassName="hover:bg-[#7289da]/20 bg-[#7289da]/10"
        titleClassName="text-[#7289da]"
        descriptionFields={{
          duration: "Dec 2022 - Feb 2023",
          title: "Discord Stat Bot",
          description:
            "Created a Discord chat bot that retrieves in-game user stat data for the game Apex Legends. Using the Apex Legends Status API, this bot allows for the user to type in commands which will post their stats for specific legends, current in-game map rotations, news updates, and general account info, such as current season rank and level, into the server.",
          skills: [
            "JavaScript",
            "Express.js",
            "Node.js",
            "Discord.js",
            "ngrok",
            "Git",
          ],
        }}
        skillPillClassName="text-white bg-[#7289da]/30"
      />
      <ProjectInfoDisplay
        gif={runGif}
        link="https://github.com/Vnovnick/run-tracker-ns"
        gifAlt="Run Tracker Demo Gif"
        containerClassName="bg-amber-100/10"
        titleClassName="text-amber-100"
        gifClassName="bg-[#ffeecc]"
        gifbgClassName="bg-amber-100/40"
        descriptionClassName="hover:bg-amber-100/20 bg-amber-100/10"
        descriptionFields={{
          duration: "May - June 2022",
          title: "Run Tracker",
          description:
            "Single-page React application that utilizes both the Strava and Spotify APIs to show the songs a user has listened to over the course of a run.",
          skills: ["JavaScript", "React", "Strava API", "Spotify API", "Git"],
        }}
        skillPillClassName="text-white bg-amber-200/30"
      />
    </div>
  );
}
