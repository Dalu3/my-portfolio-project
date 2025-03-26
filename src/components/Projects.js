import React from 'react';
import ProjectsCard from './ProjectsCard'; 
import FaFolder from '../icons/Folder.png'; 
import FaGithub from '../icons/Github.png'; 

const Projects = () => {
  const projectData = [
    {
      title: 'Private Doctor Website',
      description:
        'A modern, easy-to-use website built for a private doctor to provide patients with a professional online experience. Although the website is in Ukrainian, you’re welcome to explore the link to see the layout, structure, and overall design in action.',
      technologies: ['HTML/CSS', 'JavaScript', 'React'],
      folderIcon: FaFolder,
      githubIcon: FaGithub,
      githubLink: 'https://github.com/Dalu3/ponomarenko-doctor.git',
    },
    {
      title: 'Amazon Clone',
      description:
        'A clone of the famous Amazon website which allows you to browse products, add them to your basket and place an order with an interface close to the official website.',
      technologies: ['HTML/CSS', 'JavaScript'],
      folderIcon: FaFolder, 
      githubIcon: FaGithub, 
      githubLink: 'https://github.com/Dalu3/javascript--amazon--project.git', 
    },
    {
      title: 'YouTube Clone',
      description:
        'A clone of the YouTube website with a layout similar to the official site, allowing users to explore video content and interact with a familiar interface.',
      technologies: ['HTML/CSS'],
      folderIcon: FaFolder,
      githubIcon: FaGithub,
      githubLink: 'https://github.com/Dalu3/YouTube-clone.git',
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
            githubIcon={project.githubIcon}
            githubLink={project.githubLink} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
