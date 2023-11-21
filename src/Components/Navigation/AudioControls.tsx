import React, { Dispatch, SetStateAction } from "react";
import playButton from "./playButton.svg";
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
    <div className="flex mx-auto">
      <button type="button">
        <img
          src={toStartButton}
          alt="back-to-start-button"
          className="w-5 h-5"
          onClick={onPrevClick}
        />
      </button>
      {isPlaying && (
        <button
          type="button"
          onClick={() => setIsPlaying(false)}
          className="m-auto p-1"
        >
          <img src={pauseButton} alt="pause-button" className="w-8 h-8" />
        </button>
      )}
      {!isPlaying && (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="m-auto p-1 flex"
        >
          <img src={playButton} alt="play-button" className="w-8 h-8" />
        </button>
      )}
      <div className="w-5 h-5" />
    </div>
  );
}
