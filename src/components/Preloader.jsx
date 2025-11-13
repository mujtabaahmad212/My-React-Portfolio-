// src/components/Preloader.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

// The text to animate
const text1 = "TRANSFORMING_IDEAS";
const text2 = "INTO > DIGITAL_REALITY";

// Variants for the container (staggers the children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Time between each letter
    },
  },
};

// Variants for each letter
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Preloader = () => {
  return (
    <motion.div
      className="preloader-container"
      initial={{ opacity: 1 }}
      // This "exit" animation will play when the component is removed
      exit={{ 
        opacity: 0, 
        filter: 'blur(10px)', 
        transition: { duration: 0.5, ease: 'easeIn' } 
      }}
    >
      <motion.h1
        className="preloader-text"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Map over the first string to animate each letter */}
        {text1.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}

        {/* Blinking cursor */}
        <motion.span
          className="blinking-cursor"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          _
        </motion.span>
      </motion.h1>

      {/* This subtext fades in after the first line is done typing */}
      <motion.h2
        className="preloader-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (text1.length * 0.08) + 0.5 }} // Delay = (typing time) + 0.5s
      >
        {text2}
      </motion.h2>
    </motion.div>
  );
};

export default Preloader;