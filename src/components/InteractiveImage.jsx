import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import manimg from '../assets/images/mypic1.jpg';
import './InteractiveImage.css';

const InteractiveImage = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const [displayText, setDisplayText] = useState('');
  const [displayRole, setDisplayRole] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullName = "MUJTABA AHMAD";
  const role = "FULL STACK DEVELOPER";

  // Typing effect
  useEffect(() => {
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        setTimeout(() => {
          let roleIndex = 0;
          const roleInterval = setInterval(() => {
            if (roleIndex <= role.length) {
              setDisplayRole(role.slice(0, roleIndex));
              roleIndex++;
            } else {
              clearInterval(roleInterval);
              setIsTypingComplete(true);
            }
          }, 40);
        }, 150);
      }
    }, 60);

    return () => clearInterval(nameInterval);
  }, []);

  // Image magnetic effect
  const handleMouseMoveOnImage = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(imageRef.current, {
      x: x * 0.08,
      y: y * 0.08,
      rotationY: x * 0.05,
      rotationX: -y * 0.05,
      duration: 0.6,
      ease: 'power3.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.4)'
    });
  };

  return (
    <div className="hero-container-new" ref={containerRef}>
      {/* Subtle background grid */}
      <div className="animated-grid"></div>

      {/* Subtle top indicator */}
      <motion.div
        className="top-hud-bar"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <span className="hud-tag">ONLINE</span>
        <span className="hud-divider">//</span>
        <span className="hud-tag">Peshawar, PK</span>
        <span className="hud-divider">//</span>
        <span className="hud-tag">v2.0.26</span>
      </motion.div>

      {/* Main layout grid */}
      <div className="hero-content-new">
        
        {/* Grayscale to color 3D tilted image */}
        <div className="image-container-new">
          <motion.div
            className="image-wrapper-new"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
            onMouseMove={handleMouseMoveOnImage}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              src={manimg}
              alt="Mujtaba Ahmad"
              className="hero-image-new"
            />
            
            {/* Minimalist floating frame */}
            <div className="image-frame-border"></div>
          </motion.div>
        </div>

        {/* Minimalist Editorial Typography */}
        <motion.div
          className="editorial-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h1 className="hero-name-heading">
            {displayText}
            {displayText.length < fullName.length && <span className="custom-cursor-blink">|</span>}
          </h1>
          
          <h2 className="hero-role-subheading">
            {displayRole}
            {displayRole.length > 0 && displayRole.length < role.length && (
              <span className="custom-cursor-blink">|</span>
            )}
          </h2>

          {isTypingComplete && (
            <motion.p
              className="hero-bio-short"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Crafting premium interfaces, highly interactive web experiences, 
              and robust backend architectures. Focused on creative development and design systems.
            </motion.p>
          )}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-hint-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <div className="scroll-line"></div>
      </motion.div>
    </div>
  );
};

export default InteractiveImage;