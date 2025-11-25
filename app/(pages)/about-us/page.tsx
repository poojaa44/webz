import AboutBanner from "@/app/my-components/about/AboutBanner";
import Cta from "@/app/my-components/about/Cta";
import Vission from "@/app/my-components/about/Vission";

export default function AboutUs() {
  return (
    <main>
      <AboutBanner />

      <Vission />
      <Cta />
    </main>
  );
}
