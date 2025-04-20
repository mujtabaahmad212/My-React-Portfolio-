import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";

import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Services from "./Components/Services.jsx";
import Projects from "./Components/Projects.jsx";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
