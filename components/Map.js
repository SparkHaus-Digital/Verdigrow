"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Map() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Automatically switch to iframe after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // 500ms delay for smooth transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-80 rounded-tr-[50px] rounded-bl-[50px] overflow-hidden">
      {/* Blur thumbnail */}
      {!isLoaded && (
        <Image
          src="/images/map-thumbnail.png" // blurred placeholder
          alt="Map location"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="/images/map-thumbnail-blur.png"
        />
      )}

      {/* Google Maps iframe */}
      {isLoaded && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.960314839328!2d79.95771127448265!3d6.895350418731521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250d427687caf%3A0x73b5976c53deb8ae!2s590%20Athurugiriya%20Rd%2C%20Malabe!5e0!3m2!1sen!2slk!4v1758297429916!5m2!1sen!2slk"
          className="absolute top-0 left-0 w-full h-full border-0 rounded-tr-[50px] rounded-bl-[50px] animate-fadeIn"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
}
