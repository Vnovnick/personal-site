import React, { ReactElement } from "react";

interface PerfVideoCompProps {
  src: string;
  description: ReactElement | JSX.Element;
  left?: boolean;
  right?: boolean;
  divClassName?: string;
  id?: string;
}

const defaultProps = {
  left: false,
  right: false,
  divClassName: "",
  id: "",
};

export default function PerfVideoComp({
  src,
  description,
  left,
  right,
  divClassName,
  id,
}: PerfVideoCompProps) {
  return (
    <div
      id={id}
      className={`flex items-center flex-col lg:flex-row h-[450px] my-3 mr-2 ${divClassName}`}
    >
      {left && (
        <>
          <iframe
            className="embed-vid w-full h-[75%] lg:h-full lg:w-1/2"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          {description}
        </>
      )}
      {right && (
        <>
          {description}
          <iframe
            className="embed-vid w-full h-[75%] lg:h-full lg:w-1/2"
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
