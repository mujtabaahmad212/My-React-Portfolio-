// AboutMe.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AboutMe.css';
import me from '../assets/images/mepng.png'; // Ensure this path is correct

const AboutMe = () => {
  const aboutRef = useRef(null);
  const profileImgRef = useRef(null);
  const textRefs = useRef([]);
  const skillsRefs = useRef([]);
  const contactRefs = useRef([]);

  useEffect(() => {
    // Profile image animation
    gsap.fromTo(
      profileImgRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
    );

    // Staggered bio text animation
    gsap.fromTo(
      textRefs.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5 }
    );

    // Staggered skills animation
    gsap.fromTo(
      skillsRefs.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'elastic.out(1, 0.5)', delay: 1 }
    );

    // Contact links animation
    gsap.fromTo(
      contactRefs.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power2.out', delay: 1.5 }
    );
  }, []);

  return (
    <section className="about-me" ref={aboutRef}>
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="profile-section">
            <img
              ref={profileImgRef}
              src={me}
              alt="Mujtaba Ahmad"
              className="profile-img"
            />
            <h2>Mujtaba Ahmad</h2>
            <p className="title">Front-End Developer</p>
          </div>

          <div className="bio-section">
            {[
              "Hello! I'm Mujtaba Ahmad, a passionate Front-End Developer with over 1 year of experience specializing in creating responsive and user-friendly web applications.",
              "My expertise lies in building dynamic interfaces using HTML, CSS, and JavaScript. I enjoy collaborating with teams to craft solutions that enhance user experiences.",
              "When I’m not coding, you can find me exploring new tech trends, contributing to open-source projects, or sipping a good cup of coffee."
            ].map((text, index) => (
              <p
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="skills-section">
            <h3>Skills</h3>
            <ul className="skills-list">
              {["React.js", "JavaScript", "HTML & CSS", "Responsive Design", "GSAP Animation"].map((skill, index) => (
                <li
                  key={index}
                  ref={(el) => (skillsRefs.current[index] = el)}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="projects-section">
            <h3>Featured Projects</h3>
            <ul className="projects-list">
              <li><a href="https://github.com/mujtabaahmad212/full-responsive-mobile-shop-web" target="_blank" rel="noopener noreferrer">Full Responsive Mobile Shop Web (HTML & CSS)</a></li>
              <li><a href="https://github.com/mujtabaahmad212/functional-calculator" target="_blank" rel="noopener noreferrer">Functional Calculator (HTML)</a></li>
              <li><a href="https://github.com/mujtabaahmad212/Netflix-Clone-Website" target="_blank" rel="noopener noreferrer">Netflix Clone Website (HTML)</a></li>
              <li><a href="https://github.com/mujtabaahmad212/responsive-book-store-website" target="_blank" rel="noopener noreferrer">Responsive Book Store Website (HTML)</a></li>
              <li><a href="https://github.com/mujtabaahmad212/responsive--COFFEE-SHOP-website" target="_blank" rel="noopener noreferrer">Responsive Coffee Shop Website (CSS)</a></li>
            </ul>
          </div> */}

          <div className="contact-section">
            <h3>Let’s Connect!</h3>
            {[
              { label: "Email", value: "mujtabaahmad4200@gmail.com", href: "mailto:mujtabaahmad4200@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/mujtaba-ahmad", href: "https://www.linkedin.com/in/mujtaba-ahmad-254b4625a/" },
              { label: "GitHub", value: "github.com/mujtabaahmad212", href: "https://github.com/mujtabaahmad212/" }
            ].map((contact, index) => (
              <p
                key={index}
                ref={(el) => (contactRefs.current[index] = el)}
              >
                {contact.label}: <a href={contact.href} target="_blank" rel="noopener noreferrer">{contact.value}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;