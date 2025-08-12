import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const Fireplaces = () => {
  return (
    <div className="service-detail">
      <h1>Granite Fireplace Surrounds</h1>
      
      <div className="detail-content">
        <div className="description">
          <h2>Statement Hearth Designs</h2>
          <p>
            Elevate your living space with our custom granite fireplace mantels 
            and surrounds, combining timeless elegance with heat-resistant durability.
          </p>
          
          <div className="features">
            <h3>Design Options:</h3>
            <ul>
              <li>Traditional mantel shelves</li>
              <li>Modern floating surrounds</li>
              <li>Full floor-to-ceiling cladding</li>
              <li>Integrated log storage</li>
              <li>Custom carving available</li>
            </ul>

            <h3>Technical Specifications:</h3>
            <div className="specs">
              <p><strong>Heat Resistance:</strong> Up to 1200°F</p>
              <p><strong>Standard Thickness:</strong> 2cm or 3cm</p>
              <p><strong>Finish Options:</strong> Polished, honed, flamed</p>
            </div>

            <h3>Popular Stone Choices:</h3>
            <div className="stone-options">
              <span>Absolute Black</span>
              <span>Bianco Antico</span>
              <span>Blue Pearl</span>
              <span>Santa Cecilia</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Free On-Site Measuring</h3>
          <p>
            Our specialists will visit your home to ensure perfect fitment.
          </p>
          <Link to="/contact" className="cta-button">
            Schedule Measurement
          </Link>
          
          <div className="certification-badge">
            <p>✔ NFPA Compliant</p>
            <p>✔ 10-Year Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fireplaces;