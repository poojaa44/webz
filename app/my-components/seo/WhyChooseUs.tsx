import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="uni-padding-b maxWidth-container mx-auto">
      <div className=" flex max-md:flex-col justify-center items-center">
        <div className="lg:w-1/2">
          <h2 className="text-center  text-accent-red ">Why choose us?</h2>
          <img className="w-[80%] mx-auto " src="/seo/why.jpg" alt="" />
        </div>
        <div className="lg:w-1/2 max-lg:text-center">
          <ul className="space-y-4 ">
            <li>
              <span className="text-accent-orange mr-2 font-bold">
                🚀 Strategic, Not Generic:
              </span>
              <span>
                We don’t do cookie-cutter campaigns. Every SEO strategy we craft
                is tailored to your business goals, industry landscape, and
                target audience — because your growth deserves a custom roadmap.
              </span>
            </li>
            <li>
              <span className="text-accent-orange mr-2 font-bold">
                🔍 Built on Research, Backed by Data:
              </span>
              <span>
                Gut feelings don’t rank websites. We use in-depth keyword
                analysis, competitor insights, technical audits, and real-time
                performance data to guide every move we make.
              </span>
            </li>
            <li>
              <span className="text-accent-orange mr-2 font-bold">
                🧠 Human + Technical Expertise:
              </span>
              <span>
                {" "}
                Our team combines creative SEO strategists with technical
                problem-solvers. That means we’re equally skilled at writing
                search-optimized content and fixing complex site structure
                issues.
              </span>
            </li>
            <li>
              <span className="text-accent-orange mr-2 font-bold">
                ✅ Google-Compliant, Future-Proof Tactics:
              </span>
              <span>
                We never chase shortcuts or trends that risk your rankings.
                Everything we do follows Google’s best practices — keeping your
                site safe, stable, and ready for algorithm updates.
              </span>
            </li>
            <li>
              <span className="text-accent-orange mr-2 font-bold">
                🤝 Partnership Mentality, Not Vendor Vibes:
              </span>
              <span>
                {" "}
                We don’t just work for you — we work with you. Expect open
                communication, clear timelines, and a collaborative relationship
                where your goals are our priority.
              </span>
            </li>
            <li>
              <span className="text-accent-orange mr-2 font-bold">
                📊 Full Transparency — Always:
              </span>
              <span>
                {" "}
                No smoke, no mirrors. You'll receive simple, actionable reports
                showing what we've done, what's improving, and where we’re
                headed — so you're never left guessing.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
