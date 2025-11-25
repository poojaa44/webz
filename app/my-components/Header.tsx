"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { navTexts } from "../data/jsonData";
import Link from "next/link";
import { callSVG } from "../data/svgData";
import { useRouter } from "next/navigation";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubIndex, setOpenSubIndex] = useState(100);
  const router = useRouter();
  const toggleSubmenu = (i: number) => {
    setOpenSubIndex(openSubIndex === i ? 100 : i);
  };

  const handleNavClick = (link: string) => {
    setIsOpen(false);
    router.push(link);
  };
  console.log(openSubIndex);
  return (
    <header className={`maxWidth-container mx-auto py-2   `}>
      {/* Mobile Menu Overlay */}
      <div
        className={` fixed overflow-hidden top-0  inset-0 bg-text text-black z-50 flex justify-center items-center transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 " : "opacity-0 "
        }`}
        style={{
          clipPath: isOpen ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)",
          transition: "clip-path 0.4s ease-in-out, ",
        }}
      >
        <div className="absolute inset-0 z-0 ">
          <img
            className="w-full h-full opacity-5 object-cover"
            src="/headerbg.jpg"
            alt=""
          />
        </div>
        <div className="relative w-full h-full maxWidth-container mx-auto ">
          {/* <span
            onClick={() => setIsOpen(false)}
            className="absolute top-[28px] lg:top-[35px] right-3  duration-500 text-4xl cursor-pointer"
          >
            ×
          </span> */}

          <ul className="flex flex-col gap-6 text-2xl font-medium items-center justify-center h-full">
            {navTexts.map((navtext, i) => (
              <li key={navtext.link + i}>
                {navtext.subServices ? (
                  <>
                    <div className="cursor-pointer mx-auto w-max flex gap-2 items-center justify-center">
                      <div
                        onClick={() => toggleSubmenu(i)}
                        className="hover:text-accent-orange flex items-end gap-1"
                      >
                        <div>{navtext.name}</div>
                        <div
                          style={{ verticalAlign: "end" }}
                          className={`transition-transform duration-300   ${
                            openSubIndex === i ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </div>
                      </div>
                    </div>

                    <ul
                      className={` grid overflow-hidden transition-all  ${
                        openSubIndex == i
                          ? "grid-rows-[1fr] duration-500  border rounded-lg py-2 mt-3 px-2 bg-accent-orange/20 "
                          : "grid-rows-[0fr] duration-500  "
                      }`}
                    >
                      <div className="min-h-0 text-lg text-center  ">
                        {navtext.subServices.map((ser, i) => (
                          <li
                            className="hover:text-accent-orange  cursor-pointer"
                            key={ser.subName + i}
                          >
                            {" "}
                            <div onClick={() => handleNavClick(ser.link)}>
                              {ser.subName}
                            </div>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </>
                ) : (
                  <div
                    className="cursor-pointer hover:text-accent-orange "
                    onClick={() => handleNavClick(navtext.link)}
                  >
                    {navtext.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="h-[80px] lg:h-[100px] flex justify-between items-center">
        <div className="logo">
          <a className="orbitron-font text-3xl font-bold" href="/">
            <span className="text-accent-orange">W</span>EBz's
          </a>
        </div>

        <div className="flex gap-2 items-center  ">
          <div className=" inline    cursor-pointer relative isolate ">
            <div className=" absolute w-[12px]  h-[2px] bg-white -bottom-2 left-1/2 -translate-x-[50%] rounded-full shadow"></div>
            <div className="animate-bounce rounded-full border-[1px] border-accent-orange p-1  !text-accent-orange">
              <a href="tel:+9167241132">{callSVG}</a>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className=" focus:outline-none text-2xl relative top-0 right-0 bottom-0 ms-auto z-50 cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span className={`${isOpen ? "hidden" : "block"}`}>☰</span>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className={` text-black cursor-pointer  ${
                isOpen ? "block" : "hidden"
              }`}
            >
              X
            </span>
            {/* <span className={''}>X</span> */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
