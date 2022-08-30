import React, {FC} from "react";
import './Portfolio.scss';
import runvid from './RunTracker.mp4';
import chainLink from './chainLink.png';

const Portfolio: FC = () => {
    return (
        <div className="portfolio block lg:grid">
            <div className="port-1 lg:col-start-1">
                <video autoPlay muted loop>
                    <source src={runvid} type='video/mp4'></source>
                </video>                    
            </div>
            <div className="port-1-desc block lg:col-start-2">
                <div className="port-1-head">
                    <h3>Run Tracker</h3>
                    <a href="https://vnovnick.github.io/run-tracker-ns/" target='_blank'>
                        <img className='chain-link' src={chainLink} alt='link' width='17px' height='17px'></img>
                    </a>
                </div>                
                <div className="details">
                    <p>This project was born out of my own curiousity to see my Spotify song activity during my runs. 
                        Since I use Strava to track runs, I created the project to work with the user data available from both the Spotify and Strava APIs. 
                        Once extracted, the application takes the user's 50 most recently played songs (50 being the maximum amount set by the API), checks to see if any of the song object played_at values fall within the time frames of the runs, and displays the corresponding song and run data together in one "post." 
                        The page displays the user's last 10 runs.
                    </p>
                    <p>(See <a href="https://github.com/Vnovnick/run-tracker-ns" target='_blank'>link</a> for Gihub Repo and README)</p>
                </div>
            </div>
        </div>
    );

};

export default Portfolio;