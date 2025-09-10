"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";


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
          ? "bg-[#095920] text-background"
          : "bg-[#095920]/30 backdrop-blur-md border border-white/30 text-background"
      }`}
    >
      <Link href="/">
        <Image src="/images/verdigrow-logo.png" alt="VerdiGrow" height={32} width={120} />
      </Link>
      <ul className="flex space-x-10">
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
          className="bg-background text-primary px-4 py-2 rounded-2xl flex place-content-between gap-5"
        >
          Contact <span className="ml-2"><div className="bg-primary rounded-full p-1"><FaArrowUp className="rotate-40 text-white"/></div></span>
        </Link>
        <Link
          href="/quote"
          className="bg-background text-primary px-4 py-2 rounded-2xl flex items-center place-content-between gap-2"
        >
          Get A Quote <span className="ml-2"><div className="bg-primary rounded-full p-1"><FaArrowUp className="rotate-40 text-white"/></div></span>
        </Link>
      </div>
    </nav>
  );
}