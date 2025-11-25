import React from "react";

const WhatMakesUs = () => {
  return (
    <section className="uni-apdding-b maxWidth-container mx-auto ">
      <h2 className="text-center"> Why Clients Trust Our Google Ads Experts</h2>
      <div className="flex   max-lg:flex-col items-center gap-4 ">
        <div className="lg:w-1/2">
          <img className="w-[70%] mx-auto" src="/ga/what.png" alt="" />
        </div>
        <div className="lg:w-1/2 space-y-6">
          <h4>We don't just run ads—we build profit-driven ad systems.</h4>
          <ul className="space-y-4 list-inside marker:text-accent-orange">
            <li>✅ Google Ads Certified Professionals</li>
            <li>✅ ROI-Driven & Transparent Approach</li>
            <li>✅ No Long-Term Contracts</li>
            <li>✅ Dedicated Account Manager</li>
            <li>✅ 24/7 Performance Monitoring</li>
            <li>✅ Real-Time Reporting Dashboard</li>
            <li>✅ Proven Case Studies & Success Stories</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUs;
