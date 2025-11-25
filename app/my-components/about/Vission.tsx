import Image from "next/image";
import React from "react";

const Vission = () => {
  return (
    <section className="uni-padding-y">
      <div className="flex flex-col gap-3 justify-center items-center maxWidth-container mx-auto h-full">
        <h2>Mission & Vision </h2>
        <Image
          src="/about/vission.png"
          alt="Mission and Vision"
          width={500}
          height={500}
        />
        <div className="text-center ">
          We exist to demystify digital marketing for growing businesses. Too
          many companies waste budgets on tactics that don't align with business
          goals. We're here to change that with transparent strategies, honest
          reporting, and campaigns built for real results
        </div>
      </div>
    </section>
  );
};

export default Vission;
