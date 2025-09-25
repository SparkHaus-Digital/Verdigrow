"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.7;
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-9/10 rounded-full flex justify-between items-center px-6 py-2 transition-colors duration-600 ${scrolled
        ? "bg-[#095920] text-background"
        : "bg-[#095920]/30 backdrop-blur-md border border-white/30 text-background"
        }`}
    >

      {/* Logo */}
      <Link href="/">
        <Image src="/images/verdigrow-logo.png" alt="VerdiGrow" height={32} width={120} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 md:text-[14px] font-open">
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/product">Product</Link>
        </li>
        <li className="">
          <Link href="/about">About</Link>
        </li>
        <li className="">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-2 sm:space-x-4 lg:space-x-6 font-open">
        <Link
          href="/contact"
          className="bg-background text-primary px-3 sm:px-4 md:px-4 lg:px-5 py-1 sm:py-2 rounded-2xl flex items-center gap-1 sm:gap-2"
        >
          Contact
          <span className="bg-primary rounded-full p-1 sm:p-1.5">
            <FaArrowUp className="rotate-40 text-white text-xs sm:text-sm" />
          </span>
        </Link>

        <Link
          href="/quote"
          className="bg-background text-primary px-4 py-2 rounded-2xl flex items-center gap-2 whitespace-nowrap"
        >
          Get A Quote
          <span className="bg-primary rounded-full p-1">
            <FaArrowUp className="rotate-40 text-white" />
          </span>
        </Link>

      </div>


      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <CiGrid41 size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <ul
        className={`absolute top-full mt-1 left-0 w-full bg-[#095920] p-4 rounded-lg flex flex-col gap-3 md:hidden transition-all duration-300 ${menuOpen ? "flex" : "hidden"
          }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="bg-background text-primary px-4 py-2 rounded-2xl flex items-left  gap-2"
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
            className="bg-background text-primary px-4 py-2 rounded-2xl flex items-center justify-center gap-2"
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