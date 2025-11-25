"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Cta = () => {
  const rocketVariants = {
    hidden: { y: 0, opacity: 1 },
    animate: {
      y: [5, 10, -10, 0],
    },
  };

  return (
    <section className="uni-padding-y">
      <div className="maxWidth-container mx-auto px-6">
        <div className="border-2 border-orange-500 rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 overflow-hidden">
          <motion.div
            className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center border-orange-500 border-4 flex-shrink-0"
            variants={rocketVariants}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 3,

              repeatDelay: 2,
              times: [0, 0.33, 0.66, 1],
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(20deg)" }}
            >
              {/* Nose cone - Red Triangle */}
              <polygon points="12,2 10,6 14,6" fill="#E74C3C" />

              {/* Body - Light Blue */}
              <ellipse
                cx="12"
                cy="11"
                rx="4"
                ry="6"
                fill="#D4E6F1"
                stroke="#B3D9E8"
                strokeWidth="0.5"
              />

              {/* Window - Dark Blue Circle */}
              <circle cx="12" cy="9" r="1.5" fill="#2E5090" />

              {/* Center Thrust - Red */}
              <rect x="11" y="16" width="2" height="3" fill="#E74C3C" />

              {/* Exhaust Flame - Yellow */}
              <polygon points="12,19 10.5,22 13.5,22" fill="#F4D03F" />

              {/* Left Fin - Red */}
              <polygon points="8,12 5,14 7,15" fill="#C0392B" />

              {/* Right Fin - Red */}
              <polygon points="16,12 19,14 17,15" fill="#C0392B" />
            </svg>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              Ready to Scale Your Business?
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Join 100+ brands already growing with us
            </p>
          </div>

          <Link
            href={"/contact-us"}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 w-full md:w-auto whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
