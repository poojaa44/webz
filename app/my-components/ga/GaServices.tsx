import { GaServicesData } from "@/app/data/jsonData";
import React from "react";

const GaServices = () => {
  return (
    <section className="uni-padding-b">
      <div className="maxWidth-container mx-auto space-y-4 ">
        <h2 className="text-center">
          Google Ads Services Tailored to Your Business
        </h2>
        <div className="flex items-center ">
          <div className="   ">
            <p className="mb-6  text-center">
              {" "}
              We don’t believe in one-size-fits-all. Our experts build custom
              PPC strategies that align with your goals and deliver measurable
              results. Our Google Ads services include:
            </p>
            <ul className="list-disc list-inside space-y-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
              {GaServicesData.map((data, i) => (
                <li
                  key={data.desc + i}
                  className="border border-accent-orange p-2 rounded-md hover:bg-white/10 group  hover:border-text h-full "
                >
                  <span className="group-hover:text-text text-accent-orange font-bold ">
                    {" "}
                    {data.subtitle}
                  </span>{" "}
                  <br />
                  <span className="">{data.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="  lg:w-1/2 ">
            <img className=" w-[70%] mx-auto " src="/ga/what.png" alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default GaServices;
