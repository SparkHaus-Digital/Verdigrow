"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TaglineSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const words = el.querySelectorAll(".word");

    // Set initial state: hidden, slightly left and down
    gsap.set(words, { opacity: 0, x: -20, });

    // Animate words sequentially
    gsap.to(words, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 my-20 mx-12 overflow-hidden"
    >
      <h1 className="font-sohne font-extrabold text-6xl md:text-6xl text-jutify text-primary leading-snug">
      
        <span className="word inline-block mr-4">FROM</span>
        <span className="word inline-block mr-4"> LOCAL</span>
        <span className="word inline-block mr-4">GROWERS</span>
        <span className="word inline-block mr-4">TO</span>
        <span className="word inline-block mr-4">
          <span className="text-secondary">INTERNATIONAL</span>
        </span>
        <span className="word inline-block mr-4">BUYERS,</span>
        <span className="word inline-block mr-4">OUR</span>
        <span className="word inline-block mr-4">ECO-FRIENDLY</span>
        <span className="word inline-block mr-4">
          <span className="text-secondary">COCOPEAT</span>
        </span>
        <span className="word inline-block mr-4">IS</span>
        <span className="word inline-block mr-4">MAKING</span>
        <span className="word inline-block mr-4">IT&apos;S</span>
        <span className="word inline-block mr-4">MARK</span>
        <span className="word inline-block mr-4">
          <span className="text-secondary">ACROSS</span>
        </span>
        <span className="word inline-block mr-4">
          <span className="text-secondary">THE</span>
        </span>
        <span className="word inline-block mr-4">
          <span className="text-secondary">GLOBE</span>.
        </span>
      
      </h1>
    </section>
  );
}
