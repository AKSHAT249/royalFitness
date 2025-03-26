import React from 'react';
import Hero from './Hero';
import Services from './Services';
import DemoClass from './DemoClass';
import Plans from './Plans';

const Home = () => {
  return (
    <div className="bg-black h-full">
        <Hero />
        <Services />
        <DemoClass />
        <Plans />
    </div>
  )
}

export default Home;