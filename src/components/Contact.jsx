import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import { Link } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const socialLinksRef = useRef([]);
  const tlRef = useRef(null);

  // Navigation items
  const NaviContaact = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
    },
    {
      id: 4,
      title: "Projects",
      path: "/Projects",
    },
  ];

  // Contact links data
  const socialLinks = [
    {
      id: 1,
      title: "EMAIL",
      url: "mailto:mujtabaahmad4200@gmail.com",
     
    },
    {
      id: 2,
      title: "INSTAGRAM",
      url: "https://www.instagram.com/mujtaba212__/",
   
    },
    {
      id: 3,
      title: "LINKEDIN",
      url: "https://www.linkedin.com/in/mujtaba-ahmad/",
     
    },
    {
      id: 4,
      title: "GITHUB",
      url: "https://github.com/mujtaba-ahmad",
     
    },
  ];

  // Initialize animations
  useEffect(() => {
    // Set loading state
    setIsLoaded(true);

    // Create main timeline
    tlRef.current = gsap.timeline({ paused: true });

    // Animate hero section
    tlRef.current
      .fromTo(
        ".contact2",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      )
      .fromTo(
        ".contactmeon",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        ".sociallinks2 a",
        {
          opacity: 0,
          y: 30,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.4"
      );

    // Animate CTA section on scroll
    ScrollTrigger.create({
      trigger: ".main-call",
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          ".bookCall",
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          }
        );

        gsap.fromTo(
          [".bookCallp1", ".bookCallh1", ".bookCallp2", ".bookwa"],
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            delay: 0.3,
          }
        );
      },
    });

    // Animate navigation section
    ScrollTrigger.create({
      trigger: ".nav-add",
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          [".addr", ".navi"],
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
          }
        );
      },
    });

    // Start animations
    tlRef.current.play();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  // Handle contact link clicks
  const handleContactClick = (url, title) => {
    // Add analytics tracking here if needed
    console.log(`Contact link clicked: ${title}`);
    
    if (title === "EMAIL") {
      // For email, we can add additional handling
      window.location.href = url;
    } else {
      // For external links, open in new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Handle book call click
  const handleBookCallClick = () => {
    // Add analytics tracking
    console.log("Book a call button clicked");
    
    // Create custom message for WhatsApp
    const message = encodeURIComponent(
      "Hi Mujtaba! I'm interested in discussing a project. Can we schedule a call?"
    );
    
    window.open(`https://wa.me/923161900577?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`main ${isLoaded ? 'loaded' : ''}`} ref={contactRef}>
      {/* Hero Contact Section */}
      <section className="connect" ref={heroRef} aria-label="Contact Information">
        <h1 className="contact2">CONTACT</h1>
        <p className="contactmeon">CONTACT ME ON</p>
        
        <div className="sociallinks2" role="navigation" aria-label="Social Media Links">
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target={link.title !== "EMAIL" ? "_blank" : "_self"}
              rel={link.title !== "EMAIL" ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                e.preventDefault();
                handleContactClick(link.url, link.title);
              }}
              ref={(el) => (socialLinksRef.current[index] = el)}
              aria-label={`Contact via ${link.title}`}
              className="social-link"
            >
              <span className="link-icon" aria-hidden="true">{link.icon}</span>
              <span className="link-text">{link.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="main-call" ref={ctaRef} aria-label="Book a Call">
        <div className="bookCall">
          <p className="bookCallp1">BOOK A CALL</p>
          <h2 className="bookCallh1">Ready to Transform Your Vision?</h2>
          <p className="bookCallp2">
            Let's discuss how I can bring your ideas to life. Book a quick call
            with me, and I'll guide you through the next steps.
          </p>
          <button
            className="bookwa"
            onClick={handleBookCallClick}
            type="button"
            aria-label="Book a call via WhatsApp"
          >
            <span>BOOK A CALL</span>
          </button>
        </div>
      </section>

      {/* Navigation & Contact Footer */}
      <footer className="nav-add" aria-label="Additional Contact and Navigation">
        <div className="addr">
          <h3 style={{ color: '#f44e00', marginBottom: '1rem', fontSize: '1.2rem' }}>
            Get In Touch
          </h3>
          <p>
            <a 
              href="mailto:mujtabaahmad4200@gmail.com"
              aria-label="Send an email"
            >
              mujtabaahmad4200@gmail.com
            </a>
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginTop: '1rem' }}>
           Karak, KP, Pakistan
          </p>
        </div>
        
        <div className="navi">
          <nav role="navigation" aria-label="Main Navigation">
            {NaviContaact.map(({ id, title, path }) => (
              <Link
                key={id}
                to={path}
                aria-label={`Navigate to ${title}`}
                className="nav-link"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Contact;