import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Navbar2.css";

const Navbar2 = () => {
  const navbarRef = useRef(null);
  const ulnavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks2 = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Services", path: "/services" },
    { id: 4, title: "Projects", path: "/projects" },
    { id: 5, title: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    if (!isOpen) {
      gsap.to(navbarRef.current, { height: 100, duration: 0.3 });
      gsap.to(navbarRef.current, { width: "60%", duration: 0.4, delay: 0.1 });
      gsap.to(ulnavRef.current, { opacity: 1, duration: 0.2, delay: 0.3 });
    } else {
      closeMenu();
    }
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    gsap.to(ulnavRef.current, { opacity: 0, duration: 0.0 });
    gsap.to(navbarRef.current, { width: 100, duration: 0.3, delay: 0.2 });
    gsap.to(navbarRef.current, { height: 40, duration: 0.3, delay: 0.5 });
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setTimeout(() => {
        closeMenu();
      }, 900); // Delay in ms - adjust based on your page transition duration
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar-container">
      <div className="navbar2" ref={navbarRef}>
        <div className="navmanu2">
          <div className="menubutton2" onClick={toggleMenu}>
            Menu
          </div>

          <ul className="ulnav" ref={ulnavRef} style={{ opacity: 0 }}>
            {navLinks2.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="bg-amber-300 text-6xl"
                  onClick={handleLinkClick}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
