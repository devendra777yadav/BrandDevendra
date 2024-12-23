import React from 'react';
import Navbar from './components/Navbar';
import MaaKaLadla from './components/MaaKaLadla';
import Section from './components/Section';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MaaKaLadla />
      <Section id="about" isEven={false}>
        <About />
      </Section>
      <Section id="experience" isEven={true}>
        <Experience />
      </Section>
      <Section id="projects" isEven={false}>
        <Projects />
      </Section>
      <Section id="contact" isEven={true}>
        <Contact />
      </Section>
    </div>
  );
}

export default App;
