import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-card">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="heading"
              >
                About Me
              </motion.h2>
            </div>
            <div className="col-md-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                I’m a passionate <strong>Software Developer</strong> with over 2 years of
                hands-on experience in Backend Development and Cloud Technologies. I
                specialize in building scalable, high-performance systems.
              </motion.p>
              <p>
                At <strong>Jubilant FoodWorks</strong>, I’ve worked extensively in
                designing and developing multi-tier e-commerce products, leveraging
                technologies like <strong>Spring Boot</strong>, <strong>microservices</strong>,
                <strong>Apache Kafka</strong>, and <strong>Docker</strong>. My work involves
                creating fault-tolerant systems using design patterns such as CQRS and Saga,
                along with integrating multiple third-party services. Also, I focus on system performance optimization.
              </p>
              <p>
                When I’m not coding, you can find me exploring the latest tech trends
                or enjoying a game of cricket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
