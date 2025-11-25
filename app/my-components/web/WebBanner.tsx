import React from "react";
import { CustomButton } from "../constant/CustomButton";

const WebBanner = () => {
  return (
    <section className=" ">
      <div className="maxWidth-container mx-auto space-y-6 text-center ">
        <div className="text-center ">
          <h1 className="text-center '">
            {" "}
            Custom-Built Websites That{" "}
            <span className="text-accent-orange ">Drive Results</span>
          </h1>

          <p>
            {" "}
            We develop fast, scalable, and responsive websites tailored to your
            business goals — built for performance, precision, and marketing
            impact.
          </p>
        </div>
        <div className="flex justify-center items-center relative isolate max-w-[500px]  mx-auto ">
          <img
            className="relative w-full h-full z-[2]  "
            src="/web/laptop.png"
            alt=""
          />

          <div className="absolute w-full h-[60%] top-5 left-0 z-[1] overflow-hidden shadow-[0_0_30px_5px_#FEF7F0]">
            <div className="flex animate-marquee1 gap-4 w-max">
              {/* Original Set */}

              <img className="w-[400px] h-auto " src="/web/mock-1.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-2.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-3.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-4.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-5.png" alt="" />

              {/* Duplicate Set (for seamless loop) */}
              <img className="w-[400px] h-auto " src="/web/mock-1.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-2.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-3.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-4.png" alt="" />
              <img className="w-[400px] h-auto " src="/web/mock-5.png" alt="" />
            </div>
          </div>
        </div>
        <CustomButton classValues=" w-max mx-auto" btnText="Get Started!" />
      </div>
    </section>
  );
};

export default WebBanner;
