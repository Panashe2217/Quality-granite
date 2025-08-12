import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">Quality Granite</div>
          <p className="footer-tagline">Crafting timeless stone masterpieces since 2015</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-links">
          <h3>Contact Us</h3>
          <ul>
            <li>26 Smart Road Athlone</li>
            <li>Gweru City,ZW</li>
            <li>Phone: +263 77 684 8616||+263 713 066 1113</li>
            <li>Email: qualitygranite@gmai.com</li>
          </ul>
        </div>

        {/* Hours Column */}
        <div className="footer-links">
          <h3>Working Hours</h3>
          <ul>
            <li>Monday-Friday: 8AM - 5PM</li>
            <li>Saturday: 9AM - 2PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Quality Granite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;