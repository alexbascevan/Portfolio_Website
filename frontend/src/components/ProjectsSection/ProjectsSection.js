// src/components/ProjectsSection.js
import React from 'react';
import './ProjectsSection.css'; // Create this CSS file to style this component

const ProjectsSection = () => {
  return (
    <section id="projects" class="section projects">
      <div>
        <h2>Projects</h2>
        <p class="projects-description">Check out my projects on GitHub:</p>
        <a href="https://github.com/alexbascevan" target="_blank" class="github-link">
          <i class="fab fa-github"></i> GitHub
        </a>
      </div>
    </section>       
  );
};

export default ProjectsSection;
