// Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star, Eye, Calendar, Code, Palette, Smartphone } from "lucide-react";
import "./Projects.css"; // Import the new stylesheet

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample project data (replace with your actual projects)
  const projects = [
    {
      id: 1,
      title: "Coffee Shop Website",
      description: "A sleek and fully responsive website with smooth animations using HTML, CSS, and JavaScript. Features include interactive menu, order system, and location finder.",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=300&fit=crop",
      liveLink: "https://mujtabaahmad212.github.io/responsive--COFFEE-SHOP-website/",
      repoLink: "https://github.com/mujtabaahmad212/responsive--COFFEE-SHOP-website",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Book Shop Website",
      description: "A fully responsive Book Shop Website designed using HTML and CSS with modern UI/UX principles and interactive book catalog.",
      category: "frontend",
      technologies: ["HTML", "CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      liveLink: "https://mujtabaahmad212.github.io/responsive-book-store-website/",
      repoLink: "https://github.com/mujtabaahmad212/responsive-book-store-website",
      featured: false,
      year: "2024"
    },
    {
      id: 3,
      title: "E-commerce Dashboard",
      description: "A React-based dashboard for e-commerce management with real-time data visualization, analytics, and inventory management.",
      category: "react",
      technologies: ["React", "JavaScript", "Dashboard"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      repoLink: "https://github.com/mujtabaahmad212/ecommerce-dashboard",
      featured: true,
      year: "2024"
    },
    {
      id: 4,
      title: "Interactive Quiz Game",
      description: "Fully Interactive quiz app where users can solve questions, track scores, and compete with others. Features multiple categories and difficulty levels.",
      category: "javascript",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
      liveLink: "https://mujtabaahmad212.github.io/Interactive-Quiz-Game/",
      repoLink: "https://github.com/mujtabaahmad212/Interactive-Quiz-Game",
      featured: false,
      year: "2024"
    },
    {
      id: 5,
      title: "Online Shop - D Collection",
      description: "A React-based online shop with product listings, shopping cart, user authentication, and payment integration.",
      category: "react",
      technologies: ["React", "E-commerce", "API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveLink: "https://d-collection.vercel.app/",
      repoLink: "https://github.com/mujtabaahmad212/D.Collection-project",
      featured: true,
      year: "2024"
    },
    {
      id: 6,
      title: "Virtual Pet Application",
      description: "A fun virtual pet application with caretaking mechanics, feeding system, and interactive animations built with vanilla JavaScript.",
      category: "javascript",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=300&fit=crop",
      liveLink: "https://mujtabaahmad212.github.io/classTask-06/",
      repoLink: "https://github.com/mujtabaahmad212/classTask-06",
      featured: false,
      year: "2024"
    }
  ];

  const filters = [
    { key: "all", label: "ALL", icon: Code },
    { key: "react", label: "REACT", icon: Code },
    { key: "frontend", label: "FRONTEND", icon: Palette },
    { key: "javascript", label: "JAVASCRIPT", icon: Smartphone }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  // Auto-rotate featured projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.project-card, .stat-item, .section-header');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [filteredProjects]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="projects-wrapper">
      {/* Hero Section with Featured Projects Carousel */}
      <section className="hero-section">
        <div className="hero-overlay-grid"></div>
        <div className="hero-content">
          <div className="hero-header">
            <h1 className="hero-title">FEATURED PROJECTS</h1>
            <p className="hero-description">
              // Primary directives and high-priority deployments
            </p>
          </div>

          {/* Featured Projects Carousel */}
          <div className="carousel-container">
            <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {featuredProjects.map((project) => (
                <div key={project.id} className="carousel-slide">
                  <div className="carousel-content">
                    <div className="carousel-image">
                      <img src={project.image} alt={project.title} />
                      <div className="carousel-overlay-vignette"></div>
                    </div>
                    <div className="carousel-info">
                      <div className="featured-badge">
                        <Star className="star-icon" />
                        <span>PRIORITY_ONE</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tech-tags">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="carousel-buttons">
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <Eye size={18} />
                            VIEW_LIVE
                          </a>
                        )}
                        {/* <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                          <Github size={18} />
                          VIEW_CODE
                        </a> 
                        */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button onClick={prevSlide} className="carousel-btn carousel-prev">
              <ChevronLeft />
            </button>
            <button onClick={nextSlide} className="carousel-btn carousel-next">
              <ChevronRight />
            </button>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`indicator ${index === currentSlide ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="all-projects-section">
        <div className="all-projects-content">
          <div className="section-header">
            <h2>PROJECT_ARCHIVE</h2>
            

            {/* Filter Buttons */}
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

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Project Image */}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-buttons">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {/* <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                        <Github size={20} />
                      </a> 
                      */}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="project-badge">
                      <Star size={14} />
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-year">
                      <Calendar size={14} />
                      {project.year}
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-header">
            <h2>SYSTEM_METRICS</h2>
        </div>
        <div className="stats-content">
          <div className="stat-item">
            <div className="stat-number">{projects.length < 10 ? `0${projects.length}` : projects.length}+</div>
            <div className="stat-label">PROJECTS_COMPLETED</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">TECHNOLOGIES_MASTERED</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">RESPONSIVE_DESIGN</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">365</div>
            <div className="stat-label">DAYS_ONLINE</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;