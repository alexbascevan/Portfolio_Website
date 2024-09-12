import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/resume.pdf'; // Path to your PDF file
    link.download = 'Alex_Bascevan_Resume.pdf'; // Filename for the downloaded file
    link.click(); // Trigger the download
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
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
      </div>
    </nav>
  );
};

export default NavBar;
