import React, { ReactNode } from "react";

interface PerfVideoCompProps {
  src: string;
  description: ReactNode;
  left?: boolean;
  right?: boolean;
  divClassName?: string;
  id?: string;
  link: string;
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
  link,
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
          <a
            className="text-white flex w-fit items-center mx-auto text-xl lg:text-2xl text-center bg-green-900/30 hover:bg-green-900/50 transition-all duration-100 p-5 rounded-xl"
            href={link}
            target="_blank"
          >
            {description}
          </a>
        </>
      )}
      {right && (
        <>
          <a
            className="text-white flex w-fit items-center mx-auto text-xl lg:text-2xl text-center bg-green-900/30 hover:bg-green-900/50 transition-all duration-100 p-5 rounded-xl"
            href={link}
            target="_blank"
          >
            {description}
          </a>
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
