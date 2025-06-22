"use client"; 

import Link from "next/link";
import React, { useState, useRef } from "react";

interface NavLink {
  title: string;
  link: string;
}

interface HoveredRect {
  width: number;
  height: number;
  left: number;
  top: number;
}

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { title: "Home", link: "#" },
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  const navRef = useRef<HTMLElement>(null);
  
  const [hoveredRect, setHoveredRect] = useState<HoveredRect | null>(null);

  const handleMouseLeave = (): void => {
    setHoveredRect(null);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const navNode = navRef.current;
    if (!navNode) return;

    const targetNode = e.currentTarget;
    const navRect = navNode.getBoundingClientRect();
    const targetRect = targetNode.getBoundingClientRect();

    const rect: HoveredRect = {
      width: targetRect.width,
      height: targetRect.height,
      left: targetRect.left - navRect.left,
      top: targetRect.top - navRect.top,
    };

    setHoveredRect(rect);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2 px-6 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
        <Link href="/" className="text-white font-bold text-xl">
          prabin_shrestha
        </Link>

        <nav
          ref={navRef}
          onMouseLeave={handleMouseLeave}
          className="hidden md:flex items-center gap-1 text-sm text-gray-300 font-medium relative"
        >
          {hoveredRect && (
            <div
              className="absolute bg-neutral-700/60 rounded-lg -z-10"
              style={{
                width: `${hoveredRect.width}px`,
                height: `${hoveredRect.height}px`,
                transform: `translate(${hoveredRect.left}px, ${hoveredRect.top}px)`,
                transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out",
              }}
            />
          )}

          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              onMouseEnter={handleMouseEnter}
              className="relative list-none uppercase py-2 px-4 z-10"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href={"/contact"}
            className="bg-[#1C1C1C] text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-gray-800 transition-colors border border-gray-600"
          >
            Contact Me
          </Link>
        </div>

        <div className="md:hidden">
        </div>
      </div>
    </header>
  );
};

export default Navbar;