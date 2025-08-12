// src/pages/Home.js
import React from 'react';
import GlassCard from '../components/GlassCard';
import Hero from '../components/Hero/Hero';
import './Home.css';

const Home = () => {
  const services = [
    { 
      title: "Memorial Tombstones", 
      description: "Custom-crafted granite memorials honoring loved ones", 
      btnText: "View Designs →" 
    },
    { 
      title: "Kitchen Countertops", 
      description: "Premium stone surfaces for your culinary space", 
      btnText: "Explore Options →" 
    },
    { 
      title: "Granite Tables", 
      description: "Handcrafted stone furniture pieces", 
      btnText: "See Gallery →" 
    }
  ];

  return (
    <div className="home-page">
      {/* Modern Hero Section */}
      <Hero />

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Signature Works</h2>
          <p className="section-subtitle">Crafting timeless stone masterpieces</p>
          <div className="glass-cards-container">
            {services.map((service, index) => (
              <GlassCard 
                key={index}
                title={service.title}
                description={service.description}
                btnText={service.btnText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-teaser">
        <div className="container">
          <h2 className="section-title">Family-Owned Stone Masters</h2>
          <p className="section-subtitle">A generation of granite expertise since 2015</p>
          <div className="cta-wrapper">
            <a href="/about" className="cta-button">Our Story</a>
            <a href="/contact" className="cta-button secondary">Get a Quote</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;