import { Metadata } from "next";
import { metaData } from "@/app/data/metaJson";

export function getMetaDetails(pathName: string): Metadata {
  const metaDetails = metaData.find((elem) => elem.route === pathName);
  return {
    title: metaDetails?.title || "404",
    description: metaDetails?.description || "404",
    openGraph: {
      title: metaDetails?.title || "404",
      description: metaDetails?.description || "404",
      url: pathName || "",
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: pathName || "",
    },
    // verification: {
    //   google: "ak5VX1sC2JzJMoaGElfinxwX0GaT2vLYgSAge9zUa0Y",
    // },
  };
}
