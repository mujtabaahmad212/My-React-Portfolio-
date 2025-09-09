import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import manimg from '../assets/images/mypic1.jpg';
import './InteractiveImage.css';

const InteractiveImage = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;
    const text = textRef.current;
    const glow = glowRef.current;

    if (!image || !container) return;

    // Set 3D perspective for container
    gsap.set(container, { perspective: 1000 });
    
    // Initial load animation
    const tl = gsap.timeline();
    tl.from(container, {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
    .from(image, {
      scale: 1.3,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8')
    .from(text, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.5');

    // Enhanced mouse move handler with momentum
    let isHovering = false;
    const handleMouseMove = (e) => {
      if (!isHovering) return;
      
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const centerX = (mouseX - rect.width / 2) / rect.width;
      const centerY = (mouseY - rect.height / 2) / rect.height;

      // Enhanced 3D movement with better calculations
      gsap.to(image, {
        x: centerX * 30,
        y: centerY * 20,
        rotationX: -centerY * 15,
        rotationY: centerX * 15,
        scale: 1.08,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Animate glow effect
      if (glow) {
        gsap.to(glow, {
          opacity: 0.6,
          scale: 1.2,
          duration: 0.3,
          ease: 'power2.out',
        });
      }

      // Subtle text animation
      if (text) {
        gsap.to(text, {
          x: centerX * 10,
          y: centerY * 5,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    // Enhanced mouse leave handler
    const handleMouseLeave = () => {
      isHovering = false;
      
      gsap.to(image, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
      });

      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      if (text) {
        gsap.to(text, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
        });
      }
    };

    // Enhanced mouse enter handler
    const handleMouseEnter = () => {
      isHovering = true;
      
      gsap.to(image, {
        scale: 1.03,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    // Touch support for mobile
    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;

      const centerX = (touchX - rect.width / 2) / rect.width;
      const centerY = (touchY - rect.height / 2) / rect.height;

      gsap.to(image, {
        x: centerX * 20,
        y: centerY * 15,
        rotationX: -centerY * 10,
        rotationY: centerX * 10,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleTouchEnd = () => {
      gsap.to(image, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    // Add event listeners
    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    // Image load handler
    const handleImageLoad = () => {
      setIsLoaded(true);
    };

    if (image.complete) {
      handleImageLoad();
    } else {
      image.addEventListener('load', handleImageLoad);
    }

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      image.removeEventListener('load', handleImageLoad);
    };
  }, []);

  return (
    <div className="interactive-wrapper">
      <div ref={containerRef} className={`image-container ${isLoaded ? 'loaded' : ''}`}>
        {/* Glow effect */}
        <div ref={glowRef} className="glow-effect"></div>
        
        {/* Interactive image */}
        <div className="image-frame">
          <img 
            ref={imageRef} 
            src={manimg} 
            className="interactive-image" 
            alt="Interactive Portrait"
            loading="lazy"
          />
          
          {/* Overlay effects */}
          <div className="image-overlay"></div>
          <div className="shine-effect"></div>
        </div>

        {/* Text container */}
        <div ref={textRef} className="text-container">
          <h1 className="main-title">
            <span className="title-word">MUJTABA</span>
            <span className="title-word">AHMAD</span>
          </h1>
          <p className="subtitle">Interactive Developer</p>
          <div className="accent-line"></div>
        </div>

        {/* Decorative elements */}
        <div className="corner-decoration top-left"></div>
        <div className="corner-decoration top-right"></div>
        <div className="corner-decoration bottom-left"></div>
        <div className="corner-decoration bottom-right"></div>
      </div>
    </div>
  );
};

export default InteractiveImage;