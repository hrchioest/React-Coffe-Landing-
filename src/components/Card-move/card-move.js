import React from 'react';
import './card-move.scss';


const CardMove= props =>{

    return (
        <div className={ props.type }>
            <section className="wrapper-card" 
                style={
                    { backgroundImage:`url(${props.backgraundImg})`}} >
                <div className ="Wrapper-text">
                    <h2 className="title">{props.title}</h2>
                    <h3 className="subtitle">{props.subTitle}</h3>
                    <a href="#" >{props.link}</a>
                </div>
            </section>
        </div>
    );  
}

export default CardMove;
