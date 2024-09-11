// src/components/MyBackgroundSection.js
import React from 'react';
import './MyBackgroundSection.css'; // Create this CSS file to style this component

const MyBackgroundSection = () => {
  return (
    <section id="background" class="section myBackground">
    <div>
        <h1>My Background</h1>
        <h2>Education:</h2>
        <p>Details about your education...</p>
        <h2>Technologies</h2>
    </div>
</section>
  );
};

export default MyBackgroundSection;
