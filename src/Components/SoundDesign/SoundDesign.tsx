import React, {FC} from "react";
import './SoundDesign.scss'

const SoundDesign: FC = () => {
    return (
        <div className="sound-design section">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UgGg66IpR3U" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    );
};

export default SoundDesign;