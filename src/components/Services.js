import React from 'react';
import ServicesCard from './ServicesCard'; 

const Services = () => {
  const serviceData = [
    {
      title: 'Meeting',
      description:
        'You just send me a message, and we find the perfect time to talk about your idea and your vision for the project.',
    },
    {
      title: 'Discussion',
      description:
        'We will analyse your requirements and preferences to ensure that we create an effective website that reflects your unique style and needs.',
    },
    {
      title: 'Plan & Draft',
      description:
        'I’ll create a clear plan and initial draft for your website, including layout ideas and features, for your feedback and approval.',
    },
    {
      title: 'Implementation',
      description:
        'Once the plan is set, I’ll get to work building your website with modern, clean, and functional code.',
    },
    {
      title: 'Testing and Review',
      description:
        'We’ll test the website to ensure it’s responsive, user-friendly, and meets all your expectations.',
    },
    {
      title: 'Launch and Support',
      description:
        'I’ll help you launch your website and provide ongoing support to ensure everything runs smoothly.',
    },
  ];

  return (
    <div className="about-section">
      <h2 className="section-title">Services</h2>
      <div className="services-container">
        {serviceData.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
