import React from 'react';
import Cards from '../../components/Cards/Cards';
import Img1 from './img-1.jpeg';
import Img2 from './img-2.jpeg';
import Img3 from './img-3.jpeg';
import './Latest.scss';

const cards = [
    {
        background:Img1,
        title:"THE GREAT OUTDOORS",
    },
    {
        background:Img2,
        title:"SHARED MEMORIES",
    },
    {
        background:Img3,
        title:"THE LOOKOUT",
    }

]

const Latest = props =>{
    return(
    <div className="wrappers-total">
        <div className="wrapper-texts">
            <h2>LATEST FROM BLOG</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
        </div>
        <div className="wrapper-cards">
            {cards.map(card =>{
                return (
                    <Cards key={card.title}
                        background={card.background} 
                        title={card.title}
                        subTitle="Sep 27, 2017"
                        paragraph="Augue interdum velit euismod in pellentesque massa. Amet nisl suscipit adipiscing bibendum est ultricies integer. In aliquam sem fringilla ut. Velit scelerisque in dictum non consectetur a erat. Tortor posuere ac ut consequat semper viverra nam. Commodo viverra maecenas accumsan lacus vel facilisis. Tristique senectus et netus et malesuada fames ac turpis egestas.">
                    </Cards>
                );
            })};
            
        </div>
        <footer>
            <p>BROWSE MENU</p>
        </footer>
    </div>
       
                
    ); 
}

export default Latest;