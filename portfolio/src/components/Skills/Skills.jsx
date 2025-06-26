import React from 'react';
import './Skills.css';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaGitAlt, FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <ul className="skills-list">
            <li><FaReact className="skill-icon" /> React</li>
            <li><FaJs className="skill-icon" /> JavaScript</li>
            <li><FaHtml5 className="skill-icon" /> HTML & CSS</li>
            <li><FaNodeJs className="skill-icon" /> Node.js</li>
            <li><FaGitAlt className="skill-icon" /> Git</li>
          </ul>
        </div>
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul className="skills-list">
            <li><FaUsers className="skill-icon" /> Leadership</li>
            <li><FaLightbulb className="skill-icon" /> Adaptability</li>
            <li><FaHandsHelping className="skill-icon" /> Teamwork</li>
            <li><FaUsers className="skill-icon" /> Communication</li>
            <li><FaLightbulb className="skill-icon" /> Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;