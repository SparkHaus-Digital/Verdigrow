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
      <h1 className="font-h1 font-black text-6xl md:text-6xl text-left text-primary leading-snug">
        <span className="word inline-block mr-2">FROM</span>
        <span className="word inline-block mr-2">LOCAL</span>
        <span className="word inline-block mr-2">GROWERS</span>
        <span className="word inline-block mr-2">TO</span>
        <span className="word inline-block mr-2">
          <span className="text-secondary">INTERNATIONAL</span>
        </span>
        <span className="word inline-block mr-2">BUYERS,</span>
        <span className="word inline-block mr-2">OUR</span>
        <span className="word inline-block mr-2">ECO-FRIENDLY</span>
        <span className="word inline-block mr-2">
          <span className="text-secondary">COCOPEAT</span>
        </span>
        <span className="word inline-block mr-2">IS</span>
        <span className="word inline-block mr-2">MAKING</span>
        <span className="word inline-block mr-2">IT'S</span>
        <span className="word inline-block mr-2">MARK</span>
        <span className="word inline-block mr-2">
          <span className="text-secondary">ACROSS</span>
        </span>
        <span className="word inline-block mr-2">
          <span className="text-secondary">THE</span>
        </span>
        <span className="word inline-block mr-2">
          <span className="text-secondary">GLOBE</span>.
        </span>
      </h1>
    </section>
  );
}
