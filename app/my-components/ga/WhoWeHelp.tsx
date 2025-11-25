import React from "react";

const WhoWeHelp = () => {
  const data = [
    {
      title: "Real estate",
      imgSrc: "/ga/forWho/real_estate.png",
    },
    {
      title: "Health & wellness",
      imgSrc: "/ga/forWho/health.png",
    },
    {
      title: "SaaS & tech",
      imgSrc: "/ga/forWho/saas_tech.png",
    },
    {
      title: "Fashion & retail",
      imgSrc: "/ga/forWho/fashion_retail.png",
    },
    {
      title: "Education & coaching",
      imgSrc: "/ga/forWho/edu_coach.png",
    },
    {
      title: "Automotive services",
      imgSrc: "/ga/forWho/auto_service.png",
    },
    {
      title: "Law firms",
      imgSrc: "/ga/forWho/law.png",
    },
    // {
    //     title:"",
    //     imgSrc:"",
    //     pos:""
    // },
  ];
  return (
    <section>
      <div className="maxWidth-container mx-auto uni-padding-b">
        <div className="text-center space-y-3">
          <h2>Solutions for Every Industry</h2>
          <p>
            {" "}
            Whether you’re a small business looking to generate local leads or
            an eCommerce store aiming for global reach—we’ve got you covered.
            Our clients come from a wide range of industries including:
          </p>
        </div>
        <div className="flex max-lg:flex-col justify-evenly items-center gap-6 ">
          <div
            className=" space-y-3 
          "
          >
            {data.slice(0, 3).map((data, i) => (
              <div className="flex relative group w-full">
                <div
                  className={`absolute w-[90px] xl:w-[100px] h-[2px] bg-white ml-2  left-full max-lg:hidden  top-[50%]  `}
                ></div>
                <div
                  key={data.imgSrc + i}
                  className={` flex justify-start gap-2 items-center bg-accent-orange py-1  group-hover:bg-white rounded-r-sm  text-text relative font-bold basis-[80%] z-[1] px-3`}
                >
                  <p className="group-hover:text-accent-orange">{data.title}</p>

                  <img
                    className="w-[80px] p-3 rounded-full bg-text group-hover:bg-green-300"
                    src={data.imgSrc}
                    alt=""
                  />
                </div>
                <div className="h-auto bg-accent-orange py-1 group group-hover:bg-white pathy basis-[20%] -translate-x-1 relatice z-0">
                  {" "}
                </div>
              </div>
            ))}
          </div>
          <img
            className=" sm:w-[80%] max-lg:mx-auto lg:w-[30%]"
            src="/ga/ga_services.jpg"
            alt=""
          />
          <div
            className=" space-y-3
          "
          >
            {data.slice(3, 6).map((data, i) => (
              <div className="flex relative group w-full">
                <div
                  className={`absolute w-[90px] xl:w-[100px] h-[2px] bg-white mr-2  right-full  top-[50%]  max-lg:hidden `}
                ></div>
                <div className="h-auto bg-accent-orange py-1 group group-hover:bg-white left-pathy basis-[20%] translate-x-1 relatice z-0">
                  {" "}
                </div>
                <div
                  key={data.imgSrc + i}
                  className={` flex justify-start gap-2 items-center bg-accent-orange py-1  group-hover:bg-white rounded-l-sm  text-text relative font-bold basis-[80%] z-[1] px-3`}
                >
                  <p className="group-hover:text-accent-orange">{data.title}</p>

                  <img
                    className=" w-[80px] p-3 rounded-full bg-text group-hover:bg-green-300"
                    src={data.imgSrc}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
