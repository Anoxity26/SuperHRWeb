import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Reveal } from './Reveal'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
const Testimonials = () => {
  return (
    <div className="flex flex-col bg-gray-50 items-center">
      <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432] text-base font-bold mt-10 sm:mt-16 lg:mt-32">
        Testimonials
      </h3>
      <div className="text-2xl md:text-4xl font-bold mt-2 m-8 text-center">
        <span>See what our users </span>
        <span className="emphasis-text p-6 -ml-6 md:p-11 md:-ml-11">say </span>
        <span className="-ml-6 md:-ml-11">about us</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 p-10 m-4 ml-10 lg:m-10 items-center justify-center first-letter:mx-auto max-w-[1840px] ">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="xl:basis-1/3 md:basis-1/2 basis-[100%]">
              <Reveal>
                <TestimonialCard
                  imageSrc="/profile.png"
                  name="John Doe"
                  occupation="Talent Acquisition"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className="xl:basis-1/3 md:basis-1/2 basis-[100%]">
              <Reveal delay={0.1}>
                <TestimonialCard
                  imageSrc="/profilew.png"
                  name="Olivia Wilson"
                  occupation="TA Specialist"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className="xl:basis-1/3 md:basis-1/2 basis-[100%]">
              <Reveal delay={0.2}>
                <TestimonialCard
                  imageSrc="/profile.png"
                  name="Alex Brown"
                  occupation="TA professional"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className="xl:basis-1/3 md:basis-1/2 basis-[100%]">
              <Reveal>
                <TestimonialCard
                  imageSrc="/profilew.png"
                  name="Emily Davis"
                  occupation="Talent Acquisition"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className="xl:basis-1/3 md:basis-1/2 basis-[100%]">
              <Reveal delay={0.1}>
                <TestimonialCard
                  imageSrc="/profile.png"
                  name="Michael Johnson"
                  occupation="Recruitment Manager"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className="xl:basis-1/3 md:basis-1/2 basis-[100%]">
              <Reveal delay={0.2}>
                <TestimonialCard
                  imageSrc="/profilew.png"
                  name="Jane Smith"
                  occupation="TA specialist"
                  testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Reveal>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials
