import React from 'react';
import './App.css';
import HomeCoffe from './Section/Nav/HomeCoffe';
import Hero from './Section/Hero/Hero';
import KindCoffee from './Section/KindCoffee/KindCoffee';
import backgroundKindCoffe from './Icons/coffee_backg.jpg';
import StoryCoffee from './Section/StoryCoffee/StoryCoffee';


const App = () => {
  return (
    <div >
      <HomeCoffe />
      <Hero />
      <KindCoffee backgroundImg={backgroundKindCoffe} />
      <StoryCoffee />

    </div>
  );
}

export default App;
