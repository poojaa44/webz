import { SmmServicesData } from "@/app/data/jsonData";
import React from "react";

const SmmServices = () => {
  return (
    <section className="maxWidth-container mx-auto uni-padding-b">
      <h2 className="text-center mb-4">
        {" "}
        End-to-End Social Media Services Customized for Your Brand
      </h2>
      <p className="text-center">
        {" "}
        We take the stress out of social media by handling strategy, content,
        publishing, engagement, and analytics. Our services include:
      </p>
      <div className=" flex max-lg:flex-col-reverse gap-4 items-center  ">
        <div className="lg:w-1/2">
          <ul className="list-disc list-outside space-y-4 max-lg:ml-3">
            {SmmServicesData.map((service, i) => (
              <li>
                <span className="text-accent-orange font-bold text-lg">
                  {service.title} :
                </span>
                <br />
                <span>{service.description}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/smm/smm-2.png"
            className="rotate-y-180 lg:ms-auto "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SmmServices;
