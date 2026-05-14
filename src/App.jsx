import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useData } from './hooks/useData';
import './App.css';
import './Global.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { data, loading, error } = useData();

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
      <Header name={data?.hero?.name} />
      <Hero {...data?.hero} />
      <Skills {...data?.skills} />
      <Projects projects={data?.projects} />
      <About educationEvents={data?.education} interests={data?.interests} hobbies={data?.hobbies} />
      <Certifications certifications={data?.certifications} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
