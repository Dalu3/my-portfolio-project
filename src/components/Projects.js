import React from 'react';
import ProjectsCard from './ProjectsCard'; 
import FaFolder from '../icons/Folder.png'; 
import FaGithub from '../icons/Github.png';
import WebsiteIcon from '../icons/Website.png';  

const Projects = () => {
  const projectData = [
     {
      title: 'Dashly Studio',
      description:
        'Official website for web development studio, designed to present services, convert visitors into clients and making it effortless for clients to get in touch.',
      technologies: ['HTML/CSS', 'JavaScript',  'React', 'Vite'],
      folderIcon: WebsiteIcon, 
      liveLink: 'https://dashly.studio/',
    },
    {
      title: 'Private Doctor Website',
      description:
        'A modern, user-friendly website for a private doctor, offering patients a professional online experience. The site is in Ukrainian but open for exploring its layout and design.',
      technologies: ['HTML/CSS', 'JavaScript', 'React'],
      folderIcon: WebsiteIcon,
      liveLink: 'https://anastasiiaponomarenko.com',
    },
    {
      title: 'Portfolio Web',
      description:
        'A personal portfolio website built to present skills, showcase projects, and provide a clean, user-friendly way for potential clients or employers to get in touch.',
      technologies: ['HTML/CSS', 'JavaScript',  'React'],
      folderIcon: WebsiteIcon,
      liveLink: 'https://darialysunets.com',
    },
  ];

  return (
    <div className="about-section">
      <h2 className="section-title">My Noteworthy Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            folderIcon={project.folderIcon}
            liveLink={project.liveLink} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
