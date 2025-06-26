import React from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';
import './Header.css';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Tamilvalavan S</h1>
        <nav className="navbar">
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <a
            href="Tamilvalavan.S Resume.docx"
            download="Tamilvalavan_Resume.pdf"
            className="resume-button"
          >
            <FaDownload className="resume-icon" /> Resume
          </a>
          {/* <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;