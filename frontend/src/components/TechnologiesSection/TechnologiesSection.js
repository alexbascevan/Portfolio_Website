import React from 'react';
import './TechnologiesSection.css';

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="technologies">
      <h1 style={{ color: '#00f9e3' }}>Technologies</h1>
      <div className="technologies-table">
        <div className="column">
          <h3>Languages</h3>
          <ul>
            <li><i className="fab fa-html5"></i> HTML</li>
            <li><i className="fab fa-css3-alt"></i> CSS</li>
            <li><i className="fab fa-js"></i> JavaScript</li>
            <li><i className="fab fa-ts"></i> TypeScript</li>
            <li><i className="fab fa-java"></i> Java</li>
            <li><i className="fab fa-python"></i> Python</li>
            <li><i className="fas fa-code"></i> C</li>
            <li><i className="fas fa-code"></i> C#</li>
            <li><i className="fas fa-code"></i> C++</li>
            <li><i className="fas fa-database"></i> SQL</li>
          </ul>
        </div>
        <div className="column">
          <h3>Frameworks</h3>
          <ul>
            <li><i className="fab fa-java"></i> Spring</li>
            <li><i className="fab fa-microsoft"></i> .NET</li>
            <li><i className="fab fa-react"></i> React</li>
            <li><i className="fab fa-angular"></i> Angular</li>
            <li><i className="fas fa-cogs"></i> Hadoop</li>
          </ul>
        </div>
        <div className="column">
          <h3>Tools</h3>
          <ul>
            <li><i className="fab fa-vscode"></i> VSCode</li>
            <li><i className="fab fa-git"></i> Git</li>
            <li><i className="fab fa-docker"></i> Docker</li>
            <li><i className="fas fa-terminal"></i> Unix</li>
            <li><i className="fas fa-database"></i> SQL Developer</li>
            <li><i className="fab fa-linux"></i> Kali Linux</li>
          </ul>
        </div>
      </div>
  </section>

  );
};

export default TechnologiesSection;
