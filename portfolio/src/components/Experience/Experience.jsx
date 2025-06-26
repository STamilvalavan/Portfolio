import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const experiences = [
    {
      company: 'VDart, Inc.',
      role: 'Intern',
      duration: 'Oct 2024 - Jan 2025',
      briefDescription: 'Worked on Document Management Systems.',
      fullDescription:
        'During my internship at VDart, I contributed to the development of a Document Management System. I worked on frontend tasks, gaining hands-on experience with modern web technologies. And learnt about the Project Management methods like Agile methodology , Daily Scrums and all.',
    },
    {
      company: 'Codebind Technology',
      role: 'Training cum Intern',
      duration: 'Jun 2022 - July 2022',
      briefDescription: 'Learned and implemented web development concepts.',
      fullDescription:
        'At Codebind Technology, I underwent training in web development and worked on projects. I gained experience in HTML, CSS, and PHP, and created a basic website.',
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`experience-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            {hoverIndex === index && (
              <div className="brief-description">{exp.briefDescription}</div>
            )}
            {activeIndex === index && (
              <div className="full-description">{exp.fullDescription}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;