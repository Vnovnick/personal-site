import React, {FC} from "react";
import './PerformanceVideos.scss'

const PerformanceVideos: FC = () => {
    return (
        <div className="performance-videos block lg:grid" id='performance-videos'>
            <div className="vid-1">
                <iframe className='embed-vid w-full col-span-2' src="https://www.youtube.com/embed/Z3sLFa3FkmI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <p className="text-white lg:col-start-3">Bach Sonata No. 2 in A minor - Grave</p>
            <div className="vid-2">
                <iframe className='embed-vid w-full col-span-2' src="https://www.youtube.com/embed/qP12tqO3ZdM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="vid-3">
                <iframe className='embed-vid w-full col-span-2' src="https://www.youtube.com/embed/vPrTJeND3-k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </div>
    );

};

export default PerformanceVideos;