import React from 'react';
import './MyBackgroundSection.css';

const MyBackgroundSection = () => {
  return (
    <section id="background" className="myBackground">
      <div className="container">
        <h1 style={{ color: '#00f9e3' }}>My Background</h1>
        
        <h2 style={{ color: '#00f9e3' }}>Education</h2>
        <p>
          I am currently in my final year of an Associate’s Degree in Software Development and Network Engineering at Sheridan College. The program offers a challenging curriculum with instruction in leading-edge computer systems technologies including Cloud, Big Data, Spring Boot, Full-Stack Web Development, Android Kotlin, iOS Swift, and Unity.
          <br /><br />
          Sheridan's program also emphasizes practical skills with a capstone project and opportunities for further studies, including bachelor's degrees and university transfers.
        </p>
        
        <h2 style={{ color: '#00f9e3' }}>Certifications</h2>
        <p>
          I have completed several professional certificates, including:
          <ul>
            <li>Google Careers Professional Certificate in Cybersecurity</li>
            <li>Docker Foundations Professional Certificate</li>
            <li>GitHub Career Essentials Professional Certificate</li>
          </ul>
          My academic journey and certifications have provided me with a solid foundation in software development and cybersecurity, preparing me for various technical roles and challenges.
        </p>
      </div>
    </section>
  );
};

export default MyBackgroundSection;
