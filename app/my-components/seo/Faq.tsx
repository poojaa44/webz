"use client";
import React, { useState } from "react";

const Faq = ({
  imageB = "",
  faqData = [],
  title = "Frequently Asked Questions",
}: {
  imageB?: string;
  title?: string;
  faqData?: {
    ques: string;
    ans: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(100);
  return (
    <section className=" mx-auto  maxWidth-container uni-padding-b">
      <h2 className="text-center mb-4">{title}</h2>
      <div
        className={`flex max-lg:flex-col-reverse max-lg:gap-6 lg:gap-8 items-center justify-center`}
      >
        <div
          className={`${
            imageB?.length > 0
              ? " w-full sm:w-[80%] mx-auto "
              : " w-full lg:w-1/2 "
          }`}
        >
          {faqData.map((data, i) => (
            <div
              key={data.ans + i}
              className="w-full  my-3 border-[0.1px] rounded-sm "
            >
              <div
                onClick={() => {
                  isOpen == i ? setIsOpen(100) : setIsOpen(i);
                }}
                className="flex justify-between p-2 "
              >
                <h4 className=" text-base sm:text-lg lg:text-xl ">
                  {data.ques}
                </h4>
                <span
                  className={`text-xl duration-500 origin-center transition-transform
                     ${isOpen === i ? "rotate-45" : "90"}  `}
                >
                  {" "}
                  {"+"}
                </span>
              </div>

              <div
                className={`grid transition-all duration-300   ${
                  isOpen == i ? "grid-rows-[1fr] px-2 pb-3" : "grid-rows-[0fr]"
                } `}
              >
                <div className="overflow-hidden text-sm sm:text-base ">
                  {data.ans}
                </div>
              </div>
            </div>
          ))}
        </div>
        {imageB && (
          <div className="w-1/2 ">
            <img src={imageB} alt="" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Faq;
