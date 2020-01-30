import React from 'react';
import './App.css';
import HomeCoffe from './Section/Nav/HomeCoffe';
import Hero from './Section/Hero/Hero';
import KindCoffee from './Section/KindCoffee/KindCoffee';
import backgroundKindCoffe from './Icons/coffee_backg.jpg';
import StoryCoffee from './Section/StoryCoffee/StoryCoffee';
import FreshBeans from './Section/Fresh-beans/Fresh-beans';
import GreatCoffee from './Section/Great-coffee/GreatCoffee';
import CoffeeShop from './Section/CoffeeShop/CoffeeShop';
import CardsImgs from './Section/ThreeImgs/ThreeImgs';
import Latest from './Section/Latest/Latest';


const App = () => {
  return (
    <div >
      <HomeCoffe />
      <Hero />
      <KindCoffee backgroundImg={backgroundKindCoffe} />
      <StoryCoffee />
      <FreshBeans />
      <GreatCoffee />
      <CoffeeShop />
      <CardsImgs />
      <Latest />

    </div>
  );
}

export default App;
