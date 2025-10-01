"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import AnimatedText from "@/components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contentRef = useRef([]);
  contentRef.current = [];

  const addToRefs = (el) => {
    if (el && !contentRef.current.includes(el)) {
      contentRef.current.push(el);
    }
  };

  useEffect(() => {
    if (contentRef.current.length === 0) return;

    gsap.fromTo(
      contentRef.current,
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current[0],
          start: "top 80%", // start animation when first element enters viewport
        },
      }
    );
  }, []);

  return (
    <div className="mt-30 mb-20">
      {/* Main Box */}
      <div className="w-3/4 mx-auto bg-primary text-white rounded-tr-[50px] rounded-bl-[50px] md:rounded-tr-[100px] md:rounded-bl-[100px] p-2 md:p-8 flex flex-col-reverse md:flex-row gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col px-2">
          <h2 ref={addToRefs} className="font-sohne font-bold text-2xl md:text-[40px] mb-4">
            <AnimatedText text="CONTACT US" />
          </h2>

          <p ref={addToRefs} className="mb-12">
            No. 590, <br />
            Athurugiriya Road, Malabe, <br />
            Colombo, Sri Lanka.
          </p>

          <p ref={addToRefs} className="mb-12">info@verdigrow.com</p>

          <p ref={addToRefs} className="mb-2 flex items-center gap-2">
            <FaPhone className="text-lg" /> +94 11 274 2238
          </p>
          <p ref={addToRefs} className="mb-12 flex items-center gap-2">
            <FaWhatsapp className="text-lg" /> +94 11 274 2238
          </p>

          <div
            ref={addToRefs}
            className="flex gap-4 mb-6 text-xl md:text-3xl md:mt-auto md:justify-start justify-center md:pl-6"
          >
            <FaFacebookF className="hover:text-secondary cursor-pointer" />
            <FaInstagram className="hover:text-secondary cursor-pointer" />
            <FaTiktok className="hover:text-secondary cursor-pointer" />
            <FaLinkedin className="hover:text-secondary cursor-pointer" />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:flex-1 flex justify-center items-center w-full h-64 md:h-auto">
          <div className="w-full h-full md:rounded-tr-[100px] md:rounded-bl-[100px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.960314839328!2d79.95771127448265!3d6.895350418731521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250d427687caf%3A0x73b5976c53deb8ae!2s590%20Athurugiriya%20Rd%2C%20Malabe!5e0!3m2!1sen!2slk!4v1758297429916!5m2!1sen!2slk"
              width="100%"
              height="100%"
              className="border-0 rounded-tr-[50px] rounded-bl-[50px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
