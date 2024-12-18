import React from "react";
import photo from "../images/photo.jpg";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I am Daria and I love creating and designing user-friendly websites. I am now dedicated to improving my skills in modern web development frameworks such as React. My main goal is to develop high-quality websites and provide users with a positive experience.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="technologies">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
        </div>
        <div className="about-image">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={photo} alt="Daria Lysunets" />
          </a>
        </div>
      </div>
    </section>
  );
}
