import React from 'react';
import CardsBackgrounds from '../../components/Card-imgs/Card-imgs';
import AlfajorImg from './alfajor-coffee-item1.jpg';
import CoffeeCup from './coffee-cup-item2.jpg';
import CoffeeGrans from './coffee-granos-item1.jpg';

const imgs = [
    {
        ImgCard:AlfajorImg
    },
    {
        ImgCard:CoffeeCup
    },
    {
        ImgCard:CoffeeGrans
    }
]

const CardsImgs = () => {
    return(
        <div className="content-items">
            {imgs.map(img => {
                return (
                    <CardsBackgrounds ImgCard ={img.ImgCard}></CardsBackgrounds>
                );
            })};
        </div>
    );

}

export default CardsImgs;