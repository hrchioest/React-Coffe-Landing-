import React from 'react';
import CardKinds from '../../components/Card-kinds/card-kinds';
import CoffeeImg1 from './coffee_item_1.png';
import CoffeeImg2 from './coffee_item_2.png';
import CoffeeImg3 from './coffee_item_3.png';
import './KindCoffee.scss'


const coffeeItems = [
    {
        img:CoffeeImg1,
        title:'MOCHA LATTE',
        paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
        img:CoffeeImg2,
        title:'POUR OVER',
        paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
        img:CoffeeImg3,
        title:'ESPRESSO',
        paragraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    }
];

const kindCoffee = props=> {
    return (
    <div className="content-principal" style={{
        backgroundImage:`url(${props.backgroundImg})`}}>
        <div className="content-text">
            <h2>WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
        </div>
        <div className="content-items">
            {coffeeItems.map(coffeeItem => {
                return (
                    <CardKinds key={coffeeItem.title}
                        img={coffeeItem.img} 
                        title={coffeeItem.title} 
                        paragraph={coffeeItem.paragraph}>
                    </CardKinds>
                );
            })};
        </div>
    </div>  
    );  
}

export default kindCoffee;