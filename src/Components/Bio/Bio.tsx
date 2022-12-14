import React from "react";
import image from "./bioImage.jpg";
import { Link } from "react-router-dom";

export default function Bio() {
  return (
    <div className="block mx-[15px] h-5/6 my-auto" id="bio">
      <img
        src={image}
        alt="profile"
        className="h-auto min-w-[200px] max-w-[25%] float-right mx-5 rounded-lg"
        id="bio-image"
      />
      <p className="text-white font-sans ml-5 text-lg">
        I am a Frontend Development Intern at Proppex and former violinist from
        Northern California. As a{" "}
        <Link to="/work" id="work-link">
          <span className="text-green-200 hover:text-green-300">
            Frontend Developer
          </span>
        </Link>
        , I use technologies such as React, TypeScript, JavaScript, Tailwind,
        Jest, Enzyme, JSX, HTML, CSS, Git, and Figma daily. I also have practice
        with tools and technologies such as SCSS, Bootstrap, and REST APIs from
        personal projects.
        <br></br>
        <br></br>I hold a Bachelor of Music (BM) degree in{" "}
        <Link to="/performance-videos" id="perf-videos-link">
          <span className="text-green-200 hover:text-green-300">
            Violin Performance
          </span>
        </Link>{" "}
        from the IU Jacobs&apos; School of Music and am currently working on my
        Master of Music (MM) degree at the University of North Texas College of
        Music. As an avid chamber musician, I have been part of the Center Trio
        at UNT and have attended festivals such as the NAC Zukerman Young
        Artists&apos; Program and Keshet Eilon. I have also served as a
        substitute violinist for multiple orchestras in Indiana. I have studied
        with Grigory Kalinovsky at the Jacobs&apos; School of Music and with
        Julia Bushkova at UNT. I have briefly studied with or been coached by
        Pinchas Zukerman, Rosa Fain, Phillip Setzer, Nicholas Mann, and many
        others. Additionally, I have had master classes with the Dover Quartet
        and Seth Knopp.
        <br></br>
        <br></br>As a hobby, I have worked on a variety of different{" "}
        <Link to="/sound-design" id="sound-design-link">
          <span className="text-green-200 hover:text-green-300">
            sound design
          </span>
        </Link>{" "}
        projects in ProTools. These range from small scale linear re-designs to
        most recently a short film for Datalus Pictures where I was one of the
        main sound designers/dialogue mixers on the project. I have also
        composed multiple MIDI based{" "}
        <Link to="/sound-design" id="sound-design-link">
          <span className="text-green-200 hover:text-green-300">music</span>
        </Link>{" "}
        projects, which use a mix of live samples and a variety of plugins.{" "}
        <br></br>
        <br></br>
        <a
          className="text-green-200 hover:text-green-300"
          href="https://drive.google.com/file/d/1TeD28kkEYqRii4MuZkhA1SCO634hWmSd/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </p>
    </div>
  );
}
