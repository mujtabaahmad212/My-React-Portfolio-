import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import "./App.css";
import Navbar2 from "./components/Navbar2.jsx";
import AnimatedRoutes from "./AnimatedRoutes.jsx";
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);
  const location = useLocation();

  // Initialize smooth scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle scroll restoration and height recalculations on route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      // Resize Lenis after rendering
      setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.resize();
        }
      }, 100);
    }
  }, [location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer); 
  }, []);

  return (
    // We use a React Fragment (<>) instead of <BrowserRouter>
    <>
      <div className="relative min-h-screen w-full">
        <Navbar2 />
        <AnimatedRoutes />
      </div>

      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
    </>
  );
}

export default App;