import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'; // Reusing the same CSS file

const Countertops = () => {
  return (
    <div className="service-detail">
      <h1>Granite Kitchen Countertops</h1>
      
      <div className="detail-content">
        <div className="description">
          <h2>Premium Stone Surfaces</h2>
          <p>
            Transform your kitchen with our hand-selected granite countertops. 
            Each slab is uniquely patterned, offering durability and natural beauty 
            that lasts a lifetime.
          </p>
          
          <div className="features">
            <h3>Available Options:</h3>
            <ul>
              <li>Classic polished granite</li>
              <li>Leathered/honed finishes</li>
              <li>Custom edge profiles</li>
              <li>Integrated sink cutouts</li>
              <li>Seamless installation</li>
            </ul>

            <h3>Standard Measurements:</h3>
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Thickness</th>
                  <th>Standard Depth</th>
                  <th>Max Length</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2cm (¾")</td>
                  <td>25"</td>
                  <td>120"</td>
                </tr>
                <tr>
                  <td>3cm (1¼")</td>
                  <td>25"</td>
                  <td>144"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="cta-section">
          <h3>Get a Free Estimate</h3>
          <p>
            Bring your measurements or plans for a customized quote.
          </p>
          <Link to="/contact" className="cta-button">
            Request Consultation
          </Link>
          
          <div className="certification-badge">
            <p>✔ NKBA Certified Installers</p>
            <p>✔ 15-Year Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countertops;