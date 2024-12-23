import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Importing icons from react-icons

function MaaKaLadla() {
  const roles = [
    "Software Developer 💻",  
    "Competetive Programmer 🥷👨🏻‍💻", 
    "Cricketer 🏏", 
    "Gamer 🎮",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Cycle through roles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Scroll down function
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <motion.div
      className="MaaKaLadla"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="content-wrapper">
        {/* Profile photo container with animated border */}
        <div className="profile-photo-container">
          <img 
            src="/icons/profile-photo.jpeg" // Path to your profile photo in the public/icons directory
            alt="Devendra Yadav" 
            className="profile-photo"
          />
        </div>
        <h1>Devendra Yadav</h1>
        <p>
          I am a <motion.span
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="highlighted-role"
          >
            {roles[currentRoleIndex]}
          </motion.span>
        </p>

        <div className="button-container">
          {/* Download Resume Button */}
          <a
            href="/path/to/resume.pdf"
            download="Devendra_Yadav_Resume"
            className="custom-button"
          >
            Download Resume
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-button"
          >
            Visit LinkedIn
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-button"
          >
            Visit GitHub
          </a>
        </div>

        {/* Down Scroll Button */}
        <button className="scroll-down-btn" onClick={scrollDown}>
        </button>
      </div>
    </motion.div>
  );
}

export default MaaKaLadla;
