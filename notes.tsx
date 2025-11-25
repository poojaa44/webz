"use client";
import React, { useState } from "react";
// import { navTexts } from "../data/jsonData";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Changed to false by default

  return (
    <header className="maxWidth-container mx-auto py-2">
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-text text-black z-50 flex justify-center items-center transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      
        style={{
          clipPath: isOpen
            ? "circle(150% at 100% 0)"
            : "circle(0% at 100% 0)",
          transition: "clip-path 0.4s ease-in-out, ",
        }}
      >
        <div className="relative w-full h-full">
          <span
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 hover:rotate-90 duration-500 text-4xl cursor-pointer"
          >
            ×
          </span>
          
          <ul className="flex flex-col gap-6 text-2xl font-medium items-center justify-center h-full">
            {navTexts.map((navtext, i) => (
              <li key={i}>
                <Link
                  href={navtext.link}
                  className="hover:text-accent-orange cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {navtext.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="h-[80px] lg:h-[100px] flex justify-between items-center">
        <div className="logo">
          <a className="orbitron-font text-3xl font-bold" href="/">
            <span className="text-orange-600">W</span>EBz's
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navTexts.map((navtext, i) => (
            <li key={i}>
              <Link
                href={navtext.link}
                className="hover:text-accent-orange cursor-pointer"
              >
                {navtext.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="hidden md:block">call me</div>
        
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;