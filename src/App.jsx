import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar.jsx";
import Navbar2 from "./components/Navbar2.jsx";
import AnimatedRoutes from "./AnimatedRoutes.jsx";

function App() {
  return (
    <div className="relative min-h-screen w-full">
      {/* <Navbar className=" " /> */}
      <Navbar2 />
      <AnimatedRoutes />
    </div>
  );
}

export default App;