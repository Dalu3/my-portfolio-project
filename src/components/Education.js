// src/components/Education.jsx (or education.js)
import React from "react";
import EducationCard from "./EducationCard";

const educationData = [
  {
     school: "Alfred Nobel University",
    degree: "Philology",
    period: "2020–2024",
    location: "Dnipro, Ukraine",
  },
  {
    school: "North East College",
    degree: "ESOL English course",
    period: "2023",
    location: "Aberdeen, Scotland, UK",
  },
  {
     school: "University of Aberdeen",
    degree: "Business Management & International Relations",
    period: "2023–2027",
    location: "Aberdeen, Scotland, UK",
  },
];

export default function Education() {
  return (
    <section id="education" className="about-section">
      <h2 className="section-title">Education</h2>

      <div className="edu-container">
        {educationData.map((edu) => (
          <EducationCard
            key={`${edu.school}-${edu.period}`}
            period={edu.period}
            school={edu.school}
            degree={edu.degree}
            location={edu.location}
          />
        ))}
      </div>
    </section>
  );
}
