import React, {FC} from 'react';
import './SiteContent.scss';
import Bio from '../Bio/Bio';

const SiteContent: FC = () => {
    return(
        <div className='site-content'>
            SiteContent
            <Bio/>
        </div>
    );
};

export default SiteContent;