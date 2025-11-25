import { faqGoogleAdData } from "@/app/data/jsonData";
import GaBanner from "@/app/my-components/ga/GaBanner";
import GaServices from "@/app/my-components/ga/GaServices";
import WhatMakesUs from "@/app/my-components/ga/WhatMakesUs";
import WhoWeHelp from "@/app/my-components/ga/WhoWeHelp";
import WhyGa from "@/app/my-components/ga/WhyGa";
import Faq from "@/app/my-components/seo/Faq";
import React from "react";

const GoogleAds = () => {
  return (
    <main>
      <GaBanner />
      <WhyGa />
      <GaServices />
      <WhoWeHelp />
      <WhatMakesUs />
      <Faq
        faqData={faqGoogleAdData}
        imageB={"/seo/faw.png"}
        title=" Got Questions About Google Ads?"
      />
    </main>
  );
};

export default GoogleAds;
