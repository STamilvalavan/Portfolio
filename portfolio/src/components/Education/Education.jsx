import React from 'react';
import './Education.css';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const educationDetails = [
    {
      icon: <FaGraduationCap className="education-icon" />,
      institution: 'Jeppiaar Engineering College',
      degree: 'B.Tech in Information Technology',
      details: 'CGPA: 7.3 (Present)',
    },
    {
      icon: <FaSchool className="education-icon" />,
      institution: 'Maharishi Vidhya Mandir Matric. Higher Secondary School',
      degree: '12th Grade',
      details: 'Score: 81.62% (2021)',
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        {educationDetails.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-icon-container">{edu.icon}</div>
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="details">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;