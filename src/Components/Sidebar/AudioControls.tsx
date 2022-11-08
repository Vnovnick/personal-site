import React, { Dispatch, SetStateAction } from "react";
import playButton from "../../Assets/images/play.svg";
import pauseButton from "../../Assets/images/pause.svg";
import toStartButton from "../../Assets/images/previous.png";

interface AudioControlsProps {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
  onPrevClick: () => void;
}

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
          className="w-7 h-7"
          onClick={onPrevClick}
        />
      </button>
      {isPlaying ? (
        <div className="p-1 flex">
          <button
            type="button"
            onClick={() => setIsPlaying(false)}
            className="m-auto"
          >
            <img src={pauseButton} alt="pause-button" className="w-9 h-9" />
          </button>
        </div>
      ) : (
        <div className="p-1 flex">
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="m-auto"
          >
            <img src={playButton} alt="play-button" className="w-9 h-9" />
          </button>
        </div>
      )}
    </div>
  );
}
