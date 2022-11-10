import React from "react";

interface PerfVideoCompProps {
  src: string;
  description: string;
  left?: boolean;
  right?: boolean;
  divClassName?: string;
}

const defaultProps = {
  left: false,
  right: false,
  divClassName: "",
};

export default function PerfVideoComp({
  src,
  description,
  left,
  right,
  divClassName,
}: PerfVideoCompProps) {
  return (
    <div className={`flex h-[450px] my-3 mr-2 ${divClassName}`}>
      {left && (
        <>
          <iframe
            className="embed-vid w-1/2"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <p className="text-white m-auto text-2xl">{description}</p>
        </>
      )}
      {right && (
        <>
          <p className="text-white m-auto text-2xl">{description}</p>
          <iframe
            className="embed-vid w-1/2"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </>
      )}
    </div>
  );
}

PerfVideoComp.defaultProps = defaultProps;
