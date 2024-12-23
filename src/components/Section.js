import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Section({ children, id, isEven }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={`section ${isEven ? 'even-section' : 'odd-section'}`}
    >
      {children}
    </motion.section>
  );
}

export default Section;
