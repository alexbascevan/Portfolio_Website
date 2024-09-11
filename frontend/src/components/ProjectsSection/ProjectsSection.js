// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css'; // Create this CSS file to style this component

const ProjectsSection = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <p className="projects-description">Here are some of my projects.</p>
      <a href="https://github.com/your-profile" className="github-link">
        <i className="fab fa-github"></i> View on GitHub
      </a>
    </section>
  );
};

export default ProjectsSection;
