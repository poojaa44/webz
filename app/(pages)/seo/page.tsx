import { faqSeoData } from "@/app/data/jsonData";
import Faq from "@/app/my-components/seo/Faq";
import SeoBanner from "@/app/my-components/seo/SeoBanner";
import SeoServices from "@/app/my-components/seo/SeoServices";
import WhyChooseUs from "@/app/my-components/seo/WhyChooseUs";
import WhySEOMatters from "@/app/my-components/seo/WhySEOMatters";
import React from "react";

const page = () => {
  return (
    <main>
      <SeoBanner />
      <WhySEOMatters />
      <SeoServices />
      <WhyChooseUs />
      <Faq
        faqData={faqSeoData}
        imageB={"/seo/faw.png"}
        title="Quick Answers to your Seo Questions!"
      />
    </main>
  );
};

export default page;
