import React from 'react';

const ProjectCard = ({ title, description, technologies, folderIcon, githubIcon, githubLink }) => {
  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
      <div className="project-card">
        <div className="project-card-header">
          <span className="folder-icon">{folderIcon}</span>
          <span className="github-icon">{githubIcon}</span>
        </div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <div className="project-card-technologies">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
