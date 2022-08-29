import React, {FC} from "react";
import './Portfolio.scss';
import runvid from './RunTracker.mp4';

const Portfolio: FC = () => {
    return (
        <div className="portfolio block lg:grid">
            Portfolio
            <div className="port-1">
                <video src={runvid}></video>
            </div>
        </div>
    );

};

export default Portfolio;