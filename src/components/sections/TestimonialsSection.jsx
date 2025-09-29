import React from "react";
import SectionHeading from "../SectionHeading";
import TestimonialCard from "../TestimonialCard";
import { testimonial_1 } from "../../constant/constant";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const testimonialData = [
  {
    id: 1,
    image: testimonial_1,
    name: "Mike taylor",
    description: ` “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”  `,
    designation: "CEO of Red Button",
  },
  {
    id: 2,
    image: testimonial_1,
    name: "Chris Thomas",
    description: ` “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”  `,
    designation: "CEO of Red Button",
  },
  {
    id: 3,
    image: testimonial_1,
    name: "Md Easin",
    description: ` “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”  `,
    designation: "CEO of Red Button",
  },
];

const TestimonialsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-[409px_504px] gap-[124px]">
          <div>
            <SectionHeading
              heading={"What people say about Us."}
              subHeading={"Testimonials"}
              align="left"
            />
          </div>
          <div className="testimonial_slider">
            <Splide
              options={{
                direction: "ttb",
                height: "356px",
                gap: "30px",
                // wheel: true,
              }}
            >
              {testimonialData?.map((testimonial) => {
                return (
                  <SplideSlide key={testimonial.id}>
                    <div className="p-10 ">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
            {/* 
            <Splide
              options={{
                hasTrack: false,
                direction: "ttb",
                height: "356px",
                gap: "30px",
                // wheel: true,
              }}
            >
              <SplideTrack>
                <SplideSlide>
                  {testimonialData?.map((testimonial) => {
                    return (
                      <SplideSlide key={testimonial.id}>
                        <div className="p-10 ">
                          <TestimonialCard testimonial={testimonial} />
                        </div>
                      </SplideSlide>
                    );
                  })}
                </SplideSlide>
              </SplideTrack>

              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  Prev
                </button>
                <button className="splide__arrow splide__arrow--next">
                  Next
                </button>
              </div>
            </Splide> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
