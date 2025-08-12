import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const Tables = () => {
  return (
    <div className="service-detail">
      <h1>Granite Tables & Surfaces</h1>
      
      <div className="detail-content">
        <div className="description">
          <h2>Functional Stone Artistry</h2>
          <p>
            Our handcrafted granite tables blend natural beauty with rugged durability, 
            creating centerpiece furniture that withstands generations of use.
          </p>
          
          <div className="features">
            <h3>Table Types:</h3>
            <ul>
              <li>Dining tables (indoor/outdoor)</li>
              <li>Conference tables</li>
              <li>Custom coffee tables</li>
              <li>Garden pedestals</li>
              <li>Bar tops</li>
            </ul>

            <h3>Base Material Options:</h3>
            <div className="materials-grid">
              <span>Wrought iron</span>
              <span>Solid wood</span>
              <span>Steel frames</span>
              <span>Stone pedestals</span>
            </div>

            <h3>Standard Dimensions:</h3>
            <div className="specs">
              <p><strong>Round Tables:</strong> 36" to 72" diameter</p>
              <p><strong>Rectangular:</strong> Up to 96" length</p>
              <p><strong>Thickness:</strong> 1¼" or 2" standard</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Custom Design Service</h3>
          <p>
            We'll create CAD renderings of your custom table before fabrication.
          </p>
          <Link to="/contact" className="cta-button">
            Design Consultation
          </Link>
          
          <div className="certification-badge">
            <p>✔ 6-8 Week Turnaround</p>
            <p>✔ Free Local Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;