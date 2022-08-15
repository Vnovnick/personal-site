import React, {FC} from 'react';
import './Bio.scss';
import image from './bioImage.jpg';

const Bio: FC = () => {
    return(
        <div className='bio'>        
            <img src={image} className='float-right' id='bio-image'></img>
            <p className ='text-white'>
            I am a freelance sound designer and violinist from Northern California. 
            As a sound designer, I have experience working on a variety of different sound design projects in ProTools. 
            These range from small scale linear re-designs to most recently a short film for Datalus Pictures where I was one of the main sound designers/dialogue mixers on the project. 
            I have also composed multiple MIDI based music projects, both with and without custom synth patches. <br></br><br></br>
            As a musician, I strive to produce thoughtful performances that engage the listener and remove the notion of complexity that is often attached to classical music. 
            As an avid chamber musician, I have been part of the Center Trio at UNT and have attended festivals such as the NAC Zukerman Young Artists’ Program and Keshet Eilon. 
            I have also served as a substitute violinist for multiple orchestras in Indiana.<br></br><br></br>
            I hold a Bachelor of Music (BM) degree from the IU Jacobs’ School of Music and am currently working on my Master of Music (MM) degree at the University of North Texas College of Music. 
            I have studied with Grigory Kalinovsky at the Jacobs’ School of Music and am studying under Julia Bushkova at UNT.
             I have worked with or been coached by Pinchas Zukerman, Rosa Fain, Phillip Setzer, Nicholas Mann, and many others. 
             Additionally, Nicholas I have had master classes with the Dover Quartet and Seth Knopp. 
            </p>
            
            
        </div>
    );
};

export default Bio;