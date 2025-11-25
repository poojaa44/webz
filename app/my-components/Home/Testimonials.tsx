import { dataTestimonials } from "@/app/data/jsonData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const Testimonials = () => {
  return (
    <section>
      <div className=" maxWidth-container mx-auto uni-padding-b ">
        <h2 className="text-center mb-6">Testimonials</h2>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {dataTestimonials.map((testimonial, i) => (
              <CarouselItem key={testimonial.name} className="">
                <div className=" flex flex-col items-center gap-6 ">
                  <img
                    className=" max-w-[100px] sm:max-w-[200px]"
                    src={testimonial.photo}
                    alt={testimonial.name}
                  />
                  <p className="text-center max-w-5xl ">
                    {testimonial.testimonial}
                  </p>
                  <strong className="text-accent-orange">
                    {testimonial.name}
                  </strong>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-accent-orange left-0 max-sm:top-[30%]" />
          <CarouselNext className="text-accent-orange right-0 max-sm:top-[30%]" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
