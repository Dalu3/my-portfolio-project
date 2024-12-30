import React from 'react';
import ProjectsCard from './ProjectsCard'; 
import FaFolder from '../icons/Folder.png'; 
import FaGithub from '../icons/Github.png'; 

const Projects = () => {
  const projectData = [
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
    {
      title: 'Other Projects',
      description:
        'I’ve built a variety of projects, some examples include Quizzical app, Tenses Game, Meme/Jokes Generator, To-do List, Coin Flip Game, Rock-Paper-Scissors game, and many more. Check out my GitHub to explore the code behind these projects.',
      technologies: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React'],
      folderIcon: FaFolder,
      githubIcon: FaGithub,
      githubLink: 'https://github.com/Dalu3?tab=repositories',
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
