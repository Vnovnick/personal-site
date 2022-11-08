import React, { Dispatch, SetStateAction } from "react";
import playButton from "../../Assets/images/play.svg";
import pauseButton from "../../Assets/images/pause.svg";
import toStartButton from "../../Assets/images/previous.png";

interface AudioControlsProps {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  toStart: () => void;
}

export default function AudioControls({
  isPlaying,
  setIsPlaying,
  toStart,
}: AudioControlsProps) {
  return (
    <div className="flex">
      <button type="button">
        <img src={toStartButton} alt="back-to-start-button" />
      </button>
      {isPlaying ? (
        <button type="button" onClick={() => setIsPlaying(false)}>
          <img src={pauseButton} alt="pause-button" className="w-9 h-9" />
        </button>
      ) : (
        <button type="button" onClick={() => setIsPlaying(true)}>
          <img src={playButton} alt="play-button" className="w-9 h-9" />
        </button>
      )}
    </div>
  );
}
