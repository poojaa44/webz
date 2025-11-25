import React from "react";

const WhyGa = () => {
  return (
    <section className="uni-padding-y">
      <div className="maxWidth-container mx-auto flex max-lg:flex-col  items-center ">
        <div className=" w-[80%] mx-auto lg:w-1/2 ">
          <img className="mx-auto" src="/ga/why.webp" alt="" />
        </div>
        <div className="lg:w-1/2  space-y-3 ">
          <h2>Why Google Ads is a Must-Have for Your Business Growth?</h2>
          <p>
            {" "}
            With over 5.6 billion searches per day, Google Ads allows your
            business to appear exactly when customers are searching for your
            products or services. Whether you're a local brand or a global
            company, Google Ads provides unmatched precision, speed, and
            scalability to help you grow. Here’s why businesses love it:
          </p>
          <ul className=" list-disc list-inside marker:text-accent-orange  ">
            <li>Appear at the top of Google Search results instantl</li>
            <li>
              Pay only when someone clicks on your ad (Pay-Per-Click model)
            </li>
            <li>Set and control your own budget</li>
            <li>
              Reach highly specific audiences based on location, device, time,
              interests & more
            </li>
            <li>Track every click, call, and conversion</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyGa;
