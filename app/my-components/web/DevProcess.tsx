import React from "react";

const DevProcess = () => {
  return (
    <section className="uni-padding-b">
      <div className=" maxWidth-container mx-auto">
        <div>
          <h2 className="text-center mb-6">Our Development Process</h2>
        </div>
        <div className=" grid  lg:grid-cols-3 gap-5 max-sm:px-4">
          <div className="grid lg:grid-cols-3 col-span-full bg-accent-red/40 shadow-[0_0_12px_2px_#c71585] rounded-2xl max-lg:py-3">
            <div className=" flex max-md:flex-col justify-center items-center max-lg:order-2 ">
              <img
                className="max-w-[300px]"
                src="/web/process/plan.png"
                alt=""
              />
              <p className="text-2xl">Discovery & Planning</p>
            </div>
            <div
              className=" flex justify-center items-center  text-3xl relative isolate max-lg:order-1
            "
            >
              <span className="bg-accent-orange px-8 py-6  rounded-full shadow-[0_0_12px_#ff6f00] ">
                1
              </span>
              <span className="absolute top-[90%] left-1/2 -translate-x-1/2 rotate-90  w-[100px] h-[1px] bg-text max-lg:hidden "></span>
              {/* <span className="absolute top-1/2 -left-0 w-[30%] h-[1px] bg-text "></span> */}
              {/* <span className="absolute top-1/2 -right-0 w-[30%] h-[1px] bg-text "></span> */}
            </div>
            <div className="   grow  flex justify-center  items-center  text-3xl max-lg:order-3">
              <p className="w-[80%] mx-auto text-center">
                We dive deep into your business goals, user personas, and
                technical needs
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 col-span-full bg-accent-orange/40 shadow-[0_0_12px_2px_#ff6f00] rounded-2xl max-lg:py-3">
            <div className="  flex justify-center  items-center  text-3xl max-lg:order-3">
              <p className="w-[80%] mx-auto text-center">
                We map out your site structure, choose the right tech stack, and
                create wireframes/UI designs.
              </p>
            </div>
            <div className=" flex justify-center items-center  text-3xl relative isolate max-lg:order-1">
              <span className="bg-accent-orange px-8 py-6  rounded-full shadow-[0_0_12px_#ff6f00] ">
                2
              </span>
              <span className="absolute top-[90%] left-1/2 -translate-x-1/2 rotate-90  w-[100px] h-[1px] bg-text max-lg:hidden "></span>
              {/* <span className="absolute top-1/2 -left-0 w-[30%] h-[1px] bg-text "></span> */}
              {/* <span className="absolute top-1/2 -right-0 w-[30%] h-[1px] bg-text "></span> */}
            </div>

            <div className=" flex max-md:flex-col-reverse justify-center items-center max-lg:order-2">
              <p className="text-2xl">Architecture & Design</p>
              <img
                className="max-w-[300px] rotate-y-180"
                src="/web/process/design.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 col-span-full bg-accent-red/40 shadow-[0_0_12px_2px_#c71585] rounded-2xl max-lg:py-3">
            <div className=" flex items-center max-md:flex-col justify-center max-lg:order-2">
              <img
                className="max-w-[300px]"
                src="/web/process/dev.png"
                alt=""
              />
              <p className="text-2xl">Development</p>
            </div>
            <div className=" flex justify-center items-center  text-3xl relative isolate max-lg:order-1">
              <span className="bg-accent-orange px-8 py-6  rounded-full shadow-[0_0_12px_#ff6f00] ">
                3
              </span>
              <span className="absolute top-[90%] left-1/2 -translate-x-1/2 rotate-90  w-[100px] h-[1px] bg-text max-lg:hidden "></span>
              {/* <span className="absolute top-1/2 -left-0 w-[30%] h-[1px] bg-text "></span> */}
              {/* <span className="absolute top-1/2 -right-0 w-[30%] h-[1px] bg-text "></span> */}
            </div>
            <div className="  flex justify-center  items-center  text-3xl max-lg:order-3">
              <p className="w-[80%] mx-auto text-center">
                Custom code written to exact specifications — modular,
                efficient, and scalable.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 col-span-full bg-accent-orange/40 shadow-[0_0_12px_2px_#ff6f00] rounded-2xl max-lg:py-3">
            <div className="   flex justify-center  items-center  text-3xl max-lg:order-3 ">
              <p className="w-[80%] mx-auto text-center">
                Rigorous testing across browsers, devices, and performance
                benchmarks.
              </p>
            </div>
            <div className="  flex justify-center items-center  text-3xl relative isolate max-lg:order-1">
              <span className="bg-accent-orange px-8 py-6  rounded-full shadow-[0_0_12px_#ff6f00] ">
                4
              </span>
              <span className="absolute top-[90%] left-1/2 -translate-x-1/2 rotate-90  w-[100px] h-[1px] bg-text max-lg:hidden "></span>
              {/* <span className="absolute top-1/2 -left-0 w-[30%] h-[1px] bg-text "></span> */}
              {/* <span className="absolute top-1/2 -right-0 w-[30%] h-[1px] bg-text "></span> */}
            </div>

            <div className="  flex items-center justify-center max-md:flex-col-reverse max-lg:order-2">
              <p className="text-2xl">Testing & QA</p>
              <img
                className="max-w-[300px] rotate-y-180"
                src="/web/process/test.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 col-span-full bg-accent-red/40 shadow-[0_0_12px_2px_#c71585] rounded-2xl max-lg:py-3">
            <div className="  flex items-center justify-center max-md:flex-col max-lg:order-2">
              <img
                className="max-w-[300px]"
                src="/web/process/launch.png"
                alt=""
              />
              <p className="text-2xl">Launch & Support</p>
            </div>
            <div className="  flex justify-center items-center  text-3xl relative isolate max-lg:order-1 ">
              <span className="bg-accent-orange px-8 py-6  rounded-full shadow-[0_0_12px_#ff6f00] ">
                5
              </span>
              {/* <span className="absolute top-[90%] left-1/2 -translate-x-1/2 rotate-90  w-[100px] h-[1px] bg-text max-lg:hidden "></span> */}
              {/* <span className="absolute top-1/2 -left-0 w-[30%] h-[1px] bg-text "></span> */}
              {/* <span className="absolute top-1/2 -right-0 w-[30%] h-[1px] bg-text "></span> */}
            </div>
            <div className="   flex justify-center  items-center  text-3xl  max-lg:order-3">
              <p className="w-[80%] mx-auto text-center">
                Flawless deployment with post-launch monitoring, analytics
                setup, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProcess;
