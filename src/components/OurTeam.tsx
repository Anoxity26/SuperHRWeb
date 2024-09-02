import React from 'react'
import Image from 'next/image'
import TeamCard from './TeamCard'
import { Reveal } from './Reveal'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import TestimonialCard from './TestimonialCard'
const OurTeam = () => {
    return (
      <div className="flex flex-col 2xl:mx-auto sm:mx-24 mt-10 sm:mt-16 lg:mt-32 max-w-[1840px]">
        <div className="flex flex-col mx-8 2xl:w-1/2 items-center 2xl:items-start 2xl:mx-24">
          <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-[#ed6c31] to-[#ec5c32] text-base font-bold">
            Our Team
          </h3>
          <div className="font-bold text-[#222222] text-2xl sm:text-4xl mt-2">
            Meet our dynamic team
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 p-10 m-4 lg:m-10 items-center justify-center first-letter:mx-auto max-w-[1840px] ">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="xl:basis-1/4 md:basis-1/2 basis-[100%]">
                <Reveal team={true}>
                  <TeamCard
                    imageSrc="/profile.png"
                    name="John Doe"
                    position="Co-founder"
                    description="Company Name"
                  />
                </Reveal>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/4 md:basis-1/2 basis-[100%]">
                <Reveal team={true}>
                  <TeamCard
                    imageSrc="/profile.png"
                    name="Michael Johnson"
                    position="Co-founder"
                    description="Company Name"
                  />
                </Reveal>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/4 md:basis-1/2 basis-[100%]">
                <Reveal team={true}>
                  <TeamCard
                    imageSrc="/profilew.png"
                    name="Emily Davis"
                    position="Founding team"
                    description="Company Name"
                  />
                </Reveal>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/4 md:basis-1/2 basis-[100%]">
                <Reveal team={true}>
                  <TeamCard
                    imageSrc="/profile.png"
                    name="Christopher Taylor"
                    position="Business Consultant"
                    description="Company Name"
                  />
                </Reveal>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/4 md:basis-1/2 basis-[100%]">
                <Reveal team={true}>
                  <TeamCard
                    imageSrc="/profilew.png"
                    name="Sophia Martinez"
                    position="Design Consultant"
                    description="Company Name"
                  />
                </Reveal>
              </CarouselItem>

              <CarouselItem className="xl:basis-1/4 md:basis-1/2 basis-[100%]">
                <Reveal team={true}>
                  <TeamCard
                    imageSrc="/profilew.png"
                    name="Olivia Wilson"
                    position="Product Designer"
                    description="Company Name"
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

export default OurTeam