import React from 'react';

const projectData = [
  {
    title: "Project 1",
    description: "This project showcases an innovative approach to solving real-world problems.",
    tools: "React, Node.js, MongoDB",
    githubLink: "https://github.com/yourusername/project1",
    image: "/icons/Project1.jpeg",
  },
  {
    title: "E-Commerce Application (BAZAAR)",
    description: "A highly scalable and efficient application built using modern technologies.",
    tools: "Spring Boot, Java, MySQL",
    githubLink: "https://github.com/yourusername/project2",
    image: "path_to_project2_icon",
  },
  {
    title: "Project 3",
    description: "A sleek and intuitive web application with a focus on user experience.",
    tools: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/yourusername/project3",
    image: "path_to_project3_icon",
  },
  {
    title: "Project 4",
    description: "An advanced project leveraging AI for predictive analysis.",
    tools: "Python, Flask, PostgreSQL",
    githubLink: "https://github.com/yourusername/project4",
    image: "path_to_project4_icon",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2 className="heading">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={`${project.title} Icon`} className="project-icon" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-tools">
              <b>Tools:</b> {project.tools}
            </p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-button"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
