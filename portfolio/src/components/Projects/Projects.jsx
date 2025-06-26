import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Document Management System</h3>
          <ul className="project-details">
            <li>
              Contributed to a live full-stack web application project using <strong>React.js</strong> for the frontend and <strong>Django</strong> for the backend during my internship.
            </li>
            <li>
              Implemented <strong>user authentication</strong>, <strong>file upload/download</strong>, and <strong>role-based access control</strong>.
            </li>
          </ul>
        </div>
        <div className="project-item">
          <h3>Food Delivery Web Application</h3>
          <ul className="project-details">
            <li>
              Designed and developed a basic responsive food delivery app using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.
            </li>
            <li>
              Enabled users to <strong>browse menus</strong>, <strong>place orders</strong>, and <strong>track deliveries</strong> through a user-friendly interface.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;