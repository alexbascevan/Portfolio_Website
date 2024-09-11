// src/App.js
import React from 'react';
import './App.css';
import ScrollNav from './components/ScrollNav/ScrollNav';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import IntroSection from './components/IntroSection/IntroSection';
import MyBackgroundSection from './components/MyBackgroundSection/MyBackgroundSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection';
import NavBar from './components/TopNavBar/NavBar';
import RightLinkBar from './components/RightLinkBar/RightLinkBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <RightLinkBar />
      <ScrollNav />
      <IntroSection />
      <MyBackgroundSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
