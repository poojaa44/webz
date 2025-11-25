import React from "react";
import { callSVG, fbSVG, instaSVG, mailSVG, twitterSVG } from "../data/svgData";
import { navTexts } from "../data/jsonData";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="maxWidth-container mx-auto py-2 uni-padding-t pb-6 ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 text-md">
          <div className="flex flex-col space-y-4">
            <h4 className="text-accent-red">Logo</h4>
            <p>
              Explore our comprehensive suite of services designed to help you
              achieve your goals. We offer a range of solutions tailored to meet
              your unique needs and drive success.
            </p>
            <div className="flex gap-3 items-center">
              Follow us:
              <span className="text-white  hover:text-accent-red duration-500 ">
                {" "}
                {instaSVG}{" "}
              </span>
              <span className="text-white  hover:text-accent-red duration-500">
                {" "}
                {fbSVG}{" "}
              </span>
              <span className="text-white  hover:text-accent-red duration-500  flex justify-center items-center">
                {" "}
                {twitterSVG}{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h4 className="text-accent-red">Quick links</h4>
            <ul className="space-y-3">
              {navTexts.map(
                (nav, i) =>
                  nav.name != "Services" && (
                    <li key={nav.link + i} className="hover:text-accent-red">
                      <Link href={nav.link}>{nav.name}</Link>
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h4 className="text-accent-red">Services</h4>
            <ul className="space-y-3">
              {navTexts[1].subServices?.map((nav, i) => (
                <li key={nav.link + i} className="hover:text-accent-red">
                  <Link href={nav.link}>{nav.subName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h4 className="text-accent-red">Contact Us</h4>
            <ul className="space-y-4">
              <li
                className="flex gap-2 items-center group
            "
              >
                <span className=" group-hover:text-accent-red  ">
                  {callSVG}
                </span>

                <a className="" href="">
                  +91 675646367
                </a>
              </li>
              <li className="flex gap-2 items-center group">
                <span className="group-hover:text-accent-red  ">{mailSVG}</span>
                <a className="" href="">
                  xyz@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 md:mt-10 h-[1px] " />
        <div className="flex justify-between">
          <div>
            Copyright © 2025 WEBZ MARKETING PTV LTD. All rights reserved.
          </div>
          <Link className="hover:text-accent-red" href={"/privacy-policy"}>
            Privacy policy
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
