import React from "react";
import AudioPlayer from "../Sidebar/AudioPlayer";
import calmLoopArt from "../../Assets/trackArt/calmLoopCropped.jpg";
import ecumenopolis from "../../Assets/trackArt/ecumenopolis.webp";

const stellaris = require("../../Assets/tracks/FS_Mast_v2.wav");
const calmLoop = require("../../Assets/tracks/freeSamplesLoop.wav");

export default function SoundDesign() {
  return (
    <div className="w-full text-white">
      <div className="flex flex-col w-full text-center">
        <p className="text-3xl py-10">Sound Design Reel (2021)</p>
        <iframe
          className="w-[770px] h-[450px] mx-auto"
          src="https://www.youtube.com/embed/UgGg66IpR3U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className="w-full text-center">
        <p className="text-3xl py-10">Music</p>
        <div className="flex w-1/2 mx-auto">
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
