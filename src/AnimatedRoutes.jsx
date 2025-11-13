// AnimatedRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Import your components
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// 1. Reusable Wrapper Component with Screen Wipe Logic
const AnimatedPage = ({ children }) => (
  <motion.div
    // This wrapper div just handles the component's presence
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ position: 'absolute', width: '100%', top: 0 }}
  >
    {/* The page content */}
    {children}

    {/* OVERLAY 1: For Page ENTER */}
    <motion.div
      className="transition-overlay"
      variants={{
        initial: { x: 0 }, // Start ON-screen (covering the new page)
        animate: { x: "100%", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 } } // Slide OFF-screen
      }}
    />

    {/* OVERLAY 2: For Page EXIT */}
    <motion.div
      className="transition-overlay"
      // Start this overlay off-screen to the left
      style={{ left: "-100%" }}
      variants={{
        initial: null, // No initial/animate state
        exit: { x: "100%", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } // Slide ON-screen
      }}
    />
    
    {/* We add the CSS for the overlay here.
      It uses your theme's 'neon-green' variable.
    */}
    <style>{`
      .transition-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: var(--neon-green, #00ff9d);
        z-index: 9999;
        pointer-events: none;
      }
    `}</style>
  </motion.div>
);

// 2. Use the Wrapper in Your Routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // This relative parent is crucial for the absolute positioning
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          <Route
            path="/"
            element={
              <AnimatedPage>
                <Home />
              </AnimatedPage>
            }
          />

          <Route
            path="/about"
            element={
              <AnimatedPage>
                <AboutMe />
              </AnimatedPage>
            }
          />

          <Route
            path="/services"
            element={
              <AnimatedPage>
                <Services />
              </AnimatedPage> 
            }
          />

          <Route
            path="/projects"
            element={
              <AnimatedPage>
                <Projects />
              </AnimatedPage>
            }
          />

          <Route
            path="/contact"
            element={
              <AnimatedPage>
                <Contact />
              </AnimatedPage>
            }
          />

        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;