// src/components/NavBar.js
import React from 'react';
import './NavBar.css'; // Create this CSS file for styling

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection('intro')} className="nav-button">Intro</button>
      <button onClick={() => scrollToSection('background')} className="nav-button">About Me</button>
      <button onClick={() => scrollToSection('projects')} className="nav-button">Projects</button>
      <button onClick={() => scrollToSection('technologies')} className="nav-button">Technologies</button>
      <button onClick={() => scrollToSection('contact')} className="nav-button">Contact</button>
    </nav>
  );
};

export default NavBar;
