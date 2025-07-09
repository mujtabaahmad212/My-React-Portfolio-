import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import manimg from '../assets/images/mypic1.jpg'; // Your image import
import './home.css';

const InteractiveImage = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    // Initial animation for image
    gsap.from(image, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const centerX = mouseX - rect.width / 2;
      const centerY = mouseY - rect.height / 2;

      gsap.to(image, {
        x: centerX * 0.1,
        y: centerY * 0.1,
        rotationX: -centerY * 0.05,
        rotationY: centerX * 0.05,
        scale: 1.1,
        duration: 1.0,
        ease: 'back.out',
      });
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      gsap.to(image, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 2.0,
        ease: 'back.out(1, 0.3)',
      });
    };

    // Mouse enter handler
    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 1.0,
        ease: 'back.out',
      });
    };

    // Add event listeners for image interaction
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div ref={containerRef} className="image-container">
      {/* Interactive image */}
      <img ref={imageRef} src={manimg} className="manimg" alt="manimg" />
      <div className=" text-container">
      <h1  className="manname">
      {/* <span>MUJTABA</span> <span>AHMAD</span> */}
    </h1>
      </div>
    </div>
  );
};

export default InteractiveImage;