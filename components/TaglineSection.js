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
      className="px-8 md:px-24 my-10 sm:my-16 md:my-20 overflow-hidden"
    >
      <h1 className="font-sohne font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-snug">
        <span className="word inline-block">FROM</span>{" "}
        <span className="word inline-block">LOCAL</span>{" "}
        <span className="word inline-block">GROWERS</span>{" "}
        <span className="word inline-block">TO</span>{" "}
        <span className="word inline-block text-secondary">INTERNATIONAL</span>{" "}
        <span className="word inline-block">BUYERS,</span>{" "}
        <span className="word inline-block">OUR</span>{" "}
        <span className="word inline-block">ECO-FRIENDLY</span>{" "}
        <span className="word inline-block text-secondary">COCOPEAT</span>{" "}
        <span className="word inline-block">IS</span>{" "}
        <span className="word inline-block">MAKING</span>{" "}
        <span className="word inline-block">IT&apos;S</span>{" "}
        <span className="word inline-block">MARK</span>{" "}
        <span className="word inline-block text-secondary">ACROSS</span>{" "}
        <span className="word inline-block text-secondary">THE</span>{" "}
        <span className="word inline-block text-secondary">GLOBE.</span>
      </h1>
    </section>
  );
}
