import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import { Link } from "react-router-dom";

import callicone from "../assets/images/contact imgs/call_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import mailicone from "../assets/images/contact imgs/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import linkedinicone from "../assets/images/contact imgs/icons8-linkedin.svg";
import githubicone from "../assets/images/contact imgs/icons8-github.svg";
import instagramicone from "../assets/images/contact imgs/icons8-instagram.svg";

const Contact = () => {

 const NaviContaact = [
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
    <div className="main">
      <div className="connect">
        <p className="contact2"> CONTACT</p>
        <p className="contactmeon">CONTACT ME ON</p>
        <div className="sociallinks2">
          <a target="_blank" href="mailto:mujtabaahmad4200@gmail.com">
            {" "}
            EMAIL
          </a>
          <br />
          <a
            href="https://www.instagram.com/mujtaba212__/"
            target="_blank"
            className=""
          >
            INSTAGRAM
          </a>
          <br />
          <a
            href="https://www.instagram.com/mujtaba212__/"
            target="_blank"
            className=""
          >
            LINKEDIN
          </a>
        </div>
      </div>

      {/* section b */}

      <div className="main-call">
        <div className="bookCall">
          <p className="bookCallp1">BOOK A CALL</p>
          <h1 className="bookCallh1">Ready to Transform Your Vision?</h1>
          <p className="bookCallp2">
            Let’s discuss how I can bring your ideas to life. Book a quick call
            with me, and I’ll guide you through the next steps.
          </p>

          <a className="bookwa" href="https://wa.me/923161900577">
            BOOK A CALL
          </a>
        </div>
      </div>

      {/* section c */}

      <div className="nav&add">
        <div className="addr">
          <p>
          
            HOSTLE 6 THE UNIVERSITY OF AGRICULTUR PESHAWAR <br />
            <a target="_blank" href="mailto:mujtabaahmad4200@gmail.com">
              EMAIL
            </a>

          </p>
        </div>

        <div className="navi">
       
      {/* <Routes>
        {NaviContaact.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} /> 
        ))}
      </Routes> */}

       <nav>
      {NaviContaact.map(({ id, title, path }) => (
        <Link key={id} to={path} style={{ margin: "0 10px" }}>
          {title}
        </Link>
      ))}
    </nav>
   
        </div>
      </div>
    </div>
  );
};

// gsap.registerPlugin(ScrollTrigger);

// const Contact = () => {
//   const contactRef = useRef(null);
//   const headerRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     const contactSection = contactRef.current;
//     const header = headerRef.current;
//     const items = itemsRef.current;

//     // Header animation
//     gsap.fromTo(header,
//       {
//         opacity: 0,
//         y: -50,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: 'back.out',
//         scrollTrigger: {
//           trigger: contactSection,
//           start: 'top 80%',
//         }
//       }
//     );

//     // Contact items animation with stagger
//     items.forEach((item, index) => {
//       gsap.fromTo(item,
//         {
//           opacity: 0,
//           y: 50,
//           scale: 0.95,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: item,
//             start: 'top 90%',
//             toggleActions: 'play none none reverse',
//           },
//           delay: index * 0.2 // Stagger effect
//         }
//       );

//       // Hover animation
//       item.addEventListener('mouseenter', () => {
//         gsap.to(item, {
//           scale: 1.05,
//           duration: 0.3,
//           ease: 'back.out'
//         });
//       });

//       item.addEventListener('mouseleave', () => {
//         gsap.to(item, {
//           scale: 1,
//           duration: 0.3,
//           ease: 'back.out'
//         });
//       });
//     });

//     // Social icons animation
//     const socialIcons = contactSection.querySelectorAll('.social a');
//     gsap.fromTo(socialIcons,
//       {
//         opacity: 0,
//         scale: 0,
//       },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: 0.1,
//         ease: 'back.out(1.7)',
//         scrollTrigger: {
//           trigger: '.social',
//           start: 'top 90%',
//         }
//       }
//     );

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <div id="contact" className="sec-contact" ref={contactRef}>
//       <div className="contact-container">
//         <div className="contact-header" ref={headerRef}>
//           <h1>
//             Contact Info
//           </h1>
//           <p>let's connect</p>
//         </div>

//         <div className="contact-content">
//           <a
//             href="https://wa.me/1234567890"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="phone"
//             ref={el => itemsRef.current[0] = el}
//           >
//             <div className="phone-icon">
//               <img
//                 src={callicone}
//                 alt="Phone icon"
//               />
//             </div>
//             <div className="phone-text">
//               <h1>Phone</h1>
//               <p>+923161900577</p>
//             </div>
//           </a>

//           <a
//             href="mailto:mujtaba212creater@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="email"
//             ref={el => itemsRef.current[1] = el}
//           >
//             <div className="email-icon">
//               <img
//                 src={mailicone}
//                 alt="Email icon"
//               />
//             </div>
//             <div className="email-text">
//               <h1>Email</h1>
//               <p>mujtaba212creater@gmail.com</p>
//             </div>
//           </a>

//           {/* <a
//             href="https://maps.app.goo.gl/1swFhqHeuz8QafvDA"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="address"
//             ref={el => itemsRef.current[2] = el}
//           >
//             <div className="address-icon">
//               <img
//                 src={}
//                 alt="Address icon"
//               />
//             </div>
//             <div className="address-text">
//               <h1>address</h1>
//               <p>123 Street, City, Country</p>
//             </div>
//           </a> */}

//           <div className="social">
//             <a href="https://www.linkedin.com/in/mujtaba-ahmad-254b4625a/" target="_blank" rel="noopener noreferrer">
//               <img src={linkedinicone} alt="LinkedIn" />
//             </a>
//             <a href="https://www.instagram.com/mujtaba212__/" target="_blank" rel="noopener noreferrer">
//               <img src={instagramicone} alt="Instagram" />
//             </a>
//             <a href="https://github.com/mujtabaahmad212/" target="_blank" rel="noopener noreferrer">
//               <img src={githubicone} alt="GitHub" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Contact;
