import React from "react";

const WhyUs = () => {
  return (
    <section className="uni-padding-b">
      <div className="maxWidth-container mx-auto flex max-lg:flex-col gap-4 items-center justify-center">
        <div className=" lg:w-1/2">
          <img src="/web/web-3.png" alt="" />
        </div>
        <div className=" lg:w-1/2">
          <h2 className="mb-6">Why Choose Us?</h2>
          <p className="mb-6">
            Your website is more than just a digital presence — it's a core part
            of your marketing engine. We focus on building high-performing
            websites that load fast, adapt seamlessly to all devices, and align
            perfectly with your brand and conversion goals. From custom landing
            pages to full-scale business websites, we deliver solutions that are
            as strategic as they are technical.
          </p>
          <ul className=" list-disc list-outside space-y-4">
            <li>
              <strong className="text-accent-orange font-bold">
                {" "}
                🧠 Development-Led Strategy{" "}
              </strong>
              <br />
              <span>
                {" "}
                – Not just “pretty websites,” but technically sound platforms
                built to scale.
              </span>
            </li>
            <li>
              <strong className="text-accent-orange font-bold">
                {" "}
                ⚡ Speed & Performance{" "}
              </strong>
              <br />
              <span>
                – We prioritize Core Web Vitals, page load speed, and clean,
                efficient code.
              </span>
            </li>
            <li>
              <strong className="text-accent-orange font-bold">
                🔒 Security-First Approach
              </strong>
              <br />
              <span>
                – We implement industry best practices to protect your data and
                users.
              </span>
            </li>
            <li>
              <strong className="text-accent-orange font-bold">
                {" "}
                📈 Marketing-Ready Builds{" "}
              </strong>
              <br />
              <span>
                – Every site is engineered to support your campaigns and
                tracking needs.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
