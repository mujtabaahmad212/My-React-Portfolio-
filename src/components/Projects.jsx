// Projects.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Projects.css";
// import netfliximg from "../assets/images/projects img/netflix.png";
import coffeeimg from "../assets/images/projects img/coffeeimg.png";
import bookshopimg from "../assets/images/projects img/bookshopimg.png";
import quizimg from "../assets/images/projects img/quizimg.png";
import petimg from "../assets/images/projects img/petimg.png";
import logiinmg from "../assets/images/projects img/logiinmg.png";
import techshopimg from "../assets/images/projects img/techshopimg.png";
import ecommerce from "../assets/video/ecommerce.mp4"
import starimg from "../assets/images/projects img/icons8-star-50.png"

const Projects = () => {
  const projectsRef = useRef(null);
  const reactProjectsRef = useRef(null);

  useEffect(() => {
    // HTML/CSS/JS Projects animation
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // React Projects animation and tilt effect
    gsap.utils.toArray(".react-project-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const card3d = card.querySelector('.card-3d');
      
      card.addEventListener('mousemove', (e) => {
        const rect = card3d.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        gsap.to(card3d, {
          rotationX: -rotateX,
          rotationY: rotateY,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card3d, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const htmlCssJsProjects = [
    {
      title: "Coffee Shop Website",
      description: "A sleek and fully responsive website with smooth animations using HTML, CSS, and JavaScript.",
      image: coffeeimg,
      liveLink: "https://mujtabaahmad212.github.io/responsive--COFFEE-SHOP-website/",
      repoLink: "https://github.com/mujtabaahmad212/responsive--COFFEE-SHOP-website?authuser=1",
      star: true,
    },
    {
      title: "Book Shop Website",
      description: "A fully responsive Book Shop Website designed using HTML and CSS",
      image: bookshopimg,
      liveLink: "https://mujtabaahmad212.github.io/responsive-book-store-website/?authuser=1",
      repoLink: "https://github.com/mujtabaahmad212/responsive-book-store-website?authuser=1",
      blue: true,
    },
    {
      title: "Responsive Login Page",
      description: "Fully responsive and animated Login landing page using HTML and CSS",
      image: logiinmg,
      liveLink: "https://mujtabaahmad212.github.io/home-task-3-login--page/",
      repoLink: "https://github.com/mujtabaahmad212/home-task-3-login--page?authuser=1",
    },
    {
      title: "Product Shop Website",
      description: "Responsive Tech Shop Website design using HTML and CSS",
      image: techshopimg,
      liveLink: "https://mujtabaahmad212.github.io/full-responsive-mobile-shop-web/",
      repoLink: "https://github.com/mujtabaahmad212/full-responsive-mobile-shop-web?authuser=1",
      blue: true,
    },
    {
      title: "Virtual Pet!",
      description: "Developed a simple virtual pet application featuring basic caretaking mechanics using HTML, CSS, JavaScript",
      image: petimg,
      liveLink: "https://mujtabaahmad212.github.io/classTask-06/?authuser=1",
      repoLink: "https://github.com/mujtabaahmad212/classTask-06?authuser=1",
    },
    {
      title: "Interactive Quiz Game",
      description: "Fully Interactive quiz app where user can solve questions and try again when fails",
      image: quizimg,
      liveLink: "https://mujtabaahmad212.github.io/Interactive-Quiz-Game/?authuser=1",
      repoLink: "https://github.com/mujtabaahmad212/Interactive-Quiz-Game?authuser=1",
      blue: true,
    },
    // {
    //   title: "Netflix Clone",
    //   description: 'Netflix Website fully designed via HTML and CSS "Login to main Home page" (Not responsive)',
    //   image: netfliximg,
    //   liveLink: "https://mujtabaahmad212.github.io/Netflix-Clone-Website/",
    //   repoLink: "https://github.com/mujtabaahmad212/Netflix-Clone-Website.git",
    // },
  ];

  const reactProjects = [
    // {
    //   title: "Portfolio Website",
    //   description: "A modern portfolio website built with React, featuring GSAP animations and responsive design.",
    //   video: "./videos/portfolio-preview.mp4",
    //   repoLink: "https://github.com/mujtabaahmad212/portfolio-react",
    // },
    {
      title: "E-commerce Dashboard",
      description: "A React-based dashboard for e-commerce management with real-time data visualization.",
      video: ecommerce,
      repoLink: "https://github.com/mujtabaahmad212/ecommerce-dashboard",
    },
    // {
    //   title: "Task Manager",
    //   description: "A task management application built with React and local storage functionality.",
    //   video: "./videos/taskmanager-preview.mp4",
    //   repoLink: "https://github.com/mujtabaahmad212/task-manager-react",
    // },
  ];

  return (
    <>
      {/* HTML/CSS/JS Projects Section */}
      <section className="projects" id="projects" ref={projectsRef}>
        <div className="projects-container">
          <h1>HTML/CSS/JS Projects</h1>
          <div className="projects-grid">
            {htmlCssJsProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card ${project.blue ? "blue-bg" : ""}`}
              >
               
                <div className="card-3d">
                {project.star && (
                  <img
                    src={starimg}
                    className="star"
                    alt="star"
                  />
                )}
                  <div className="card-front">
                    <img src={project.image} alt={`${project.title} preview`} />
                  </div>
                  <div className="card-back">
                    <div className="project-info">
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                      <div className="links">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="live-link"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="repo-link"
                        >
                          Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* React Projects Section */}
      <section className="react-projects" id="react-projects" ref={reactProjectsRef}>
        <div className="react-projects-container">
          <h1>React Projects</h1>
          <div className="react-projects-grid">
            {reactProjects.map((project, index) => (
              <div key={index} className="react-project-card">
                <div className="video-card-3d">
                  <div className="card-front">
                    <video autoPlay muted loop playsInline controls >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="card-back">
                    <div className="project-info">
                      <h2>{project.title}</h2>
                      <p>{project.description}</p>
                      <div className="links">
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="repo-link"
                        >
                          Repository
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;