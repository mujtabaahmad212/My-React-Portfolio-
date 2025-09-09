import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Star, Eye, Calendar, Code, Palette, Smartphone } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

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
    { key: "all", label: "All Projects", icon: Code },
    { key: "react", label: "React", icon: Code },
    { key: "frontend", label: "Frontend", icon: Palette },
    { key: "javascript", label: "JavaScript", icon: Smartphone }
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
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
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
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-header">
            <h1 className="hero-title">Featured Projects</h1>
            <p className="hero-description">
              Showcasing my latest and most innovative projects
            </p>
          </div>

          {/* Featured Projects Carousel */}
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`carousel-slide ${
                    index === currentSlide ? "active" : ""
                  }`}
                >
                  <div className="carousel-content">
                    <div className="carousel-image">
                      <img src={project.image} alt={project.title} />
                      <div className="carousel-overlay"></div>
                    </div>
                    <div className="carousel-info">
                      <div className="featured-badge">
                        <Star className="star-icon" />
                        <span>Featured</span>
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
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            <Eye size={18} />
                            Live Demo
                          </a>
                        )}
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          <Github size={18} />
                          Repository
                        </a>
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
            <h2>All Projects</h2>
            <p>Explore my complete portfolio of web development projects</p>

            {/* Filter Buttons */}
            <div className="filter-buttons">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`filter-btn ${
                      activeFilter === filter.key ? "active" : ""
                    }`}
                  >
                    <IconComponent size={18} />
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
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-buttons">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="overlay-btn"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overlay-btn"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Featured Badge */}
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

                  {/* Action Buttons */}
                  <div className="project-actions">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn primary"
                      >
                        <Eye size={16} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn secondary"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-content">
          <div className="stat-item">
            <div className="stat-number">{projects.length}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies Used</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Responsive Design</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Available Online</div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-wrapper {
          min-height: 100vh;
          background: #0a0a0a;
          color: #ffffff;
          font-family: 'Arial', sans-serif;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 80px 0;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .hero-content {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          z-index: 1;
        }

        .hero-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #4a9eff, #0066cc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          color: #cccccc;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Carousel */
        .carousel-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .carousel-wrapper {
          position: relative;
          height: 500px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .carousel-slide.active {
          opacity: 1;
        }

        .carousel-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
        }

        .carousel-info {
          position: relative;
          z-index: 10;
          padding: 40px;
          max-width: 500px;
        }

        .featured-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffd700;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .star-icon {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        .carousel-info h3 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .carousel-info p {
          color: #dddddd;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }

        .tech-tag {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .carousel-buttons {
          display: flex;
          gap: 15px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #0066cc;
          color: white;
        }

        .btn-primary:hover {
          background: #0052a3;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }

        .carousel-prev {
          left: 20px;
        }

        .carousel-next {
          right: 20px;
        }

        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: #0066cc;
          width: 30px;
          border-radius: 6px;
        }

        /* All Projects Section */
        .all-projects-section {
          padding: 80px 0;
          background: #111111;
        }

        .all-projects-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .section-header p {
          font-size: 1.1rem;
          color: #cccccc;
          max-width: 600px;
          margin: 0 auto 40px;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 50px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: none;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.1);
          color: #cccccc;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .filter-btn.active {
          background: #0066cc;
          color: white;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .project-card {
          background: #1a1a1a;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.5s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-buttons {
          display: flex;
          gap: 15px;
        }

        .overlay-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .overlay-btn:hover {
          background: #0066cc;
          transform: scale(1.1);
        }

        .project-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: rgba(255, 215, 0, 0.9);
          color: #000;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .project-info {
          padding: 25px;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .project-header h3 {
          font-size: 1.3rem;
          font-weight: bold;
          color: #ffffff;
          margin: 0;
        }

        .project-year {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #999;
          font-size: 0.9rem;
        }

        .project-description {
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tech-pill {
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          font-size: 0.8rem;
          color: #ccc;
        }

        .project-actions {
          display: flex;
          gap: 10px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          flex: 1;
          transition: all 0.3s ease;
        }

        .action-btn.primary {
          background: #0066cc;
          color: white;
        }

        .action-btn.primary:hover {
          background: #0052a3;
          transform: translateY(-2px);
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #ccc;
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          transform: translateY(-2px);
        }

        /* Stats Section */
        .stats-section {
          padding: 60px 0;
          background: #0f0f0f;
        }

        .stats-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .stat-item {
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: scale(1.05);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #0066cc;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #cccccc;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .carousel-wrapper {
            height: 400px;
          }

          .carousel-info {
            padding: 20px;
          }

          .carousel-info h3 {
            font-size: 1.8rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .filter-buttons {
            justify-content: center;
          }

          .filter-btn {
            font-size: 0.9rem;
            padding: 10px 16px;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
          }

          .carousel-prev {
            left: 10px;
          }

          .carousel-next {
            right: 10px;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-section,
          .all-projects-section {
            padding: 40px 0;
          }

          .hero-title {
            font-size: 2rem;
          }

          .carousel-info h3 {
            font-size: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;