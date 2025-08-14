import React from "react";

const experienceData = [
  {
    title: "Public Relations Manager",
    company: "ProNGO!",
    location: "Remote",
    date: "JUN 2025 – PRESENT",
  },
  {
    title: "Student Ambassador (Registration Support)",
    company: "University of Aberdeen",
    location: "Aberdeen, Scotland, UK",
    date: "JAN 2025 – PRESENT",
  },
  {
    title: "Office Administrator & Social Media Assistant",
    company: "JOR Property ltd",
    location: "Aberdeen, Scotland, UK",
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
    location: "Aberdeen, Scotland, UK",
    date: "OCT 2022 – MAR 2023",
  },
  {
    title: "Administrative Assistant",
    company: "Egalite International",
    location: "Remote",
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
              <p className="job-type">{exp.jobType}</p>
            </div>
            <div className="timeline-date">{exp.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
