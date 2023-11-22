import React from "react";
import SkillPill from "./SkillPill";

interface WorkExperienceBlockProps {
  link: string;
  companyClassName: string;
  jobTitle: string;
  company: string;
  description: string;
  workTimePeriod: string;
}

export default function WorkExperienceBlock({
  link,
  companyClassName,
  jobTitle,
  company,
  description,
  workTimePeriod,
}: WorkExperienceBlockProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="text-white bg-green-900/30 gap-5 w-full max-w-[540px] rounded-2xl p-3 group hover:bg-green-900/50 transition-all duration-100">
        <p className="text-white/80 text-base whitespace-nowrap group-hover:text-white transition-all duration-100">
          {workTimePeriod}
        </p>
        <div className="flex justify-between">
          <p className="text-xl">
            <span className={companyClassName}>{company}</span> - {jobTitle}
          </p>
          <p className="text-green-100 opacity-0 group-hover:opacity-100 transition-all duration-100">
            {">"}
            {">"}
          </p>
        </div>
        <p className="text-white/80 text-base group-hover:text-white transition-all duration-100">
          {description}
        </p>
      </div>
    </a>
  );
}
