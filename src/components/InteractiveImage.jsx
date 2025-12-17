import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import manimg from '../assets/images/mypic1.jpg';
import './InteractiveImage.css';

const InteractiveImage = () => {
  const imageRef = useRef(null);

  const [displayText, setDisplayText] = useState('');
  const [displayRole, setDisplayRole] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [dataStreams, setDataStreams] = useState([]);

  const fullName = "MUJTABA AHMAD";
  const role = "FULL STACK DEVELOPER";

  // Terminal typing effect
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
          }, 50);
        }, 200);
      }
    }, 80);

    return () => clearInterval(nameInterval);
  }, []);

  // Generate data streams
  useEffect(() => {
    const streams = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setDataStreams(streams);
  }, []);

  // Image magnetic effect
  const handleMouseMoveOnImage = (e) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(imageRef.current, {
      x: x * 0.05,
      y: y * 0.05,
      rotationY: x * 0.03,
      rotationX: -y * 0.03,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <div className="hero-container-new">
      {/* Animated Grid Background */}
      <div className="animated-grid"></div>

      {/* Data Streams */}
      <div className="data-streams">
        {dataStreams.map((stream) => (
          <motion.div
            key={stream.id}
            className="data-stream"
            style={{ left: stream.left }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: stream.duration,
              delay: stream.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="data-bit">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="hero-content-new">

        {/* Status Bar */}
        <motion.div
          className="status-bar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="status-item">
            <div className="status-indicator active"></div>
            <span>ONLINE</span>
          </div>
          <div className="status-item">
            <div className="status-indicator"></div>
            <span>v2.0.25</span>
          </div>
          <div className="status-item">
            <div className="status-indicator scanning"></div>
            <span>SCANNING...</span>
          </div>
        </motion.div>

        {/* Image Container with Tech Frame */}
        <div className="image-container-new">
          {/* Animated Corner Brackets */}
          <motion.div
            className="corner-brackets"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="bracket top-left"></div>
            <div className="bracket top-right"></div>
            <div className="bracket bottom-left"></div>
            <div className="bracket bottom-right"></div>
          </motion.div>

          {/* Scanning Line */}
          <motion.div
            className="scan-line"
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          ></motion.div>

          {/* Image */}
          <motion.div
            className="image-wrapper-new"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
            onMouseMove={handleMouseMoveOnImage}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              src={manimg}
              alt="Mujtaba Ahmad"
              className="hero-image-new"
            />

            {/* Hexagon Border */}
            <div className="hex-border"></div>

            {/* Glow Effect */}
            <div className="image-glow-new"></div>
          </motion.div>

          {/* Tech Details */}
          <motion.div
            className="tech-details"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTypingComplete ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="detail-line">
              <span className="label">ID:</span>
              <span className="value">DEV_2025_MA</span>
            </div>
            <div className="detail-line">
              <span className="label">STATUS:</span>
              <span className="value active-text">ACTIVE</span>
            </div>
          </motion.div>
        </div>

        {/* Terminal Text Display */}
        <motion.div
          className="terminal-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="terminal-line">
            <span className="prompt">{'>'}</span>
            <span className="command">initialize_profile</span>
          </div>
          <div className="terminal-line name-line">
            <span className="neon-text">{displayText}</span>
            {displayText.length < fullName.length && <span className="cursor-blink">_</span>}
          </div>
          <div className="terminal-line role-line">
            <span className="role-text">{displayRole}</span>
            {displayRole.length > 0 && displayRole.length < role.length && (
              <span className="cursor-blink">_</span>
            )}
          </div>
          {isTypingComplete && (
            <motion.div
              className="terminal-line success-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="success-text">✓ Profile loaded successfully</span>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default InteractiveImage;