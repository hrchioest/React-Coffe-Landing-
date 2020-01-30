import React from 'react';
import './Cards.scss';

const Cards= props =>{

    return (
        <div className="wrapper-principal">
            <div className="wrapper-img" style={{backgroundImage:`url(${props.background})`}}>
            </div>
                <div className="wrapper-text">
                    <h2>{props.title}</h2>
                    <h3>{props.subtitle}</h3>
                    <p>{props.paragraph}</p>
                </div>
               
        </div>
    );  
}



export default Cards;