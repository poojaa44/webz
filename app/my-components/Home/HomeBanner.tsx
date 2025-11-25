import React from "react";

import { TypingEffect } from "../constant/TypingEffect";
import { CustomButton } from "../constant/CustomButton";

const HomeBanner = () => {
  return (
    <section className=" relative isolate z-0  max-w-[2000px] mx-auto ">
      <div className="absolute top-0 -left-10 bg-gradient-left z-[4] w-[80%] aspect-[16/7]  "></div>

      <div className="maxWidth-container mx-auto relative z-[5]">
        <div className=" flex max-md:flex-col-reverse  gap-2 items-center justify-between  bg-cover  ">
          {/* <div className='absolute bg-black/40  z-[2] inset-0 bg-gradient-to-b ' ></div> */}

          <div className="  md:w-1/2 flex flex-col gap-5 ">
            <h1 className="">
              {" "}
              Stop Wishing, <br />
              <span> Start </span>
              <TypingEffect
                texts={["Seeing Results.", "Driving Leads.", "Boosting Sales."]}
                typingSpeed={300}
                deleteSpeed={80}
                delayBetweenTexts={2500}
                className="inline"
                typeClassName=" text-accent-orange"
                cursorClassName="custom-cursor-class"
                cursor=""
              />
              <span>|</span>
            </h1>
            <p>
              Don't leave your online success to chance. Our expert team crafts
              tailored digital marketing solutions designed to boost your
              visibility, engage your audience, and drive real results
            </p>
            <CustomButton classValues="w-max" route="/about-us" />
          </div>
          <div>
            <img
              className=" w-[80%] mx-auto lg:w-full max-w-[700px]"
              src="/homepage/homeBanner.png"
              alt="Home banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
