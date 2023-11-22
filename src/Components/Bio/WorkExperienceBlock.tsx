import React, { ReactNode } from "react";

interface WorkExperienceBlockProps {
  link: string;
  companyClassName: string;
  jobTitle: string;
  company: string;
  description: ReactNode;
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
    <a href={link} target="_blank" rel="noreferrer" className="w-fit">
      <div className="text-white bg-green-900/30 gap-5 w-full max-w-[540px] rounded-2xl p-3 group hover:bg-green-900/50 transition-all duration-100">
        <p className="text-white/80 text-base whitespace-nowrap group-hover:text-white transition-all duration-100">
          {workTimePeriod}
        </p>
        <div className="flex justify-between">
          <p className="text-xl">
            <span className={companyClassName}>{company}</span> - {jobTitle}
          </p>
          <p className="text-white/80 group-hover:text-white mr-2 group-hover:mr-0 transition-all duration-100">
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
