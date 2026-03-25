import React from "react";
import photo from "../images/photo.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I’m Daria, a front-end web developer. I focus on building websites that are not only visually clean but also clear, fast, and easy to use. I pay close attention to structure, performance, and user experience, making sure every detail works together. I enjoy turning ideas into real, working products that deliver value.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="technologies">
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>Vite</li>
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
            href="https://www.linkedin.com/in/daria-lysunets/"
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
