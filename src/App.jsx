// App.jsx

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import Navbar2 from "./components/Navbar2.jsx";
import AnimatedRoutes from "./AnimatedRoutes.jsx";
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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