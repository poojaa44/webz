import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CustomButton } from "../constant/CustomButton";

const WhatWeDo = () => {
  return (
    <section className=" relative isolate z-0 ">
      <section className="relative isolate z-[3]  max-w-[2000px] mx-auto  ">
        <div className="absolute top-6 right-6 bg-gradient-right z-[4] w-[80%] aspect-[16/7]  max-md:hidden  "></div>
        <div className="maxWidth-container mx-auto relative z-[5]  w-full">
          <h2 className="w-full text-center">Why Us</h2>
          <div className="   flex max-md:flex-col gap-4 justify-between items-center mx-auto">
            <img
              className="w-[80%] mx-auto md:w-[35%]"
              src="/homepage/why-us.jpg"
              alt=""
            />
            <div className="space-y-6 md:w-1/2 ">
              <p className="">
                We are dedicated to achieving measurable business growth for
                you. Our approach centers on strategies that directly generate
                leads, boost sales, and improve your ROI, all guided by data and
                transparently reported. Your success is our paramount objective.
              </p>
              <ul className=" list-disc list-inside marker:text-accent-orange">
                <li>
                  <strong>Focus on Tangible Results:</strong> We prioritize
                  outcomes that directly benefit your business growth.
                </li>
                <li>
                  <strong>No Vanity Metrics:</strong> We don't focus on
                  superficial measures; our focus is on impactful results.
                </li>
                <li>
                  <strong>Drive Leads and Sales:</strong> Our strategies are
                  designed to generate more leads and increase your sales.
                </li>
                <li>
                  <strong>Improve ROI:</strong> We aim to enhance your return on
                  investment.
                </li>
                <li>
                  <strong> Data-Driven Approach:</strong> Our decisions are
                  based on data and insights.
                </li>
              </ul>

              <CustomButton route="/about-us" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhatWeDo;
