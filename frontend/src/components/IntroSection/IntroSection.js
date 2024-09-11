// src/components/IntroSection.js
import React from 'react';
import './IntroSection.css'; // Create this CSS file to style this component

const IntroSection = () => {
  return (
    <section id="intro" className="section intro">
        <div className="intro-content">
            <h1>Welcome to Alex Bascevan's Portfolio</h1>
            <p>Hello! I'm Alex Bascevan, a passionate software developer with a focus on creating innovative and efficient solutions. I specialize in web development and enjoy working on projects that challenge me and allow me to grow as a developer.</p>
            <p>Explore my portfolio to see some of the projects I've worked on, and feel free to get in touch if you'd like to collaborate or learn more about my work.</p>
        </div>
        <div className="intro-image-wrapper">
            <img src="/images/headshot.png" alt="Headshot of Alex Bascevan" className="intro-image" />
        </div>
    </section>
  );
};

export default IntroSection;
