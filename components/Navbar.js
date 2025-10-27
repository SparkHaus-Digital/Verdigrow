"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Scroll effect only for Home and Quote pages
  useEffect(() => {
    if (pathname === "/" || pathname === "/quote") {
      const handleScroll = () => {
        // ✅ Different threshold for quote page
        const threshold =
          pathname === "/quote"
            ? window.innerHeight * 0.3 // 10% of viewport height
            : window.innerHeight * 0.7; // 70% for home

        setScrolled(window.scrollY > threshold);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // ✅ force solid navbar on other pages
      setScrolled(true);
    }
  }, [pathname]);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        // Opening animation
        gsap.set(menuRef.current, { display: "flex" }); // make it visible
        gsap.fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          {
            height: menuRef.current.scrollHeight, // animate to natural height
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
              gsap.set(menuRef.current, { height: "auto" }); // reset for flexibility
            },
          }
        );
      } else {
        // Closing animation
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(menuRef.current, { display: "none" });
          },
        });
      }
    }
  }, [menuOpen]);


  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-9/10 rounded-full flex justify-between items-center px-6 py-2 transition-colors duration-600 ${scrolled
        ? "bg-[#095920] text-background"
        : "bg-[#095920]/30 backdrop-blur-md border border-white/30 text-background"
        }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/verdigrow-logo.png"
          alt="VerdiGrow"
          height={44}
          width={160}
          className="w-[120px] sm:w-[140px] md:w-[160px] h-auto"
        />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 space-x-4 sm:space-x-2 md:space-x-4 lg:space-x-10 md:text-[14px] font-open">
        {[
          { name: "Home", href: "/" },
          { name: "Products", href: "/product" },
          { name: "About", href: "/about" },
          { name: "Blog", href: "/blog" },
        ].map((item) => (
          <li key={item.name} className="relative">
            <Link href={item.href}>
              {item.name}
            </Link>
            {/* Animated underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-800 ease-in-out
        ${pathname === item.href ? "w-full opacity-100" : "w-0 opacity-0"}`}
            />
          </li>
        ))}
      </ul>


      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-6 font-open">
        {/* Contact Button */}
        <Link
          href="/contact"
          className="group bg-background text-primary px-3 sm:px-4 md:px-4 lg:px-5 py-1 sm:py-2 rounded-2xl flex items-center gap-1 sm:gap-2 hover:bg-primary hover:text-background transition duration-300"
        >
          Contact
          <span className="rounded-full p-1 sm:p-1.5 bg-primary group-hover:bg-background transition duration-300 flex items-center justify-center">
            <FaArrowUp className="rotate-40 text-white group-hover:text-primary group-hover:rotate-[90deg] transition-transform duration-300 text-xs sm:text-sm" />
          </span>
        </Link>

        {/* Get A Quote Button */}
        <Link
          href="/quote"
          className="group bg-background text-primary px-4 py-2 rounded-2xl flex items-center gap-2 whitespace-nowrap hover:bg-primary hover:text-background transition duration-300"
        >
          Get a Quote
          <span className="bg-primary rounded-full p-1 group-hover:bg-background transition duration-300 flex items-center justify-center">
            <FaArrowUp className="rotate-40 text-white group-hover:text-primary group-hover:rotate-[90deg] transition-transform duration-300" />
          </span>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <CiGrid41 size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <ul
        ref={menuRef}
        className="absolute top-full mt-1 left-0 w-full bg-[#095920] p-4 rounded-lg flex flex-col gap-3 md:hidden overflow-hidden items-center"
        style={{ display: "none", height: 0, opacity: 0 }}
      >
        {[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
          { name: "About", href: "/about" },
          { name: "Blog", href: "/blog" },
        ].map((item) => (
          <li key={item.name} className="relative w-fit">
            <Link
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              {item.name}
            </Link>
            {/* Animated underline */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-500 ease-in-out
        ${pathname === item.href ? "w-full opacity-100" : "w-0 opacity-0"}`}
            />
          </li>
        ))}

        <li>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-background text-primary px-8 py-2 rounded-2xl flex gap-2"
          >
            Contact
            <div className="bg-primary rounded-full p-1">
              <FaArrowUp className="rotate-40 text-white" />
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/quote"
            onClick={() => setMenuOpen(false)}
            className="bg-background text-primary px-4 py-2 rounded-2xl flex justify-center gap-2"
          >
            Get A Quote
            <div className="bg-primary rounded-full p-1">
              <FaArrowUp className="rotate-40 text-white" />
            </div>
          </Link>
        </li>
      </ul>

    </nav>
  );
}
