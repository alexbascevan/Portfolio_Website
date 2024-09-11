import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="section intro">
        <div className="intro-content">
            <p className="hi" >Hi, my name is</p>
            <h1 className="name">Alex Bascevan</h1>
            <h3 className="title">Software Engineer | Cybersecurity Enthusiast</h3>
            <p className="summary">
              I’m a <span style={{ color: '#00f9e3' }}>Software Engineer </span>
              based in the Greater Toronto Area, specializing in creating exceptional digital 
              experiences. With a keen interest in cybersecurity, I am dedicated to building robust, secure solutions 
              that meet the highest standards.
            </p>
            <br/>
            <button className="contact-button" onClick={scrollToContact}>Get In Touch</button>
        </div>
        <div className="intro-image-wrapper">
            <img src="/images/headshot.png" alt="Headshot of Alex Bascevan" className="intro-image" />
        </div>
    </section>
  );
};

export default IntroSection;
