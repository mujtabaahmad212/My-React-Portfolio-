import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Headertext.css';


gsap.registerPlugin(ScrollTrigger);

const HeaderText = () => {
  const gradientRef = useRef(null);
  const textRef = useRef(null);
  const paraRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    const heading = textRef.current;
    const paragraph = paraRef.current;

    // Split <h1> into characters
    const originalHeadingText = heading.textContent;
    heading.innerHTML = originalHeadingText
      .split('')
      .map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');
    const charElements = heading.querySelectorAll('.char');

    // Split <p> into words with proper spacing
    const originalParaText = paragraph.textContent;
    paragraph.innerHTML = originalParaText
      .split(' ')
      .map((word, index) => `<span class="word">${word}${index < originalParaText.split(' ').length - 1 ? '&nbsp;' : ''}</span>`)
      .join('');
    const wordElements = paragraph.querySelectorAll('.word');

    // Initial setup
    gsap.set(gradient, { scale: 1 });
    gsap.set(charElements, { y: 50, opacity: 0 });
    gsap.set(wordElements, { x: -30, opacity: 0 });

    // Gradient animation with ScrollTrigger
    gsap.to(gradient, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
      background: 'linear-gradient(45deg, #433D8B, #2E236C, #17153B)',
      scale: 1.05,
      duration: 1,
    });

    // <h1> animation (character-based, from below)
    gsap.to(charElements, {
      scrollTrigger: {
        trigger: heading,
        start: 'top 90%',
        end: 'top 50%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.02,
    });

    // <p> animation (word-based, from left)
    gsap.to(wordElements, {
      scrollTrigger: {
        trigger: paragraph,
        start: 'top 85%',
        end: 'top 45%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.05,
    });

    // Cleanup
    return () => {
      heading.textContent = originalHeadingText;
      paragraph.textContent = originalParaText;
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center items-center w-full h-[100vh]">
      <div
        ref={gradientRef}
        className="justify-center items-center rounded-[3rem] h-[80vh] w-[90%] min-w-[300px] flex flex-col gap-4 gradient-bg shadow-black shadow-2xl p-6"
      >
        <h1 ref={textRef} className="headtext text-center">
          We Transform Ideas Into Stunning Websites
        </h1>
        <p ref={paraRef} className="paratext text-center">
          Elevate your online presence with custom designs, seamless user
          experiences, and cutting-edge development crafted to captivate and
          convert.
        </p>
      </div>
    </div>
  );
};

export default HeaderText;