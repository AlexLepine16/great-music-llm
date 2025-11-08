import React from 'react';
import './App.css'; 
import Banner from './images/banner.jpg';

function Hero() {
  return (
    <section className="hero" 
    style={{ 
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
     }}>
      <h1 style={{ padding: '8px' }}>Great Music LLM</h1>
      <h2 style={{ padding: '7px', fontSize: '30px' }}>Where Excellence Meets Harmony</h2>
    </section>
  );
}

export default Hero;
