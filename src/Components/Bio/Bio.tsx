import React from "react";
// import "./Bio.scss";
import image from "./bioImage.jpg";

export default function Bio() {
  return (
    <div className="block mx-[15px] h-5/6 my-auto" id="bio">
      <img
        src={image}
        alt="profile"
        className="h-auto min-w-[150px] max-w-[20%] float-right"
        id="bio-image"
      />
      <p className="text-white font-sans">
        I am a Frontend Developer Intern and former violinist from Northern
        California. I hold a Bachelor of Music (BM) degree from the IU Jacobs’
        School of Music and am currently working on my Master of Music (MM)
        degree at the University of North Texas College of Music. Having started
        out learning Python, my study of programming has since mainly been
        focused around front-end languages and technologies such as JavaScript,
        HTML, CSS, SCSS, React, Bootstrap, APIs, and more recently Typescript
        and Tailwind CSS for this website.
        <br></br>
        <br></br>
        As an avid chamber musician, I have been part of the Center Trio at UNT
        and have attended festivals such as the NAC Zukerman Young Artists’
        Program and Keshet Eilon. I have also served as a substitute violinist
        for multiple orchestras in Indiana. I have studied with Grigory
        Kalinovsky at the Jacobs’ School of Music and am studying under Julia
        Bushkova at UNT. I have worked with or been coached by Pinchas Zukerman,
        Rosa Fain, Phillip Setzer, Nicholas Mann, and many others. Additionally,
        I have had master classes with the Dover Quartet and Seth Knopp.
        <br></br>
        <br></br>I also have experience working on a variety of different sound
        design projects in ProTools. These range from small scale linear
        re-designs to most recently a short film for Datalus Pictures where I
        was one of the main sound designers/dialogue mixers on the project. I
        have also composed multiple MIDI based music projects, both with and
        without custom synth patches. <br></br>
        <br></br>
      </p>
    </div>
  );
}
