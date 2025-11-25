"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  getContainerVariants,
  getItemVariants,
} from "../constant/FramerVariants";
import { CustomButton } from "../constant/CustomButton";

const OurServices = () => {
  // const containerVariants = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       staggerChildren: 0.3, // Delay between each child
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, x: -400 },
  //   show: {
  //     opacity: 1,
  //     x: -100,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  const containerVariantsLeft = getContainerVariants(0.25); // You can tweak the stagger
  const itemVariantsLeft = getItemVariants({ x: -100, duration: 0.6 }); // Customize if needed

  const containerVariantsRight = getContainerVariants(0.25); // You can tweak the stagger
  const itemVariantsRight = getItemVariants({ x: 100, duration: 0.6 }); // Customize if needed

  return (
    <section>
      <div className=" maxWidth-container mx-auto  uni-padding-y  ">
        <div className="space-y-6 lg:space-y-12">
          <div>
            <h2 className="text-center mb-4 ">Your Success, Our Services</h2>
            <p className="max-w-5xl mx-auto text-center">
              Discover the ways we can help you succeed. Our services are
              designed to streamline your processes, drive growth, and provide
              expert solutions tailored to your needs. Explore the details below
              to see
            </p>
          </div>
          <div className=" max-lg:hidden grid grid-cols-1 lg:grid-cols-3 max-md:gap-4">
            <motion.div
              className="our_service_left flex flex-col items-end gap-6 justify-center "
              variants={containerVariantsLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={itemVariantsLeft}>Digital Marketing</motion.p>
              <motion.p
                variants={itemVariantsLeft}
                className="translate-x-6 relative"
              >
                SEO
              </motion.p>
              <motion.p variants={itemVariantsLeft}>Google Ads</motion.p>
            </motion.div>
            <div className=" sm:w-[60%] mx-auto lg:w-full ">
              <img className="" src="/homepage/our-services.png" alt="" />
            </div>
            <motion.div
              className="our_service_right  flex flex-col items-start gap-6 justify-center overflow-hidden "
              variants={containerVariantsRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p variants={itemVariantsRight}>
                Social Media marketing
              </motion.p>
              <motion.p variants={itemVariantsRight} className="  ">
                Web Dev
              </motion.p>
              <motion.p variants={itemVariantsRight}>
                Content Management
              </motion.p>
            </motion.div>
          </div>
          {/* mob */}
          <div className="  grid lg:hidden grid-cols-1 lg:grid-cols-3 max-md:gap-4">
            <div className="our_service_leftm flex flex-col  gap-6 overflow-hidden ">
              <motion.p
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="  mx-auto text-center w-[80%] "
              >
                Digital Marketing
              </motion.p>
              <motion.p
                initial={{ x: 300 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className=" mx-auto text-center w-[80%] !bg-text !text-black "
              >
                SEO
              </motion.p>
              <motion.p
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="  mx-auto text-center w-[80%] "
              >
                Google Ads
              </motion.p>
            </div>
            <div className=" sm:w-[60%] mx-auto lg:w-full ">
              <img className="" src="/homepage/our-services.png" alt="" />
            </div>
            <div className="our_service_rightm  flex flex-col items-center gap-6 justify-center overflow-hidden ">
              <motion.p
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="  mx-auto text-center w-[80%] "
              >
                Social Media Mangement
              </motion.p>
              <motion.p
                initial={{ x: 300 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className=" mx-auto text-center w-[80%] !bg-text !text-black "
              >
                Web Development
              </motion.p>
              <motion.p
                initial={{ x: -300 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="  mx-auto text-center w-[80%] "
              >
                Content Management
              </motion.p>
            </div>
          </div>
          <div className="text-center">
            <CustomButton btnText="Explore" route="/services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
