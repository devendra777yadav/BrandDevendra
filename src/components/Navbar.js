import React from 'react';
import { Link } from 'react-scroll';
import '../styles/main.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"></div>
      <div className="navbar-links">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="blog" smooth={true} duration={500}>
          Blog
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
