"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function AnimatedImage({ src, alt, className = "", ...props }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const handleMouseEnter = () => gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power3.out" });
    const handleMouseLeave = () => gsap.to(img, { scale: 1, duration: 0.4, ease: "power3.out" });

    img.addEventListener("mouseenter", handleMouseEnter);
    img.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      img.removeEventListener("mouseenter", handleMouseEnter);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      loading="lazy"
      className={`will-change-transform ${className}`}
      {...props}
    />
  );
}
