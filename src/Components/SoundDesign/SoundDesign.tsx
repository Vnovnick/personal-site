import React from "react";
import AudioPlayer from "../Navigation/AudioPlayer";
import calmLoopArt from "../../Assets/trackArt/calmLoopCropped.jpg";
import ecumenopolis from "../../Assets/trackArt/ecumenopolis.webp";

const stellaris = require("../../Assets/tracks/FS_Mast_v2.wav");
const calmLoop = require("../../Assets/tracks/freeSamplesLoop.wav");

export default function SoundDesign() {
  return (
    <div className="w-full max-w-[1240px] mx-auto text-white flex flex-col lg:flex-row lg:justify-around pb-10 lg:pb-0">
      <div className="flex flex-col text-center">
        <p className="text-4xl py-10">Sound Design Reel (2022)</p>
        <iframe
          className="w-[100vw] max-w-[750px] h-[400px] mx-auto"
          src="https://www.youtube-nocookie.com/embed/UgGg66IpR3U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="text-center flex flex-col items-center">
        <p className="text-4xl py-10">Music</p>
        <div className="flex lg:flex-col gap-10">
          <AudioPlayer
            title="Rain Loop"
            audioSrc={calmLoop}
            image={calmLoopArt}
          />
          <AudioPlayer
            title="Ecumenopolis"
            audioSrc={stellaris}
            image={ecumenopolis}
          />
        </div>
      </div>
    </div>
  );
}
