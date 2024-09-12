import React from 'react';
import './RightLinkBar.css';

const RightLinkBar = () => {
  return (
    <div className="right-link-bar">
      <a
        href="https://www.linkedin.com/in/alex-bascevan-2697752b7/"
        target="_blank"
        rel="noopener noreferrer"
        title="Connect with me on LinkedIn"
        className="link-icon"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/alexbascevan"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub"
        className="link-icon"
      >
        <i className="fab fa-github"></i>
      </a>
      
    </div>
  );
};

export default RightLinkBar;
