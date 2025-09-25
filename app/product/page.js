"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function Products() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Hover In
    const handleMouseEnter = () => {
      gsap.to(image, {
        scale: 1.05, // zoom in image
        duration: 0.4,
        ease: "power3.out",
      });
    };

    // Hover Out
    const handleMouseLeave = () => {
      gsap.to(image, {
        scale: 1, // reset to normal
        duration: 0.4,
        ease: "power3.out",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="mt-30 mb-20">
    <div className="p-6 mx-auto max-w-3xl text-center">
      <h1 className="font-sohne font-bold text-[40px] mb-4 text-primary">COCOPEAT GROW BAGS</h1>
      <p className="font-open mb-10 text-xl">
        Premium quality grow bags available in cocopeat, cocochips, or a custom mix — designed for optimal crop growth and consistency
      </p>
      </div>
      
       <div className="mx-auto w-[75%]">
        {/* Image with Hover Zoom */}
         <div
      ref={containerRef}
      className="relative aspect-[3/1] mb-10 overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-md border-2 border-amber-600"
    >
      <Image
        ref={imageRef}
        src="/images/products.jpg"
        alt="Cocopeat Grow Bags"
        fill
        className="object-cover will-change-transform"
        style={{ transformOrigin: "center center" }}
        priority
      />
    </div>

       <p className="font-open md:text-lg text-justify">
         <span className="font-bold text-2xl">O</span>ur premium Cocopeat Grow Bags provide ideal root development with high aeration, ensuring uniform growth and stronger plants. They support efficient nutrient uptake and are easy to use in greenhouses or outdoor gardens, making them popular among both beginners and professional growers. <br/>
          <br/> 

         Customers can choose from cocopeat only, cocochips only, or a custom blend of cocopeat and cocochips to suit their crop needs. We also offer fully customizable orders, including blend ratios and packaging options. 
         <br/>
          <br/> 

         For growers who are not focused on commercial sales, we offer our Verdigrow-branded grow bags, providing the same high-quality coir-based products for personal or farm use.
        </p>
      </div>

     
      </section>
    
  );
}