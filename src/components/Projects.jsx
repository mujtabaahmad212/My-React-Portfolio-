// Projects.jsx - Smooth Animated Stacking (Fixed for Vercel)
import React, { useState, useRef } from "react";
import { ExternalLink, Star, Calendar, Code, Palette, Smartphone } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Projects.css";

import simsImg from "../assets/images/projects img/SIMS.png";
import todoImg from "../assets/images/projects img/todo-list-app.png";
import ecommerceImg from "../assets/images/projects img/e-commerce.png";
import devbazmImg from "../assets/images/projects img/Devbazm.png";
import coffeeImg from "../assets/images/projects img/coffee-shop.png";
import dCollectionImg from "../assets/images/projects img/d-collection.png";
import fruitCatcherImg from "../assets/images/projects img/fruit-catcher-game.png";
import portfolioImg from "../assets/images/projects img/portfolio-website.png";


const projects = [
  {
    id: 4,
    title: "Devbazm - Developer Platform",
    description: "A modern developer platform and community hub for sharing knowledge, collaborating on projects, and connecting with fellow developers. Features include project showcases and resource sharing.",
    category: "react",
    technologies: ["React", "Node.js", "Firebase", "API"],
    image: devbazmImg,
    liveLink: "https://orbizion.vercel.app/",
    featured: true,
    year: "2025"
  },
  {
    id: 7,
    title: "My Portfolio Website",
    description: "A modern, highly interactive portfolio website features 3D elements, smooth animations, and a responsive design to showcase projects and skills.",
    category: "react",
    technologies: ["React", "Three.js", "Framer Motion", "GSAP"],
    image: portfolioImg,
    liveLink: "https://my-react-portfolio-953v.vercel.app/",
    repoLink: "https://github.com/mujtabaahmad212/My-React-Portfolio-",
    featured: true,
    year: "2025"
  },
  {
    id: 1,
    title: "SIMS - Security Incident Management System",
    description: "A comprehensive security incident management system built with modern web technologies. Features include incident reporting, tracking, threat analysis, and administrative tools.",
    category: "react",
    technologies: ["React", "Database", "API", "Dashboard"],
    image: simsImg,
    liveLink: "https://fyp-sand-ten.vercel.app/viewer",
    featured: true,
    year: "2025"
  },
  {
    id: 2,
    title: "Todo List Application",
    description: "A feature-rich todo list app where users can add, edit, delete, and organize tasks efficiently. Features include task filtering, local storage, and a clean, intuitive interface.",
    category: "javascript",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
    image: todoImg,
    liveLink: "https://mujtabaahmad212.github.io/todo-list-app/",
    featured: true,
    year: "2024"
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description: "A fully responsive e-commerce platform with product listings, shopping cart, user authentication, and modern UI/UX design. Built with React and integrated payment system.",
    category: "react",
    technologies: ["React", "E-commerce", "API", "CSS"],
    image: ecommerceImg,
    liveLink: "https://mddecommerce.vercel.app/",
    featured: true,
    year: "2025"
  },
  {
    id: 3,
    title: "D Collection",
    description: "A personal brand of cosmetic, watches, perfumes, and medical product base selling website. Features product listings, shopping cart, and user classes.",
    category: "react",
    technologies: ["React", "E-commerce", "API", "CSS"],
    image: dCollectionImg,
    liveLink: "https://d-collection.vercel.app/",
    featured: true,
    year: "2025"
  },
  {
    id: 8,
    title: "Fruit Catcher Game",
    description: "An interactive and fun fruit catcher game built with JavaScript. Features include score tracking, increasing difficulty levels, and sound effects.",
    category: "javascript",
    technologies: ["JavaScript", "HTML", "CSS", "Game Design"],
    image: fruitCatcherImg,
    liveLink: "https://fruit-catch-game.vercel.app/",
    featured: true,
    year: "2024"
  },
  {
    id: 5,
    title: "Coffee Shop Website",
    description: "A sleek and fully responsive coffee shop website with smooth animations using HTML, CSS, and JavaScript. Features include interactive menu, order system, and location finder.",
    category: "frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: coffeeImg,
    liveLink: "https://mujtabaahmad212.github.io/responsive--COFFEE-SHOP-website/",
    repoLink: "https://github.com/mujtabaahmad212/responsive--COFFEE-SHOP-website",
    featured: true,
    year: "2025"
  }
];

const ProjectCard = ({ project, index, range, targetScale, progress }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Parallax for text content
  const yContent = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <div ref={container} className="project-stack-item">
      <motion.div
        className="stack-card"
        style={{
          scale,
          top: `calc(5vh + ${index * 25}px)` // Distribute tops slightly
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className="card-grid">

          {/* Image Side */}
          <div className="card-image-section">
            <motion.div
              className="image-wrapper"
              style={{ scale: imageScale, height: '100%' }}
            >
              <img src={project.image} alt={project.title} />
              <div className="image-gradient"></div>
            </motion.div>

            {project.featured && (
              <motion.div
                className="featured-badge"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Star size={14} />
                Featured
              </motion.div>
            )}
          </div>

          {/* Info Side */}
          <div className="card-info-section">
            <motion.div
              className="info-content-wrapper"
              style={{ y: yContent }}
            >
              <div className="info-header">
                <h2 className="project-title">{project.title}</h2>
                <div className="project-year">
                  <Calendar size={14} />
                  {project.year}
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={18} />
                  VIEW PROJECT
                </a>
              )}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const filters = [
    { key: "all", label: "ALL", icon: Code },
    { key: "react", label: "REACT", icon: Code },
    { key: "frontend", label: "FRONTEND", icon: Palette },
    { key: "javascript", label: "JAVASCRIPT", icon: Smartphone }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-wrapper" ref={container}>
      {/* Header Section */}
      <section className="projects-header">
        <div className="header-content">
          <motion.h1
            className="main-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SELECTED_PROJECTS
          </motion.h1>
          <p className="subtitle">// Selected works and experiments</p>

          <div className="filter-buttons">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
                >
                  <IconComponent size={16} />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stacking Section */}
      <section className="stacking-section">
        {filteredProjects.map((project, index) => {
          const targetScale = 1 - ((filteredProjects.length - index) * 0.05);
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-header">
          <h2>SYSTEM_METRICS</h2>
        </div>
        <div className="stats-content">
          <div className="stat-item">
            <div className="stat-number">{projects.length < 10 ? `0${projects.length}` : projects.length}+</div>
            <div className="stat-label">PROJECTS</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">TECH STACK</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">RESPONSIVE</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">365</div>
            <div className="stat-label">ONLINE</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;