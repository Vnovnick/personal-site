import React, { ReactNode } from "react";
import SkillPill from "../Bio/SkillPill";

interface ProjectInfoDisplayProps {
  gif: string;
  gifAlt: string;
  gifClassName: string;
  link: string;
  containerClassName: string;
  titleClassName: string;
  descriptionFields: {
    duration: string;
    title: string;
    description: ReactNode;
    skills: string[];
  };
  skillPillClassName: string;
  descriptionClassName: string;
  gifbgClassName: string;
}

export default function ProjectInfoDisplay({
  gif,
  gifAlt,
  gifClassName,
  link,
  containerClassName,
  descriptionFields,
  skillPillClassName,
  descriptionClassName,
  gifbgClassName,
  titleClassName,
}: ProjectInfoDisplayProps) {
  return (
    <div
      className={`flex flex-col xl:flex-row w-fit xl:w-full justify-between mx-auto rounded-lg gap-5 items-center p-5 transition-all duration-100 ${containerClassName}`}
    >
      <a
        className="grid h-[350px] w-[330px] md:w-[560px] group"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={`col-start-1 row-start-1 w-[320px] h-[270px] md:w-[540px] md:h-[325px] rounded-xl duration-100 transition-all ${gifbgClassName}`}
        />
        <img
          src={gif}
          className={`rounded-xl w-[320px] h-[270px] md:w-[540px] md:h-[325px] object-scale-down mx-auto col-start-1 row-start-1 mt-5 md:ml-5 group-hover:mt-8 md:group-hover:ml-8 shadow-[0_5px_15px_5px] shadow-black/40 duration-100 transition-all ${gifClassName}`}
          alt={gifAlt}
          loading="lazy"
        />
      </a>
      <a
        className={`w-full max-w-[600px] xl:w-1/2 p-4 group h-[325px] duration-100 transition-all rounded-xl overflow-auto ${descriptionClassName}`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <p className="text-white text-lg">{descriptionFields.duration}</p>
          <div className="flex text-white items-center mb-3 justify-between">
            <p className={`mr-2 text-2xl ${titleClassName}`}>
              {descriptionFields.title}
            </p>
            <p className="text-white/80 group-hover:text-white mr-2 group-hover:mr-0 transition-all duration-100">
              {">"}
              {">"}
            </p>
          </div>
        </div>
        <p className="text-white text-lg">{descriptionFields.description}</p>
        <div className="flex flex-wrap gap-1 w-full mt-2">
          {descriptionFields.skills.map((skill) => (
            <SkillPill text={skill} colorClasses={skillPillClassName} />
          ))}
        </div>
      </a>
    </div>
  );
}
