import React from 'react';
import Header from './components/Header';
import About from './components/About';
import SoftSkills from './components/SoftSkills';
import SkillsCertificates from './components/SkillsCertificates';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <SoftSkills />
      <SkillsCertificates />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;