import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";

interface AudioPlayerProps {
  title: string;
  audioSrc: string;
  image: string;
}

export default function AudioPlayer({
  title,
  audioSrc,
  image,
}: AudioPlayerProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const toStart = () => {
    console.log("TODO go to prev");
  };

  const { duration } = audioRef.current;

  return (
    <div className="w-56 h-56 flex rounded-lg bg-green-900/30">
      <div className="m-auto flex flex-col w-[90%] h-[90%] shadow shadow-even-outer shadow-green-600/50 rounded-lg bg-green-900">
        <div className="flex flex-col mx-auto mt-2">
          <img
            src={image}
            alt={`track artwork for ${title}`}
            className="rounded-full block h-28 w-28"
          />
          <h2 className="text-center font-bold text-green-600">{title}</h2>
        </div>
        <AudioControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          toStart={toStart}
        />
      </div>
    </div>
  );
}
