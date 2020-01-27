import React from 'react';
import './card-move.scss';


const CardMove= props =>{

    return (
        <div className={ props.type }>
            <section 
                className="wrapper-card" 
                style={
                    { backgroundImage:`url(${props.backgraundImgHero})`}} >
                <div className ="Wrapper-text">
                    <h1 className="title">{props.titleHero}</h1>
                    <h2 className="subTitle">{props.subTitleHero}</h2>
                </div> 
            </section>
        </div>
    );  
}

export default CardMove;
