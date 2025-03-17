import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  const navbarRef = useRef(null);
  const navItemsRef = useRef([]);

  useGSAP(() => {
    // Initial setup
    gsap.set(".Navbar", { height: "0px", opacity: 0 });
  }, []);

  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleNavbar = () => {
    setIsExpanded(!isExpanded);
    animateNavbar(!isExpanded);
  };

  const handleLinkClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
      animateNavbar(false);
    }
  };

  const animateNavbar = (isOpening) => {
    const tl = gsap.timeline();

    if (isOpening) {
      tl.to(".Navbar", {
        height: "300px",
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      }).fromTo(
        navItemsRef.current,
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    } else {
      tl.to(navItemsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      }).to(
        ".Navbar",
        {
          height: "0px",
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
        },
        "-=0.2"
      );
    }
  };

  const Contactlink = [
    {
      id: 1,
      title: "Contact",
      path: "/contact",
    },
  ];
  const Navlinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
    },
    {
      id: 4,
      title: "Projects",
      path: "/Projects",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center text-black navbar">
        <div
          ref={navbarRef}
          className="Navbar flex justify-center items-center backdrop-blur-sm text-black absolute top-0 rounded-2xl w-[95%] z-20 overflow-hidden bg-[#f2f2f291]"
        >
          <ul>
            {Navlinks.map((link, index) => (
              <li
                key={link.id}
                ref={(el) => (navItemsRef.current[index] = el)}
              >
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className="hover:bg-[#6a6a6a5e] px-[30px] py-[5px] rounded-2xl transition-all duration-500 block"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[95%] h-12 rounded-2xl z-20 absolute top-0 text-black flex justify-between items-center">
          <h1 className="logoname" style={{ marginLeft: "10px" }}>
            Mujtaba
          </h1>
          <button
            className="Menu bg-[#686868] w-32 h-1 hover:bg-[#000000] text-center text-black cursor-pointer hover:w-42 transition-all duration-700 capitalize hover:font-bold"
            style={{ borderRadius: "10px" }}
            onClick={handleNavbar}
          >
            menu
          </button>
          <nav className="text-black" style={{ marginRight: "10px" }}>
            <ul>
              {Contactlink.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;