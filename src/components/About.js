import React from "react";
import photo from "../images/photo.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I’m Daria, a front-end web developer based in Aberdeen, UK. I focus on building websites that are visually clean, fast, and easy to use, with careful attention to structure, performance, and user experience.
          </p>
          <p>
            I help businesses and personal brands create modern websites that are responsive, accessible, and built to support long-term growth.
          </p>
          <p className="about-tech-intro">Here are a few technologies I’ve been working with recently:</p>
          <div className="about-technologies">
            <ul className="about-technologies-column">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>Vite</li>
            </ul>
            <ul className="about-technologies-column">
              <li>TypeScript</li>
              <li>React</li>
              <li>Git/GitHub</li>
            </ul>
            <ul className="about-technologies-column">
              <li>REST APIs</li>
              <li>Responsive Design</li>
              <li>Headless CMS (Strapi)</li>
            </ul>
          </div>
        </div>
        <div className="about-image">
          <a
            href="https://www.linkedin.com/in/daria-lysunets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={photo} alt="Portrait of Daria Lysunets, front-end web developer" />
          </a>
        </div>
      </div>
    </section>
  );
}
