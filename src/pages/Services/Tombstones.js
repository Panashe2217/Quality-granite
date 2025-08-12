import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const Tombstones = () => {
  return (
    <div className="service-detail">
      <h1>Memorial Tombstones</h1>
      
      <div className="detail-content">
        <div className="description">
          <h2>Honoring Legacies in Stone</h2>
          <p>
            Our master craftsmen create timeless granite memorials that stand as 
            enduring tributes. Each piece is custom-designed to reflect the 
            unique life it commemorates.
          </p>
          
          <div className="features">
            <h3>Available Options:</h3>
            <ul>
              <li>Classic upright monuments</li>
              <li>Flat markers</li>
              <li>Custom shapes and designs</li>
              <li>Laser etching available</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h3>Ready to discuss your memorial?</h3>
          <Link to="/contact" className="cta-button">
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tombstones;