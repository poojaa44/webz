"use client";
import React from "react";

const GlowingMarquee = () => {
  const texts = [
    "Engage",
    "Innovate",
    "Connect",
    "Grow",
    "Optimize",
    "Amplify",
    "Convert",
    "Strategize",
    "Impact",
    "Reach",
    "Analyze",
    "Evolve",
    "Build",
    "Create",
    "Develop",
    "Design",
    "Implement",
    "Solutions",
    "Value",
    "Support",
    "Partnership",
    "Excellence",
    "Results",
    "Custom",
  ];

  const star = (
    <svg
      className="inline"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M14.5 9.5L12 2L9.5 9.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12zM12 13.7c-.9 0-1.7-.7-1.7-1.7c0-.9.7-1.7 1.7-1.7c.9 0 1.7.7 1.7 1.7c0 .9-.8 1.7-1.7 1.7"
      />
    </svg>
  );

  return (
    <section className="uni-padding-y">
      <div className="relative overflow-hidden bg-accent-red/10 py-8 whitespace-nowrap ">
        <div className="animate-marquee inline-block ">
          {texts.map((text, index) => (
            <React.Fragment key={index}>
              <span className="mx-8 text-2xl font-bold text-white">{text}</span>
              <span className="text-yellow-400 text-xl md:text-3xl animate-pulse">
                {star}
              </span>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {texts.map((text, index) => (
            <React.Fragment key={`copy-${index}`}>
              <span className="mx-8 text-2xl font-bold text-white">{text}</span>
              <span className="text-yellow-400 text-xl md:text-3xl animate-pulse">
                {star}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlowingMarquee;
