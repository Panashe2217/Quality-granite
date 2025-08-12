// components/GlassCard.js
import React from 'react';
import './GlassCard.css';

const GlassCard = ({ title, description, btnText }) => {
  return (
    <div className="glass-card">
      <div className="image-placeholder"></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="card-btn">{btnText}</button>
      </div>
    </div>
  );
};

export default GlassCard;