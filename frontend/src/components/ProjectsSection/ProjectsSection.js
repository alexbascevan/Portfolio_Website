import React from 'react';
import './ProjectsSection.css';

const projects = [
  { title: 'Project 1', blurb: 'A short description of Project 1' },
  { title: 'Project 2', blurb: 'A short description of Project 2' },
  { title: 'Project 3', blurb: 'A short description of Project 3' },
  { title: 'Project 4', blurb: 'A short description of Project 4' },
  { title: 'Project 5', blurb: 'A short description of Project 5' },
  { title: 'Project 6', blurb: 'A short description of Project 6' },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section projects">
      <div>
        <h1>Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={`https://via.placeholder.com/300x200?text=Project+${index+1}`} alt={`Project ${index+1}`} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-blurb">{project.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
