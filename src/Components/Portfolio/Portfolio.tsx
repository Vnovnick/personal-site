import React from "react";
import runGif from "./assets/runTracker.gif";
import discordVid from "./assets/discordGif.gif";
import ProjectInfoDisplay from "./ProjectInfoDisplay";
import personalSiteImg from "./assets/personalSite.png";
import jourbooks from "./assets/jourbooksimg.png";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-8 m-auto w-full max-w-[1440px] py-5 px-3">
      <ProjectInfoDisplay
        gif={jourbooks}
        link="https://github.com/Vnovnick/jourbooks"
        gifAlt="JourBooks screenshot"
        containerClassName="bg-gray-500/20"
        titleClassName="text-green-700"
        gifClassName="bg-black"
        gifbgClassName="bg-green-900/40"
        descriptionClassName="hover:bg-black/80 bg-gray-600/10"
        descriptionFields={{
          duration: "(Currently In-Progress)",
          title: "JourBooks",
          description: (
            <p>
              A site to shelve books, keep track of reading progress, chat with
              other readers, and journal about books you're reading or
              interested in. By utilizing{" "}
              <a
                href="https://openlibrary.org/"
                target="_blank"
                rel="noreferrer"
              >
                Open Library's
              </a>{" "}
              powerful API, users are able to search through Open Library's rich
              collection of books and save any books they're interested in.{" "}
            </p>
          ),
          skills: [
            "SvelteKit",
            "PostgreSQL",
            "TypeScript",
            "JavaScript",
            "Git",
          ],
        }}
        skillPillClassName="bg-gray-500/30 text-green-100"
      />
      <ProjectInfoDisplay
        gif={personalSiteImg}
        link="https://github.com/Vnovnick/personal-site"
        gifAlt="Personal Site screenshot"
        containerClassName="bg-green-900/30"
        titleClassName="text-green-100"
        gifClassName="bg-black"
        gifbgClassName="bg-green-100/40"
        descriptionClassName="hover:bg-green-300/10 bg-green-100/10"
        descriptionFields={{
          duration: "August - December 2022 (v1) | November 2023 (v1.5)",
          title: "This Site!",
          description:
            "My Personal site built using React and TypeScript. Built to serve as an all-encompassing portfolio application showcasing my past and present development work as well as some snippets of my past ventures into violin performance and sound design. Hosted on GitHub Pages.",
          skills: [
            "TypeScript",
            "JavaScript",
            "React",
            "React Router",
            "Git",
            "GitHub Pages",
          ],
        }}
        skillPillClassName="bg-green-500/30 text-green-200"
      />
      <ProjectInfoDisplay
        gif={discordVid}
        link="https://github.com/Vnovnick/apex_discord_bot"
        gifAlt="Discord Bot Demo Gif"
        containerClassName="bg-[#7289da]/20"
        gifClassName="bg-[#36393e]"
        gifbgClassName="bg-[#7289da]"
        descriptionClassName="hover:bg-[#3d3ce2]/10 bg-[#7289da]/10"
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
        descriptionClassName="hover:bg-amber-300/10 bg-amber-100/10"
        descriptionFields={{
          duration: "May - June 2022",
          title: "Run Tracker",
          description:
            "Single-page React application that utilizes both the Strava and Spotify APIs to show the songs a user has listened to over the course of a run. Once the user is logged in, they will have collapsible timelines of their song data as well as a display of their last 10 activities.",
          skills: ["JavaScript", "React", "Strava API", "Spotify API", "Git"],
        }}
        skillPillClassName="text-white bg-amber-200/30"
      />
    </div>
  );
}
