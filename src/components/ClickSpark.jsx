// ClickSpark.jsx
import React, { useEffect } from 'react';
import "./ClickSpark.css"
const ClickSpark = () => {
  useEffect(() => {
    const createSpark = (e) => {
      const spark = document.createElement('div');
      spark.className = 'spark';
      document.body.appendChild(spark);

      const x = e.pageX;
      const y = e.pageY;

      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;

      // Random number of particles (3-8)
      const particles = Math.floor(Math.random() * 5) + 3;

      for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random angle and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 20 + 10;

        particle.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--y', `${Math.sin(angle) * distance}px`);
        
        spark.appendChild(particle);
      }

      // Remove spark after animation
      setTimeout(() => {
        spark.remove();
      }, 600);
    };

    document.addEventListener('click', createSpark);
    
    return () => {
      document.removeEventListener('click', createSpark);
    };
  }, []);

  return null;
};

export default ClickSpark;