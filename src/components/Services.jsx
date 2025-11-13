// ServiceSection.jsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServiceSection.css';
import { Code, Bot, Zap, Palmtree } from 'lucide-react'; // Import icons

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Animate the section header
    gsap.from(section.querySelector('.service-text'), {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
      },
    });

    const listeners = [];

    cards.forEach((card, index) => {
      if (!card) return;

      // Card scroll-in animation
      gsap.from(card, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      });

      // --- Reskinned GSAP Interactions ---

      const onMouseEnter = () => {
        gsap.to(card, {
          scale: 1.03, // Keep the scale
          rotation: 0,  // Remove the z-axis rotation, it's a bit much
          // CHANGE: Use a neon glow, not a black shadow
          boxShadow: '0 0 40px rgba(0, 255, 157, 0.3)', 
          borderColor: 'var(--neon-green)', // Brighten border
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          // CHANGE: Revert to no shadow
          boxShadow: '0 0 0 rgba(0, 0, 0, 0)', 
          borderColor: 'var(--grid-line)', // Dim border
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const onMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(card, {
          rotationY: (x - rect.width / 2) * 0.02,
          rotationX: -(y - rect.height / 2) * 0.02,
          duration: 0.4,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mouseenter', onMouseEnter);
      card.addEventListener('mouseleave', onMouseLeave);
      card.addEventListener('mousemove', onMouseMove);

      listeners.push({ card, onMouseEnter, onMouseLeave, onMouseMove });
    });

    return () => {
      listeners.forEach(({ card, onMouseEnter, onMouseLeave, onMouseMove }) => {
        if (card) {
          card.removeEventListener('mouseenter', onMouseEnter);
          card.removeEventListener('mouseleave', onMouseLeave);
          card.removeEventListener('mousemove', onMouseMove);
        }
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // UPDATED: Added icons
  const services = [
    { 
      title: 'React Development', 
      description: 'Scalable and dynamic front-end applications with optimized performance.',
      icon: <Code size={40} />
    },
    { 
      title: 'GSAP Animations', 
      description: 'Smooth and engaging animations for a unique user experience.',
      icon: <Zap size={40} />
    },
    { 
      title: 'Custom Website Design', 
      description: 'Modern and responsive designs that align with your brand identity.',
      icon: <Palmtree size={40} /> // Using Palmtree as a placeholder for "design"
    },
    // { 
    //   title: 'UI Components', 
    //   description: 'High-converting pages with pixel-perfect, reusable UI.',
    //   icon: <Bot size={40} /> // Using Bot as a placeholder for "components"
    // },
  ];

  return (
    <div id="service" className="sec-service" ref={sectionRef}>
      <div className="service-div">
        <div className="service-text">
          <h1>SERVICE_MATRIX</h1>
          <p>
            // Core directives: Building high-performance, engaging, and
            visually-striking web applications.
          </p>
        </div>

        <div className="service-cards">
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="card-icon">
                {service.icon}
              </div>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              <span className="card-index">// 0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;