import React from 'react';

const ProjectsCard = ({ title, description, technologies, folderIcon, githubIcon, githubLink, liveLink }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
      <span className="folder-icon">
          {liveLink ? (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <img src={folderIcon} alt="Website Icon" className="website-icon" style={{ width: '30px', height: '30px', cursor: 'pointer', transition: 'transform 0.3s ease, filter 0.3s ease',}} />
            </a>
          ) : (
            <img src={folderIcon} alt="Folder Icon" style={{ width: '35px', height: '35px' }} />
          )}
          </span>
        <span className="github-icon">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub Icon" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
          </a>
        </span>
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

export default ProjectsCard;
