import React from 'react';
import './Card-kinds.scss';


const CardKinds = props => {
    return (
        <div className ="kindCoffee">
            <div className="Content-img">
                <img className="img" src={props.img} alt="img"></img>
            </div>
            <div className="content-kids">
                <h1>{props.title}</h1>
                <p>{props.paragraph}</p>
            </div>  
        </div>
    )
}

export default CardKinds;
