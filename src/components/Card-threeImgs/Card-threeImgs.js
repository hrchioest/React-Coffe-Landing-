import React from 'react';
import './Card-threeImgs.scss';

const CardThreeImgs = props => {

    return (
        <div className="content-imgs">
            <a className="content-img">
                <img src={props.ImgCard}></img>
            </a>
        
        </div>
    );
}

export default CardThreeImgs;