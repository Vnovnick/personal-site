import React, {FC} from 'react';
import './SiteContent.scss';
import Bio from '../Bio/Bio';
import Portfolio from '../Portfolio/Portfolio';
import PerformanceVideos from '../PerformanceVideos/PerformanceVideos';
import SoundDesign from '../SoundDesign/SoundDesign';

const SiteContent: FC = () => {
    return(
        <div className='site-content'>
            SiteContent
            <Bio/>
            <Portfolio/>
            <PerformanceVideos/>
            <SoundDesign/>
        </div>
    );
};

export default SiteContent;