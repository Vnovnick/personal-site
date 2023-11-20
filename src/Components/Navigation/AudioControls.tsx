import React, { Dispatch, SetStateAction } from "react";
import playButton from "./play.svg";
import pauseButton from "./pause.svg";
import toStartButton from "../../Assets/images/previous.png";

interface AudioControlsProps {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  onPrevClick: () => void;
}

// play button not appearing for some reason in firefox

export default function AudioControls({
  isPlaying,
  setIsPlaying,
  onPrevClick,
}: AudioControlsProps) {
  return (
    <div className="grid grid-cols-3 w-2/3 mx-auto">
      <button type="button">
        <img
          src={toStartButton}
          alt="back-to-start-button"
          className="w-[60%] h-[60%]"
          onClick={onPrevClick}
        />
      </button>
      {isPlaying && (
        <div className="p-1 flex">
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            className="m-auto"
          >
            <img
              src={pauseButton}
              alt="pause-button"
              className="w-full h-full"
            />
          </button>
        </div>
      )}
      {!isPlaying && (
        <div className="p-1 flex">
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="m-auto"
          >
            <img
              src={require("./play.svg")}
              alt="play-button"
              className="w-full h-full"
            />
          </button>
        </div>
      )}
    </div>
  );
}
