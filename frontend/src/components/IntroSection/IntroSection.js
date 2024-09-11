// src/components/IntroSection.js
import React from 'react';
import './IntroSection.css'; // Create this CSS file to style this component

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="intro-image-wrapper">
        <img src="path-to-your-image.jpg" alt="Intro" className="intro-image" />
      </div>
    </section>
  );
};

export default IntroSection;
