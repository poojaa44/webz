import React from "react";
import Form from "./Form";
import { callSVG, mailSVG } from "@/app/data/svgData";

const ContactFormSection = () => {
  return (
    <section className="maxWidth-container mx-auto ">
      <div>
        <div className="grid lg:grid-cols-2 gap-10 uni-padding-y ">
          <div className=" flex gap-4 relative overflow-hidden justify-between items-start  ">
            <img
              src="/contact/phone_wire.png"
              className="absolute inset-0 w-full h-full max-lg:hidden"
              alt=""
            />
            <div className=" lg:basis-[30%] h-full"></div>
            <div className="  lg:basis-[70%] space-y-2 h-full pt-6 ">
              <h3>
                Let’s Make Some Digital Magic. We’re Always Online (kinda)
              </h3>
              <p>
                Whether you're a startup looking to grow or a brand craving
                viral content — we’ve got you. Drop us a message and let’s cook
                something great together. 🚀
              </p>
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
                  <span className="group-hover:text-accent-red  ">
                    {mailSVG}
                  </span>
                  <a className="" href="">
                    xyz@gmail.com
                  </a>
                </li>
              </ul>
              {/* <p>
                Prefer memes over emails? Same. But we’ll reply either way — hit
                us up!
              </p> */}
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
