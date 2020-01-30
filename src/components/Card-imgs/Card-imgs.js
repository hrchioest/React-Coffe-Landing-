import React from 'react';
import './Card-threeImgs.scss';

const CardsBackgrounds = props => {

    return (
        <div className="content-imgs">
            <div className="content-img">
                <img src={props.ImgCard}></img>
            </div>
        
        </div>
    );
}

export default CardsBackgrounds;