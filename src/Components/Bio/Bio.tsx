import React, {FC} from 'react';
import './Bio.scss';
import image from './bioImage.jpg';

const Bio: FC = () => {
    return(
        <div className='bio'>
            <h4>Bio</h4>
            <img src={image} id='bio-image'></img>
        </div>
    );
};

export default Bio;