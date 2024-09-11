// src/components/ScrollNav/ScrollNav.js
import React, { useEffect } from 'react';
import './ScrollNav.css'; // Ensure this file contains the relevant styles

const ScrollNav = () => {
  useEffect(() => {
    const diamonds = document.querySelectorAll('.nav-diamond');
    const sections = document.querySelectorAll('section');

    const updateDiamonds = () => {
      let index = sections.length;
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      diamonds.forEach((diamond, i) => {
        if (i === index) {
          diamond.classList.add('active');
        } else {
          diamond.classList.remove('active');
        }
      });
    };

    updateDiamonds();
    window.addEventListener('scroll', updateDiamonds);

    diamonds.forEach(diamond => {
      diamond.addEventListener('click', () => {
        document.getElementById(diamond.getAttribute('data-target')).scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', updateDiamonds);
      diamonds.forEach(diamond => {
        diamond.removeEventListener('click', () => {
          document.getElementById(diamond.getAttribute('data-target')).scrollIntoView({ behavior: 'smooth' });
        });
      });
    };
  }, []);

  return (
    <div className="nav-container">
      <div className="nav-diamond" data-target="section1"></div>
      <div className="nav-diamond" data-target="section2"></div>
      <div className="nav-diamond" data-target="section3"></div>
      {/* Add more diamonds as needed */}
    </div>
  );
};

export default ScrollNav;
