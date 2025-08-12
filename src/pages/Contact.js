// pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Replace with actual API call
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          {submitted && (
            <div className="success-message">
              Thank you! We'll contact you within 24 hours.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Interested In</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="tombstones">Memorial Tombstones</option>
              <option value="countertops">Kitchen Countertops</option>
              <option value="tables">Granite Tables</option>
              <option value="fireplaces">Fireplace Surrounds</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Inquiry
          </button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Phone:</strong> +263 77 684 8616||+263 713 066 113</p>
          <p><strong>Email:</strong>qualitygranite@gmail.com</p>
          <p><strong>Address:</strong> 26 Smart Road Athlone,Gweru City</p>
          
          <div className="business-hours">
            <h4>Business Hours</h4>
            <p>Monday-Friday: 8AM - 5PM</p>
            <p>Saturday: 9AM - 2PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;