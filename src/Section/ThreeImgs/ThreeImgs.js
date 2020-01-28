import React from 'react';
import CardThreeImgs from '../../components/Card-threeImgs/Card-threeImgs';
import AlfajorImg from './alfajor-coffee-item1.jpg';
import CoffeeCup from './coffee-cup-item2.jpg';
import CoffeeGrans from './coffee-granos-item1.jpg';

const imgs = [
    {
        imgs:AlfajorImg
    },
    {
        img:CoffeeCup
    },
    {
        img:CoffeeGrans
    }
]

const ThreeImgs = () => {
    return(
        <div className="content-items">
            {imgs.map(img => {
                return (
                    <CardThreeImgs ImgCard ={img.ImgCard}></CardThreeImgs>
                );
            })};

        </div>
    );

}

export default ThreeImgs;