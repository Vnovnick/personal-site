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

  const startTimer = () => {
    clearInterval(intervalRef.current);
    // @ts-ignore
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false);
        audioRef.current.currentTime = 0;
        setTrackProgress(audioRef.current.currentTime);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
      // @ts-ignore
    }, [1000]);
  };

  const onPrevClick = () => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = 0;
    setTrackProgress(audioRef.current.currentTime);
  };
  const onScrub = (value: any) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying, trackProgress]);

  useEffect(() => {
    const audioCurrent = audioRef.current;
    return () => {
      audioCurrent.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const { duration } = audioRef.current;
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #080705), color-stop(${currentPercentage}, #848884))
`;

  return (
    <div
      className={`w-56 h-56 flex rounded-lg bg-gradient-to-t from-green-900/30 to-green-700 mx-auto transition-[background] duration-500 bg-[length:100px_400px] ${
        isPlaying && "bg-right"
      }`}
    >
      <div
        className={`m-auto flex flex-col w-[90%] h-[90%] shadow shadow-even-outer rounded-lg bg-gradient-to-t from-green-900/50 to-green-700 bg-[length:100px_500px] transition-[background] duration-500 bg-bottom ${
          isPlaying && "bg-top"
        }`}
      >
        <div className="flex flex-col mx-auto mt-2">
          <img
            src={image}
            alt={`track artwork for ${title}`}
            className="rounded-full block h-28 w-28 shadow-even-outer mx-auto"
          />
          <h2 className="text-center font-bold text-white/80">{title}</h2>
        </div>
        <AudioControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onPrevClick={onPrevClick}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="h-1 w-44 mb-3 rounded-sm bg-green-200 appearance-none transition-[background] duration-200 cursor-pointer mx-auto"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
      </div>
    </div>
  );
}
