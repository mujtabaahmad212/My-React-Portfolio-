import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import manimg from '../assets/images/mypic1.jpg';
import './InteractiveImage.css';

const InteractiveImage = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const bigTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const overlayRef = useRef(null);
  const particlesRef = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const bigText = bigTextRef.current;
    const subtitle = subtitleRef.current;
    const overlay = overlayRef.current;

    if (!container || !image || !bigText) return;

    // Initial setup
    gsap.set([container, image, bigText, subtitle], { opacity: 0 });
    gsap.set(image, { scale: 0.8, y: 50 });
    gsap.set(bigText, { scale: 0.9, y: 100 });
    gsap.set(subtitle, { y: 30 });
    gsap.set(overlay, { opacity: 0 });

    // Enhanced Master timeline for page load animation
    const masterTL = gsap.timeline({ delay: 0.3 });

    // Dramatic entrance sequence
    masterTL
      // Container dramatic fade in
      .to(container, {
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      // Big text dramatic rise with rotation
      .fromTo(bigText, 
        {
          opacity: 0,
          scale: 0.8,
          y: 150,
          rotationX: 45
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 1.8,
          ease: "power4.out"
        }, "-=0.5")
      // Image spectacular entrance
      .fromTo(image, 
        {
          opacity: 0,
          scale: 0.6,
          y: 100,
          rotationY: 30,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationY: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "elastic.out(1, 0.8)"
        }, "-=1.2")
      // Subtitle elegant slide
      .fromTo(subtitle, 
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=0.8")
      // Final overlay smooth reveal
      .to(overlay, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

    // Enhanced 3D mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX = (e.clientX - centerX) / rect.width;
      mouseY = (e.clientY - centerY) / rect.height;

      if (isHovering) {
        // Enhanced 3D transformation with better physics
        gsap.to(image, {
          rotationY: mouseX * 20,
          rotationX: -mouseY * 18,
          x: mouseX * 25,
          y: mouseY * 22,
          scale: 1.1,
          duration: 0.7,
          ease: "power3.out"
        });

        // Big text enhanced parallax with depth
        gsap.to(bigText, {
          x: -mouseX * 40,
          y: -mouseY * 25,
          rotationY: mouseX * 8,
          rotationX: mouseY * 3,
          scale: 1.05,
          duration: 1.2,
          ease: "power3.out"
        });

        // Subtitle with magnetic effect
        gsap.to(subtitle, {
          x: mouseX * 18,
          y: mouseY * 12,
          rotationZ: mouseX * 2,
          duration: 1.4,
          ease: "power2.out"
        });
      }
    };

    const handleMouseEnter = () => {
      isHovering = true;
      
      gsap.to(image, {
        scale: 1.12,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.to(bigText, {
        scale: 1.03,
        opacity: 0.3,
        duration: 1,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      isHovering = false;
      
      gsap.to([image, bigText, subtitle], {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scale: 1,
        duration: 2,
        ease: "elastic.out(1, 0.4)"
      });

      gsap.to(bigText, {
        opacity: 0.15,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    // Touch support for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const touchX = (touch.clientX - centerX) / rect.width;
        const touchY = (touch.clientY - centerY) / rect.height;

        gsap.to(image, {
          rotationY: touchX * 10,
          rotationX: -touchY * 10,
          x: touchX * 15,
          y: touchY * 15,
          duration: 0.3,
          ease: "power2.out"
        });

        gsap.to(bigText, {
          x: -touchX * 20,
          y: -touchY * 15,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    };

    const handleTouchEnd = () => {
      gsap.to([image, bigText, subtitle], {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      });
    };

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
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
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      image.removeEventListener('load', handleImageLoad);
    };
  }, []);

  // Enhanced floating animation for continuous movement
  useEffect(() => {
    if (isLoaded) {
      // Image floating with rotation
      gsap.to(imageRef.current, {
        y: "+=15",
        rotation: "+=2",
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Big text subtle breathing effect
      gsap.to(bigTextRef.current, {
        y: "+=8",
        scale: 1.02,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });

      // Subtitle gentle sway
      gsap.to(subtitleRef.current, {
        x: "+=3",
        y: "+=2",
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }
  }, [isLoaded]);

  return (
    <div className="hero-container">
      {/* Background particles */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      {/* Main content */}
      <div ref={containerRef} className="content-wrapper">
        {/* Big background text */}
        <div ref={bigTextRef} className="big-text-bg">
          <span className="big-text-line">MUJTABA</span>
          <span className="big-text-line">AHMAD</span>
        </div>

        {/* Center image */}
        <div className="image-wrapper">
          <div className="image-glow"></div>
          <img 
            ref={imageRef}
            src={manimg} 
            alt="Mujtaba Ahmad"
            className="hero-image"
          />
          <div className="image-border"></div>
        </div>

        {/* Subtitle and description */}
       

        {/* Overlay effects */}
        <div ref={overlayRef} className="overlay-effects">
          <div className="gradient-overlay"></div>
          <div className="noise-overlay"></div>
        </div>
      </div>

      
    </div>
  );
};

export default InteractiveImage;