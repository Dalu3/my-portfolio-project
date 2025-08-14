import React from "react";

const experienceData = [
  {
    title: "Public Relations Manager",
    company: "ProNGO!",
    location: "Remote - Contract",
    date: "JUN 2025 – PRESENT",
  },
  {
    title: "Student Ambassador (Registration Support)",
    company: "University of Aberdeen",
    location: "Aberdeen, Scotland, UK - Part-time",
    date: "JAN 2025 – PRESENT",
  },
  {
    title: "Office Administrator & Social Media Assistant",
    company: "JOR Property ltd",
    location: "Aberdeen, Scotland, UK - On-site",
    date: "MAR 2024 – SEP 2024",
  },
  {
    title: "Web Developer",
    company: "Freelance",
    location: "Remote",
    date: "JAN 2023 – PRESENT",
  },
  {
    title: "Personal Assistant",
    company: "Barwell Enterprises",
    location: "Aberdeen, Scotland, UK - On-site",
    date: "OCT 2022 – MAR 2023",
  },
  {
    title: "Administrative Assistant",
    company: "Egalite International",
    location: "Dnipro, Ukraine - Remote",
    date: "AUG 2022 – DEC 2022",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="about-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-location">{exp.location}</p>
            </div>
            <div className="timeline-date">{exp.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
