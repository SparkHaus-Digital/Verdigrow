"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "../public/images/verdigrow-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-9/10 rounded-full flex justify-between items-center px-6 py-2 transition-colors duration-600 ${
        scrolled
          ? "bg-[#2E5D3B] text-white"
          : "bg-white/10 backdrop-blur-md border border-white/30 text-white"
      }`}
    >
      <Link href="/">
        <img src={logo} alt="VerdiGrow" className="h-8" />
      </Link>
      <ul className="flex space-x-6">
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
      </ul>
      <div className="flex space-x-4">
        <Link
          href="/contact"
          className="bg-white text-primary px-4 py-2 rounded-full flex items-center"
        >
          Contact <span className="ml-2">→</span>
        </Link>
        <Link
          href="/quote"
          className="bg-white text-primary px-4 py-2 rounded-full flex items-center"
        >
          Get A Quote <span className="ml-2">→</span>
        </Link>
      </div>
    </nav>
  );
}