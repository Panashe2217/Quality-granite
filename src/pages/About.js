import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Stonecraft Legacy</h1>
          <p>A generation of granite mastery</p>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <h2>From Humble Beginnings</h2>
            <p>
              Founded in 2015 by Jane Kundidzora, Quality Granite began 
              as a small workshop crafting headstones for local families. Today, we've grown into a regional leader 
              in premium stone fabrication while maintaining our artisanal approach.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <h3>2015</h3>
                <p>Small workshop opens in downtown Harare City</p>
              </div>
              <div className="timeline-item">
                <h3>2018</h3>
                <p>Expanded to commercial stone fabrication</p>
              </div>
              <div className="timeline-item">
                <h3>2020</h3>
                <p>Current 15,000 sq ft facility completed</p>
              </div>
            </div>
          </div>
          <div className="founder-quote">
            <blockquote>
              "Stone chooses its artisan as much as we choose the stone."
            </blockquote>
            <p>- Antonio Rodriguez</p>
          </div>
        </div>
      </section>

{/* Team Section */}
<section className="team-section">
  <h2>Meet Our Master Craftsmen</h2>
  <div className="team-grid">
    <div className="team-card">
      <div className="team-photo-placeholder"></div>
      <h3>Jane Kundidzora</h3>
      <p className="position">CEO & Lead Designer</p>
      <p className="bio">10 years stoneworking experience</p>
    </div>

    <div className="team-card">
      <div className="team-photo-placeholder"></div>
      <h3>Knowledge Kundidzora</h3>
      <p className="position">CEO</p>
      <p className="bio">10 years stoneworking experience</p>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Discuss Your Project?</h2>
        <Link to="/contact" className="cta-button">
          Get a Free Consultation
        </Link>
      </section>
    </div>
  );
};

export default About;