import React from 'react';
import CardMove from '../../components/Card-move/card-move';
import CoffeeImg from './coffee-img.jpg';
import './Hero.scss';




const Hero = () =>{
    return (
        <CardMove 
            type="hero" 
            backgraundImgHero={CoffeeImg}
            titleHero="Portwell, Inc." 
            subTitleHero="Serving only best since 2019"
        />            
    )   
}

export default Hero;    