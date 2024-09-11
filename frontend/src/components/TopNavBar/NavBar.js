import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/resume.pdf'; // Path to your PDF file
    link.download = 'resume.pdf'; // Filename for the downloaded file
    link.click(); // Trigger the download
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection('intro')} className="nav-button">
        <span style={{ color: '#00f9e3' }}>01. </span>Intro
      </button>
      <button onClick={() => scrollToSection('background')} className="nav-button">
        <span style={{ color: '#00f9e3' }}>02. </span>About Me
      </button>
      <button onClick={() => scrollToSection('projects')} className="nav-button">
        <span style={{ color: '#00f9e3' }}>03. </span>Projects
      </button>
      <button onClick={() => scrollToSection('technologies')} className="nav-button">
        <span style={{ color: '#00f9e3' }}>04. </span>Technologies
      </button>
      <button onClick={() => scrollToSection('contact')} className="nav-button">
        <span style={{ color: '#00f9e3' }}>05. </span>Contact
      </button>
      <button onClick={handleResumeDownload} className="resume-button">
        <span style={{ color: '#00f9e3' }}>Resume</span>
      </button>
    </nav>
  );
};

export default NavBar;
