"use client";

import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function AnimatedButton({
  href,
  label,
  className = "",
  iconRotation = 40,
  hoverRotation = 180,
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-2 rounded-2xl px-4 py-2 transition duration-300 ${className}`}
    >
      {label}
      <span className="flex items-center justify-center rounded-full p-1 
                       bg-primary group-hover:bg-background transition-colors duration-300">
        <FaArrowUp
          className="text-white group-hover:text-primary duration-300"
          style={{ transform: `rotate(${iconRotation}deg)` }}
        />
      </span>
    </Link>
  );
}
