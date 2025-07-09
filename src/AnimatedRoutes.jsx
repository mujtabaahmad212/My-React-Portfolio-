import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const slideAnimation = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route
          path="/"
          element={
            <motion.div
              initial={slideAnimation.initial}
              animate={slideAnimation.animate}
              exit={slideAnimation.exit}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div
              initial={slideAnimation.initial}
              animate={slideAnimation.animate}
              exit={slideAnimation.exit}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ position: "absolute", width: "100%" }}
            >
              <AboutMe />
            </motion.div>
          }
        />

        <Route
          path="/services"
          element={
            <motion.div
              initial={slideAnimation.initial}
              animate={slideAnimation.animate}
              exit={slideAnimation.exit}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Services />
            </motion.div>
          }
        />

        <Route
          path="/projects"
          element={
            <motion.div
              initial={slideAnimation.initial}
              animate={slideAnimation.animate}
              exit={slideAnimation.exit}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Projects />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div
              initial={slideAnimation.initial}
              animate={slideAnimation.animate}
              exit={slideAnimation.exit}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ position: "absolute", width: "100%" }}
            >
              <Contact />
            </motion.div>
          }
        />

      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
