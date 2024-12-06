import React from 'react';

const ServicesCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
};

export default ServicesCard;
