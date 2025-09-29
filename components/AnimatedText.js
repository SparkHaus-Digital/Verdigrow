"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedText({ text, className = "", delay = 0, speed = 0.08 }) {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

    // Initially hide letters
    gsap.set(letters, { opacity: 0 });

    gsap.to(letters, {
      opacity: 1,
      duration: 0.01, // almost instant per letter
      stagger: speed, // controls typing speed
      delay: delay,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, [speed, delay]);

  return (
    <span ref={textRef} className={`inline-block ${className}`}>
      {text.split("").map((letter, i) => (
        <span key={i} className="letter inline-block">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
      <span className="inline-block w-[1px] bg-primary animate-blink ml-1" />
    </span>
  );
}
