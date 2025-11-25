import React from "react";

const AboutBanner = () => {
  return (
    <section className=" h-[40vh] bg-accent-orange/20">
      <div className="flex flex-col gap-3 justify-center items-center  maxWidth-container mx-auto h-full ">
        <h1> About Us</h1>
        <p>
          A team of certified strategists, creative minds, and analytics experts
          working together to solve your toughest marketing challenges
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;
