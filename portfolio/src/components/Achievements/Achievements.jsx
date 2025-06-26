import React from 'react';
import './Achievements.css';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Sports',
      description: 'Certificates and medals in Cricket and Chess.',
    },
    {
      title: 'Yuva Club Volunteer',
      description: 'Organized and managed events for 100+ participants, demonstrating leadership and teamwork skills.',
    },
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements</h2>
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <FaTrophy className="achievement-icon" />
            <h3>{achievement.title}</h3>
            <p className="description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;