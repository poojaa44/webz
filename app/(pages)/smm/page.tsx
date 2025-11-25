import { faqSmmData } from "@/app/data/jsonData";
import Faq from "@/app/my-components/seo/Faq";
import SmmBanner from "@/app/my-components/smm/SmmBanner";
import SmmServices from "@/app/my-components/smm/SmmServices";
import WhatDiff from "@/app/my-components/smm/WhatDiff";
import WhySmm from "@/app/my-components/smm/WhySmm";
import React from "react";

const page = () => {
  return (
    <main>
      <SmmBanner />
      <WhySmm />
      <SmmServices />
      <WhatDiff />
      <Faq
        title="Your Social Media Questions—Answered"
        faqData={faqSmmData}
        imageB="/smm/smm-5.png"
      />
    </main>
  );
};

export default page;
