import React from 'react';

const ProjectsCard = ({ title, description, technologies, folderIcon, githubIcon, githubLink, liveLink }) => {
  const cardContent = (
    <div className="project-card">
      <div className="project-card-header">
        <span className="folder-icon">
          <img
            src={folderIcon}
            alt={liveLink ? "Website Icon" : "Folder Icon"}
            className={liveLink ? "website-icon" : ""}
            style={{
              width: liveLink ? '30px' : '35px',
              height: liveLink ? '30px' : '35px',
              cursor: liveLink ? 'pointer' : 'default',
              transition: liveLink ? 'transform 0.3s ease, filter 0.3s ease' : 'none',
            }}
          />
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

  if (liveLink) {
    return (
      <a
        className="project-card-link"
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    cardContent
  );
};

export default ProjectsCard;
