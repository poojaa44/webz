import { faqWebData } from "@/app/data/jsonData";
import Faq from "@/app/my-components/seo/Faq";
import DevProcess from "@/app/my-components/web/DevProcess";
import WebBanner from "@/app/my-components/web/WebBanner";
import WebServices from "@/app/my-components/web/WebServices";
import WhyUs from "@/app/my-components/web/WhyUs";
import React from "react";

const page = () => {
  return (
    <main>
      <WebBanner />
      <WebServices />
      <DevProcess />
      <WhyUs />
      <Faq
        faqData={faqWebData}
        imageB="/web/faq-web.png"
        title=" Got Web Questions? We've Got Web Answers!"
      />
    </main>
  );
};

export default page;
