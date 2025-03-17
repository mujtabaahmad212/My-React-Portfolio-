import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ServiceSection.css';

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  
  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Initial animation for section entrance
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
      },
    });

    // Card animations with mouse interaction
    cards.forEach((card, index) => {
      // Staggered entrance animation
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        },
      });

      // Mouse hover animation with rotation
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.03,
          rotation: 2, // Added rotation back
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          rotation: 0, // Reset rotation
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      // Mouse move tilt effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(card, {
          rotationY: (x - rect.width / 2) * 0.02,
          rotationX: -(y - rect.height / 2) * 0.02,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });

    // Cleanup event listeners
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
        card.removeEventListener('mousemove', () => {});
      });
    };
  }, []);

  const services = [
    {
      title: 'Custom Website Design',
      description: 'Modern and responsive designs that align with your brand identity.',
    },
    {
      title: 'React Development',
      description: 'Scalable and dynamic front-end applications with optimized performance.',
    },
    {
      title: 'GSAP Animations',
      description: 'Smooth and engaging animations for a unique user experience.',
    },
    {
      title: 'Landing Pages & UI Components',
      description: 'High-converting pages with pixel-perfect UI.',
    },
  ];

  return (
    <div id="service" className="sec-service" ref={sectionRef}>
      <div className="service-div">
        <div className="service-text">
          <h1>Services</h1>
          <p>
            I specialize in creating stunning, fully responsive, and
            high-performance websites that enhance user experience and
            engagement. With expertise in HTML, CSS, JavaScript, React, and GSAP
            animations, I build interactive and visually appealing web solutions
            tailored to your needs.
          </p>
        </div>

        <div className="service-cards">
          {services.map((service, index) => (
            <div
              key={index}
              className="card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;