// AboutMe.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AboutMe.css';
import me from '../assets/images/mepng.png';

const AboutMe = () => {
  const aboutRef = useRef(null);
  const profileImgRef = useRef(null);
  const textRefs = useRef([]);
  const skillsRefs = useRef([]);
  const contactRefs = useRef([]);

  useEffect(() => {
    // GSAP animations
    gsap.fromTo(profileImgRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' });
    gsap.fromTo(textRefs.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5 });
    gsap.fromTo(skillsRefs.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'elastic.out(1, 0.5)', delay: 1 });
    gsap.fromTo(contactRefs.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power2.out', delay: 1.5 });
  }, []);

  useEffect(() => {
    // GSAP 3D tilt effect
    const img = profileImgRef.current;
    if (!img) return;

    const handleMouseMove = (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(img, {
        rotateX: -y / 10,
        rotateY: x / 10,
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const resetTilt = () => {
      gsap.to(img, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5, ease: 'power3.out' });
    };

    const clickPulse = () => {
      gsap.to(img, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: 'power1.inOut' });
    };

    img.addEventListener('mousemove', handleMouseMove);
    img.addEventListener('mouseleave', resetTilt);
    img.addEventListener('click', clickPulse);

    return () => {
      img.removeEventListener('mousemove', handleMouseMove);
      img.removeEventListener('mouseleave', resetTilt);
      img.removeEventListener('click', clickPulse);
    };
  }, []);

  // --- Skills & Bio Data ---

  const skills = [
    // Core Development
    "React.jsx", "JavaScript (ES6+)", "Node.js", "Express.js", 
    "HTML5 & CSS3", "Tailwind CSS", "GSAP Animation", "Vite",
    // Tools & Platforms
    "Git / GitHub", "Firebase", "OJS", "Figma",
    // Cybersecurity & OS
    "Cybersecurity", "Kali Linux", "Linux/SysAdmin",
    // Other Skills
    "Video Editing", "Adobe Photoshop"
  ];

  const bio = [
    "I am a **BS Information Technology student** (2022-2026) at The University of Agriculture, Peshawar. My primary professional focus is **Front-End Development**, where I specialize in building dynamic, responsive interfaces with React, GSAP, and Vite.",
    "I've built a strong foundation in professional communication and time management by concurrently serving as a **Personal Assistant** at the Arfa Karim Technology Incubator and handling other remote work.",
    "Beyond development, I am actively **learning cybersecurity** and have hands-on experience with server-side tasks and Linux. I also engage in freelance photo/video editing and have organized community events like a university eSports tournament."
  ];

  return (
    <section className="about-me" ref={aboutRef}>
      <div className="about-container">
        <h1 className='aboutmeh1'>USER_PROFILE</h1>
        <p className="subtitle">// Authenticated as: Mujtaba Ahmad</p>

        <div className="about-content">
          <div className="profile-section">
            <img
              ref={profileImgRef}
              src={me}
              alt="Mujtaba Ahmad"
              className="profile-img"
            />
            <h2>Mujtaba Ahmad</h2>
            {/* UPDATED TITLE HERE */}
            <p className="title">[ Developer | Cybersecurity Learner ]</p>
          </div>

          <div className="bio-section">
            <h3>// BIO_LOG</h3>
            {bio.map((text, index) => (
              <p 
                key={index} 
                ref={(el) => (textRefs.current[index] = el)}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>

          <div className="skills-section">
            <h3>// SKILL_MATRIX</h3>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} ref={(el) => (skillsRefs.current[index] = el)}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="contact-section">
            <h3>// COMMS_CHANNEL</h3>
            {[
              { label: "Email", value: "mujtabaahmad4200@gmail.com", href: "mailto:mujtabaahmad4200@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/mujtaba-ahmad", href: "https://www.linkedin.com/in/mujtaba-ahmad-254b4625a/" },
              { label: "GitHub", value: "github.com/mujtabaahmad212", href: "https://github.com/mujtabaahmad212/" }
            ].map((contact, index) => (
              <p key={index} ref={(el) => (contactRefs.current[index] = el)}>
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