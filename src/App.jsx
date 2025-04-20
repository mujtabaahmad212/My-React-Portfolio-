import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
function App() {
  return (
    
      <div className="">
      <Navbar className="  " />
    
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
      </div>
    
   
  );
}

export default App;
