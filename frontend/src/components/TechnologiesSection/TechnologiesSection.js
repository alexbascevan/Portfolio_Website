// src/components/TechnologiesSection.js
import React from 'react';
import './TechnologiesSection.css'; // Create this CSS file to style this component

const TechnologiesSection = () => {
  return (
    <section id="technologies" class="section technologies">
    <div>
        <h1>Technologies</h1>
        <p>Here are some of the technologies I work with:</p>
        <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Thymeleaf</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Docker</li>
        </ul>
    </div>
</section>
  );
};

export default TechnologiesSection;
