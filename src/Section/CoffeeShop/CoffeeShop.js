import React from 'react';
import CardMove from '../../components/Card-move/card-move';
import CoffeeShopImg from './coffeeShop.jpg';
import  './CoffeeShop.scss';




const CoffeeShop = () =>{
    return (
        <CardMove 
            type="coffeeShop" 
            backgraundImg={CoffeeShopImg} 
            title="THE BEST COFFEE SHOP" 
            subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, omnis iste natus error sit voluptatem accusantium doloremque, totam rem aperiam, voluptatem accusantium doloremque."
            link="ABOUT US"
        />            
    )   
}

export default CoffeeShop; 