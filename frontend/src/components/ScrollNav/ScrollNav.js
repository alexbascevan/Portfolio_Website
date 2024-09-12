import React, { useEffect } from 'react';
import './ScrollNav.css';

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
    <div class="nav-container">
      <div class="nav-diamond" data-target="intro"></div>
      <div class="nav-diamond" data-target="background"></div>
      <div class="nav-diamond" data-target="technologies"></div>
      <div class="nav-diamond" data-target="projects"></div>
      <div class="nav-diamond" data-target="contact"></div>
    </div>
  );
};

export default ScrollNav;
