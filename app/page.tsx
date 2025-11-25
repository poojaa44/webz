import { getMetaDetails } from "@/lib/routine";
import Marquee from "./my-components/constant/Marquee";
import HomeBanner from "./my-components/Home/HomeBanner";
import OurServices from "./my-components/Home/OurServices";
import Testimonials from "./my-components/Home/Testimonials";
import WhatWeDo from "./my-components/Home/WhatWeDo";

export const metadata = getMetaDetails("/");

export default function Home() {
  return (
    <main className="  ">
      <HomeBanner />
      <OurServices />
      <WhatWeDo />
      <Marquee />
      <Testimonials />
    </main>
  );
}
