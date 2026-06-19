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
    gsap.fromTo(textRefs.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.5 });
    gsap.fromTo(skillsRefs.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'elastic.out(1, 0.5)', delay: 1 });
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

  // --- Summary, Experience & Skills Data ---
  const summary = "Full-stack developer with a strong foundation in MERN stack development and cybersecurity operations. Experienced in leading development teams, managing client-facing projects, and maintaining web infrastructure. Proven ability to translate business goals into secure, high-performance web solutions while mentoring junior developers on best practices and efficient workflows.";

  const experiences = [
    {
      role: "LEAD DEVELOPER",
      company: "DevBazm",
      period: "Nov 2025 – Present",
      bullets: [
        "Architect and lead the end-to-end development of custom MERN stack solutions, handling both technical architecture and hands-on coding.",
        "Direct client engagement: Manage requirement gathering, project scoping, and roadmap planning to ensure alignment with client objectives.",
        "Team Leadership: Mentor a junior development team by setting high coding standards, streamlining workflows, and overseeing technical execution to guarantee timely project delivery."
      ]
    },
    {
      role: "TEAM AUDITOR",
      company: "Arfa Karim Technology Incubator",
      period: "Aug 2025 – Jan 2026",
      bullets: [
        "Audited team performance and enforced operational standards to ensure strict adherence to project deadlines.",
        "Orchestrated workflows via ClickUp/Google Sheets and Microsoft Teams, optimizing task distribution and project tracking.",
        "Identified bottlenecks and implemented productivity strategies, delivering structured performance reports to management."
      ]
    },
    {
      role: "WEBSITE MANAGER",
      company: "Allied Estimating (USA-based)",
      period: "May 2025 – Aug 2025",
      bullets: [
        "Solely responsible for the management and maintenance of the company's web infrastructure, ensuring optimal performance and 99.9% reliability.",
        "Security & Performance: Implemented proactive security measures to ensure data integrity and optimized website speed for international users.",
        "Strategic Liaison: Served as the primary point of contact between technical execution and management stakeholders to drive business efficiency."
      ]
    },
    {
      role: "FREELANCE FULL-STACK DEVELOPER",
      company: "Self-Employed",
      period: "2024 – Present",
      bullets: [
        "Independently designed and deployed high-performance, responsive websites for various clients.",
        "Managed the full development lifecycle, from initial UI/UX concepts and database integration to secure deployment and hosting."
      ]
    }
  ];

  const skillCategories = [
    {
      name: "Frontend",
      items: [
        { name: "React.js", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "JavaScript (ES6+)", slug: "javascript" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Bootstrap", slug: "bootstrap" }
      ]
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Express.js", slug: "express" },
        { name: "RESTful APIs", slug: "postman" },
        { name: "JWT/OAuth Authentication", slug: "jsonwebtokens" }
      ]
    },
    {
      name: "Databases",
      items: [
        { name: "MongoDB", slug: "mongodb" },
        { name: "MySQL", slug: "mysql" },
        { name: "Firebase", slug: "firebase" },
        { name: "Cloudinary", slug: "cloudinary" }
      ]
    },
    {
      name: "Tools",
      items: [
        { name: "Git/GitHub", slug: "github" },
        { name: "Vercel", slug: "vercel" },
        { name: "Netlify", slug: "netlify" },
        { name: "Burp Suite (Security Analysis)", slug: "burpsuite" },
        { name: "Matlab", slug: "mathworks" },
        { name: "ClickUp", slug: "clickup" },
        { name: "Microsoft Teams", slug: "microsoftteams" }
      ]
    }
  ];

  // Helper to collect flat index for skills animation
  let skillFlatIndex = 0;

  return (
    <section className="about-me" ref={aboutRef}>
      <div className="about-container">
        <h1 className='aboutmeh1'>ABOUT_ME</h1>
        <p className="subtitle">// Professional Profile : Mujtaba Ahmad</p>

        <div className="about-content">
          {/* Profile Sidebar */}
          <div className="profile-section">
            <img
              ref={profileImgRef}
              src={me}
              alt="Mujtaba Ahmad"
              className="profile-img"
            />
            <h2>Mujtaba Ahmad</h2>
            <p className="title">Full Stack Developer & Designer</p>

            <div className="contact-section">
              <h3>// CONNECT</h3>
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

          {/* Detailed CV Information */}
          <div className="details-section">
            {/* Professional Summary */}
            <div className="bio-section">
              <h3>// PROFESSIONAL SUMMARY</h3>
              <p 
                ref={(el) => (textRefs.current[0] = el)} 
                className="summary-text"
              >
                {summary}
              </p>
            </div>

            {/* Professional Experience */}
            <div className="experience-section">
              <h3>// PROFESSIONAL EXPERIENCE</h3>
              <div className="experiences-list">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className="experience-item"
                    ref={(el) => (textRefs.current[index + 1] = el)}
                  >
                    <div className="experience-header">
                      <h4 className="exp-role">{exp.role}</h4>
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                    <ul className="exp-bullets">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Grouped */}
            <div className="skills-section">
              <h3>// TECHNICAL SKILLS</h3>
              <div className="skills-categories">
                {skillCategories.map((cat, catIdx) => (
                  <div key={catIdx} className="skills-category-group">
                    <span className="category-name">{cat.name}</span>
                    <ul className="skills-list">
                      {cat.items.map((item, itemIdx) => {
                        const currentRefIdx = skillFlatIndex++;
                        return (
                          <li 
                            key={itemIdx} 
                            ref={(el) => (skillsRefs.current[currentRefIdx] = el)}
                            className="skill-badge-item"
                          >
                            <img 
                              src={`https://cdn.simpleicons.org/${item.slug}`} 
                              alt={item.name} 
                              className="skill-logo"
                              loading="lazy"
                            />
                            <span>{item.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;