import React from "react";

const WhatDiff = () => {
  return (
    <section className="maxWidth-container mx-auto uni-padding-b">
      <h2 className="text-center mb-4">
        {" "}
        Why Brands Trust Our Social Media Experts?
      </h2>

      <div className=" flex max-lg:flex-col-reverse gap-4 items-center  ">
        <div className="lg:w-1/2">
          <img
            src="/smm/smm-4.png"
            className="rotate-y-180 w-[80%] lg:ms-auto "
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <h4 className="mb-3 text-xl ">
            We’re not just posting—we’re growing your brand with purpose and
            precision.
          </h4>
          <p className="mb-4 ">
            Our social media management is designed to deliver real results—from
            stronger engagement to measurable business growth. Here’s what sets
            us apart:
          </p>
          <ul className="list-disc list-outside space-y-4 max-lg:ml-3 ">
            <li>
              ✅{" "}
              <strong className="text-accent-orange">
                {" "}
                Customized content
              </strong>{" "}
              <br /> —for each platform—tailored to audience behavior and trends
            </li>
            <li>
              ✅{" "}
              <strong className="text-accent-orange">
                {" "}
                ROI-focused strategy
              </strong>{" "}
              <br />
              —we track conversions, not just likes
            </li>
            <li>
              ✅{" "}
              <strong className="text-accent-orange">
                {" "}
                In-house creative team
              </strong>{" "}
              <br />
              —designers, copywriters, and strategists working in sync
            </li>
            <li>
              ✅{" "}
              <strong className="text-accent-orange">
                {" "}
                24/7 monitoring & engagement
              </strong>{" "}
              <br />
              —we don’t miss a message or mention
            </li>
            <li>
              ✅{" "}
              <strong className="text-accent-orange">
                {" "}
                Transparent reporting
              </strong>{" "}
              <br />
              —monthly dashboards with clear KPIs and insights
            </li>
            <li>
              ✅ <strong className="text-accent-orange"> Proven results</strong>{" "}
              <br />
              —real client case studies and success stories
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatDiff;
