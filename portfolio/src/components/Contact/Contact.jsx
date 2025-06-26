import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-description">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:itzmestamil@gmail.com">itzmestamil@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+918940210522">+91 8940210522</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/s-tamil-valavan-15a801241/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>Chennai, India</span>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;