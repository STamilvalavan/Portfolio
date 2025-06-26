import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Certifications from './components/Certifications/Certifications';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Skills />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;