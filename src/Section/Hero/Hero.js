import React from 'react';
import CardMove from '../../components/Card-move/card-move';
import CoffeeImg from './coffee-img.jpg';
import './Hero.scss';




const Hero = () =>{
    return (
        <CardMove 
            type="hero" 
            backgraundImg={CoffeeImg}
            title="Portwell, Inc." 
            subTitle="Serving only best since 2019"
            link="Explore"
        />            
    )   
}

export default Hero;    