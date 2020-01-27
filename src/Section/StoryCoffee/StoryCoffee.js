import React from 'react';
import CardMove from '../../components/Card-move/card-move';
import CoffeeCup from './coffee-cup.jpg';
import './StoryCoffee.scss';




const StoryCoffee = () =>{
    return (
        <CardMove className="story" 
            backgraundImgHero={CoffeeCup} 
            titleHero="OUR STORY" 
            subTitleHero="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
        />            
    )   
}

export default StoryCoffee;    