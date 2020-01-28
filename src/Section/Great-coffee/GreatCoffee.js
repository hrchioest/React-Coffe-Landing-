import React from 'react';
import CardMove from '../../components/Card-move/card-move';
import CoffeeCup from './font-white-coffee.jpg';
import  './GreatCoffee.scss';




const GreatCoffee = () =>{
    return (
        <CardMove 
            type="GreatCoffee" 
            backgraundImg={CoffeeCup} 
            title="GREAT COFFEE" 
            subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            link="LEARN MORE"
        />            
    )   
}

export default GreatCoffee; 