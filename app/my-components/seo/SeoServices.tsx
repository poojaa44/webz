"use client";
import React, { useState } from "react";

const data = [
  {
    front: (
      <div className=" text-center">
        <h4>Keyword Strategy</h4>
      </div>
    ),
    back: (
      <div className=" text-center text-black space-y-3  ">
        <img
          className="max-w-[100px] mx-auto"
          src="/seo/compressed/keyword_strategy.svg"
          alt=""
        />
        <p>
          {" "}
          We identify high-value search terms that your customers are actually
          using — not just what looks good on paper.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div className=" text-center">
        <h4>On-Page Optimization</h4>
      </div>
    ),
    back: (
      <div className=" text-center text-black space-y-3  ">
        <img
          className="max-w-[100px] mx-auto"
          src="/seo/compressed/on_page.svg"
          alt=""
        />
        <p>
          {" "}
          From meta tags to content structure, we fine-tune your pages so they
          speak Google’s language and rank higher.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div className=" text-center">
        <h4>Technical SEO</h4>
      </div>
    ),
    back: (
      <div className=" text-center text-black space-y-3  ">
        <img
          className="max-w-[100px] mx-auto"
          src="/seo/compressed/technical_seo.svg"
          alt=""
        />
        <p>
          {" "}
          We fix site speed, mobile issues, crawl errors, and indexing problems
          that hold your site back.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div className=" text-center">
        <h4>Content SEO</h4>
      </div>
    ),
    back: (
      <div className=" text-center text-black space-y-3  ">
        <img
          className="max-w-[100px] mx-auto"
          src="/seo/compressed/content_seo.svg"
          alt=""
        />
        <p>
          {" "}
          Get keyword-rich, engaging content that satisfies both readers and
          search engines — and keeps them coming back.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div className=" text-center">
        <h4>Local SEO</h4>
      </div>
    ),
    back: (
      <div className=" text-center text-black space-y-3  ">
        <img
          className="max-w-[100px] mx-auto"
          src="/seo/compressed/local_seo.svg"
          alt=""
        />
        <p>
          {" "}
          Dominate your neighborhood with Google Business Profile optimization
          and local citation management.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div className=" text-center">
        <h4>Backlink Building</h4>
      </div>
    ),
    back: (
      <div className=" text-center text-black space-y-3  ">
        <img
          className="max-w-[100px] mx-auto"
          src="/seo/compressed/backlink.svg"
          alt=""
        />
        <p>
          {" "}
          Earn high-quality links from trusted websites that boost your
          authority and search position — no spam, ever.
        </p>
      </div>
    ),
  },
  {
    front: (
      <div className=" text-center">
        <h4>Transparent Reporting</h4>
      </div>
    ),
    back: (
      <div className=" text-center text-black space-y-3  ">
        <img
          className="max-w-[100px] mx-auto"
          src="/seo/compressed/reporting.svg"
          alt=""
        />
        <p>
          {" "}
          See your progress in plain English with monthly reports showing
          traffic, rankings, and key metrics.
        </p>
      </div>
    ),
  },
];

const SeoServices = () => {
  const [isClicked, setIsClicked] = useState(0);

  return (
    <section className="uni-padding-b">
      <div className=" maxWidth-container mx-auto ">
        <div className="text-center mb-6 lg:mb-12 space-y-4">
          <h2>What we offer</h2>
          <p className="w-[80%] mx-auto">
            Unlock your website's full potential with our tailored and
            comprehensive SEO services, designed to elevate your search rankings
            and deliver sustainable results that matter to your business.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center w-full">
          {data.map((data, i) => (
            <div
              key={data?.back + i.toString()}
              className=" basis-full sm:basis-[47%] md:basis-[32%] lg:basis-[23%] aspect-[3/3] "
              style={{ perspective: "1000px" }}
              onClick={() =>
                isClicked === i ? setIsClicked(100) : setIsClicked(i)
              }
            >
              <div
                className={` w-full h-full  duration-500 hover:rotate-y-180!  ${
                  isClicked === i ? "max-md:rotate-y-180 " : ""
                }  `}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of the card */}
                <div
                  className="absolute w-full h-full bg-accent-orange   rounded-lg  p-3 flex flex-col items-center justify-center "
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <h2 className="text-white text-2xl">{data.front}</h2>
                </div>

                {/* Back of the card */}
                <div
                  className="absolute w-full h-full bg-text rounded-lg shadow-[0_0_20px_2px_#C71585]  p-6 flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div style={{ transform: "rotateY(0deg)" }}>
                    <h2 className="text-white text-2xl">{data.back}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoServices;
