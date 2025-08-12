import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Quality Granite(Private)Limited</h1>
        <p className="hero-subtitle">Handcrafted granite works since 2015</p>
        <a href="/contact" className="cta-button">Get a Free Quote</a>
      </div>
    </section>
  );
};

export default Hero;