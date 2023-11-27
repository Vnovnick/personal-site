import React from "react";
import image from "./bioImageComp.jpg";
import { Link } from "react-router-dom";
import SkillPill from "./SkillPill";
import WorkExperienceBlock from "./WorkExperienceBlock";
import { bioSkills } from "./BioDefinitions";

export default function Bio() {
  return (
    <div className="h-full m-auto w-full max-w-[1440px] py-5 px-2" id="bio">
      <img
        src={image}
        alt="profile"
        className="h-auto min-w-[200px] max-w-[25%] float-right mx-5 rounded-lg"
        id="bio-image"
      />
      {/* <p className="text-white font-sans ml-5 text-lg md:text-xl">
        I am a Junior Frontend Developer at Proppex from Northern California. As
        a{" "}
        <Link to="/work" id="work-link">
          <span className="text-green-200 hover:text-green-300">
            Frontend Developer
          </span>
        </Link>
        , I use technologies such as React, TypeScript, JavaScript, Tailwind,
        Jest, Enzyme, JSX, HTML, CSS, Git, and Figma daily. I also have practice
        with tools and technologies such as SCSS, Bootstrap, Express, and REST
        APIs from personal projects.
        <br></br>
        <br></br>Before becoming a software developer, I was a violinist and
        received a Bachelor of Music (BM) degree in{" "}
        <Link to="/performance-videos" id="perf-videos-link">
          <span className="text-green-200 hover:text-green-300">
            Violin Performance
          </span>
        </Link>{" "}
        from the IU Jacobs&apos; School of Music, as well as finished a year
        towards a Master's in Music at UNT. As an avid chamber musician, I have
        been part of the Center Trio at UNT and have attended festivals such as
        the NAC Zukerman Young Artists&apos; Program and Keshet Eilon. I have
        also served as a substitute violinist for multiple orchestras in
        Indiana. I have studied with Grigory Kalinovsky at the Jacobs&apos;
        School of Music and with Julia Bushkova at UNT. I have briefly studied
        with or been coached by Pinchas Zukerman, Rosa Fain, Phillip Setzer,
        Nicholas Mann, and many others. Additionally, I have had master classes
        with the Dover Quartet and Seth Knopp.
        <br></br>
        <br></br>As a hobby, I have worked on a variety of different{" "}
        <Link to="/sound-design" id="sound-design-link">
          <span className="text-green-200 hover:text-green-300">
            sound design
          </span>
        </Link>{" "}
        projects. These range from small scale linear re-designs to most
        recently a short film for Datalus Pictures where I was one of the main
        sound designers/dialogue mixers on the project. I have also composed
        multiple MIDI based{" "}
        <Link to="/sound-design" id="sound-design-link">
          <span className="text-green-200 hover:text-green-300">music</span>
        </Link>{" "}
        projects, which use a mix of live samples and a variety of plugins.{" "}
        <br></br>
        <br></br>
        <a
          className="text-green-200 hover:text-green-300"
          href="https://drive.google.com/file/d/1SFLxL2B9wNtQq56UctmMKEGAvC60fL26/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </p> */}
      <p className="text-white text-lg md:text-xl">
        I&apos;m a Software Developer with a passion for creating elegant and
        effective applications. Coming from an artistic background, I believe in
        the importance of creative solutions, organization, and high attention
        to detail. These are qualities that I apply to any project I work on and
        aim to constantly improve upon with every line of code I write.
        <br />
        <br />
        Before becoming a software developer, I was a violinist and received a
        Bachelor of Music (BM) degree in{" "}
        <Link to="/performance-videos" id="perf-videos-link">
          <span className="text-green-200 hover:text-green-300">
            Violin Performance
          </span>
        </Link>{" "}
        from the IU Jacobs&apos; School of Music, as well as finished a year
        towards a Master's in Music at UNT.
      </p>
      <div className="mt-10">
        <div className="flex items-center">
          <p className="text-white text-2xl">Experience</p>
          <div className="grow bg-white h-[1px] mx-4" />
        </div>
        <div className="flex flex-col gap-y-2">
          <WorkExperienceBlock
            jobTitle="Junior Frontend Developer"
            link="https://www.proppex.com/"
            companyClassName="text-cyan-200"
            company="Proppex"
            description={
              <>
                <p>
                  Create new features for product MVP and beta testing and lead
                  frontend development efforts across the entire application
                </p>
                <p>
                  Accelerate sprint goal completion through peer mentoring by
                  20%
                </p>
              </>
            }
            workTimePeriod="March 2023 - Present"
          />
          <WorkExperienceBlock
            jobTitle="Frontend Development Intern"
            link="https://www.proppex.com/"
            companyClassName="text-cyan-200"
            company="Proppex"
            description="Collaborate to iterate over existing features and build new components for the company's preliminary design library."
            workTimePeriod="Sept 2022 - March 2023"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center">
          <p className="text-white text-2xl">Skills</p>
          <div className="grow bg-white h-[1px] mx-4" />
        </div>
        <div className="flex flex-wrap gap-1 w-full max-w-[600px]">
          {bioSkills.map((skill) => (
            <SkillPill text={skill} />
          ))}
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1SFLxL2B9wNtQq56UctmMKEGAvC60fL26/view?usp=sharing"
        target="_blank"
      >
        <div className="text-white/80 hover:text-white text-lg mt-10 py-3 px-6 bg-green-900/30 group hover:bg-green-900/50 rounded-2xl transition-all duration-100 w-fit">
          My Resume{" "}
          <span className="pl-0 group-hover:pl-2 transition-all duration-100">
            {">"}
            {">"}
          </span>
        </div>
      </a>
    </div>
  );
}
