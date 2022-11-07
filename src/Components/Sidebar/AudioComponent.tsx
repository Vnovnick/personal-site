import React from "react";

interface AudioComponentProps {
  title: string;
  src: string;
}

export default function AudioComponent({ title, src }: AudioComponentProps) {
  return (
    <div className="mx-auto w-5/6">
      <p className="text-green-400">{title}</p>
      <audio src={src} controls className="mb-2 w-full" />
    </div>
  );
}
