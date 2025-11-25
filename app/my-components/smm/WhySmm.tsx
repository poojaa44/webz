import React from "react";

const WhySmm = () => {
  return (
    <section className="uni-padding-y">
      <div className=" flex max-lg:flex-col items-center maxWidth-container mx-auto ">
        <div className=" lg:w-1/2">
          <img className="w-[80%] mx-auto" src="/smm/why_smm.png" alt="" />
        </div>
        <div className=" lg:w-1/2 space-y-4">
          <h2> Why Social Media is Essential for Your Business?</h2>
          <p>
            {" "}
            With billions of active users across platforms like Instagram,
            Facebook, LinkedIn, TikTok, and X (Twitter), social media is where
            your audience lives. It’s more than just posting—it’s about building
            trust, driving engagement, and turning followers into customers.
          </p>
          <ul className="list-disc list-inside marker:text-accent-orange space-y-4">
            Here’s why brands invest in social media:
            <br /> <br />
            <li>Build brand awareness and credibility</li>
            <li>Connect directly with your target audience</li>
            <li>Drive website traffic and leads</li>
            <li>Improve customer retention and loyalty</li>
            <li>Gain valuable market insights and feedback</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhySmm;
