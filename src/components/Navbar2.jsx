// Navbar2.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(20px at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 35,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 25,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -30, filter: "blur(8px)" },
    open: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <nav className={`cyber-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        {/* Logo Area */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
          <div className="logo-frame">
            <img src={mylogo} alt="Logo" className="logo-img" draggable="false" onContextMenu={(e) => e.preventDefault()} />
          </div>
          <span className="brand-text">
            Mujtaba<span className="brand-dot">.</span>IO
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                data-text={link.title}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile & Tablet Hamburger Button */}
        <motion.button
          ref={mobileMenuBtnRef}
          whileTap={{ scale: 0.9 }}
          className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="bar top"></span>
          <span className="bar mid"></span>
          <span className="bar bot"></span>
        </motion.button>
      </div>

      {/* Mobile & Tablet Fullscreen Animated Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="mobile-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="overlay-grid"></div>
            <div className="overlay-glow-orb"></div>

            <div className="mobile-menu-wrapper">
              <motion.div className="mobile-menu-header" variants={itemVariants}>
                <span className="menu-hud-tag">// NAVIGATION</span>
                <span className="menu-status-dot"></span>
              </motion.div>

              <motion.ul className="mobile-list">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.li key={link.id} variants={itemVariants}>
                      <Link
                        to={link.path}
                        className={`mobile-link ${isActive ? "active" : ""}`}
                        onClick={closeMobileMenu}
                      >
                        <span className="link-index">0{index + 1}</span>
                        <span className="link-slash">//</span>
                        <span className="link-title-text">{link.title}</span>
                        {isActive && <span className="active-pill-dot" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <motion.div className="mobile-menu-footer" variants={itemVariants}>
                <div className="footer-status">
                  <span className="pulse-indicator"></span>
                  <span className="status-label">AVAILABLE FOR FREELANCE</span>
                </div>
                <div className="social-mini-links">
                  <span>GITHUB</span>
                  <span>LINKEDIN</span>
                  <span>TWITTER</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar2;
