import { WebDevServicesData } from "@/app/data/jsonData";
import React from "react";
import { CustomButton } from "../constant/CustomButton";

const WebServices = () => {
  return (
    <section className="uni-padding-y">
      <div className="maxWidth-container mx-auto xl:w-[70%]">
        <h2 className="text-center  mb-6">Our Web Development Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {WebDevServicesData.map((service, i) => (
            <div
              key={service.title + i}
              className=" flex flex-col gap-3 justify-center items-center border border-white hover:border-accent-orange rounded-lg p-2 "
            >
              <div className="p-4 w-full max-w-[100px] mx-auto  rounded-full border-accent-red border-4 bg-text">
                <img className="    " src={service.imgSrc} alt="" />
              </div>
              <h4 className="text-center text-accent-orange">
                {service.title}
              </h4>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
          <CustomButton classValues="col-span-full mx-auto" route="/" />
        </div>
      </div>
    </section>
  );
};

export default WebServices;
