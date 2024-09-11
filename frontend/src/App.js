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

const App = () => {
  return (
    <div>
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
