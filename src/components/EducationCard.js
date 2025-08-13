import React from "react";

const EducationCard = ({ school, degree, period, location, icon }) => {
  return (
    <div className="education-card">
      <div className="education-card-header">
      </div>
      <span className="education-card-period">{period}</span>
      <h3 className="education-card-title">{school}</h3>
      <p className="education-card-degree">{degree}</p>
      <div className="education-card-details">
        <span className="education-card-location">{location}</span>
      </div>
    </div>
  );
};

export default EducationCard;
