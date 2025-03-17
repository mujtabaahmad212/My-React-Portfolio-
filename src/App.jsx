import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
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
