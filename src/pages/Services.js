import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'tombstones',
      title: 'Memorial Tombstones',
      description: 'Custom-crafted granite memorials honoring your loved ones',
      path: '/services/tombstones'
    },
    {
      id: 'countertops',
      title: 'Kitchen Countertops',
      description: 'Premium stone surfaces for your culinary space',
      path: '/services/countertops'
    },
 // ... existing services ...
  {
    id: 'tables',
    title: 'Granite Tables',
    description: 'Custom stone furniture pieces',
    path: '/services/tables'
  },
  {
    id: 'fireplaces',
    title: 'Fireplace Surrounds',
    description: 'Luxury hearth installations',
    path: '/services/fireplaces'
  }
];


  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={service.path} className="learn-more-btn">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;