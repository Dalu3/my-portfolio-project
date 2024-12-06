import React from 'react';

const ProjectCard = ({ title, description, technologies, folderIcon, githubIcon }) => {
  return (
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
  );
};

export default ProjectCard;
