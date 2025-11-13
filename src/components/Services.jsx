// ServiceSection.jsx
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ServiceSection.css';
// UPDATED: Added Palette and Video icons
import { Code, Zap, Shield, Palette, Video } from 'lucide-react'; 

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

      // --- GSAP Interactions ---

      const onMouseEnter = () => {
        gsap.to(card, {
          scale: 1.03, 
          rotation: 0,  
          boxShadow: '0 0 40px rgba(0, 255, 157, 0.3)', 
          borderColor: 'var(--neon-green)', 
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
          boxShadow: '0 0 0 rgba(0, 0, 0, 0)', 
          borderColor: 'var(--grid-line)', 
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

  // --- UPDATED SERVICES ---
  // Broken down from your skills list
  const services = [
    { 
      title: 'Web Development', 
      description: 'Building scalable applications using React, Node.js, and Express, from the server to the client.',
      icon: <Code size={40} />
    },
    { 
      title: 'Interactive UI Design', 
      description: 'Creating smooth, engaging user experiences with GSAP animations, Tailwind CSS, and modern design tools.',
      icon: <Zap size={40} />
    },
    { 
      title: 'Graphic Design', 
      description: 'Crafting visual identities, logos, and digital assets using Adobe Photoshop and modern design principles.',
      icon: <Palette size={40} />
    },
    { 
      title: 'Video Editing', 
      description: 'Producing and editing high-quality video content for marketing, portfolios, or personal projects.',
      icon: <Video size={40} />
    },
    { 
      title: 'Cybersecurity & Systems', 
      description: 'Actively learning ethical hacking principles, system administration, and network security with Linux & Kali.',
      icon: <Shield size={40} /> 
    },
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