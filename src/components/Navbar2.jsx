// Navbar2.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar2.css";
import mylogo from "../assets/images/mylogo.jpeg";

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const mobileMenuBtnRef = useRef(null);

  const navLinks = [
    { id: 1, title: "HOME", path: "/" },
    { id: 2, title: "ABOUT", path: "/about" },
    { id: 3, title: "SERVICES", path: "/services" },
    { id: 4, title: "PROJECTS", path: "/projects" },
    { id: 5, title: "CONTACT", path: "/contact" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll Effect: Compacts the navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click Outside Handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        mobileMenuBtnRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !mobileMenuBtnRef.current.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close on Route Change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <nav className={`cyber-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        
        {/* Logo Area */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
          <div className="logo-frame">
            <img src={mylogo} alt="Logo" className="logo-img" />
          </div>
          <span className="brand-text">
            DEV<span className="brand-dot">.</span>IO
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                data-text={link.title} // Used for the glitch effect
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle (The Hamburger) */}
        <button
          ref={mobileMenuBtnRef}
          className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="bar top"></span>
          <span className="bar mid"></span>
          <span className="bar bot"></span>
        </button>

        {/* Mobile Overlay */}
        <div
          ref={mobileMenuRef}
          className={`mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div className="overlay-grid"></div> {/* Decorative background grid */}
          <ul className="mobile-list">
            {navLinks.map((link, index) => (
              <li 
                key={link.id} 
                style={{ transitionDelay: `${index * 0.1}s` }} // Staggered animation
              >
                <Link
                  to={link.path}
                  className={`mobile-link ${location.pathname === link.path ? "active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  <span className="link-index">0{index + 1} //</span>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;