import React from 'react'
import TestimonialCard from './TestimonialCard'
import { Reveal } from './Reveal'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
const Testimonials = () => {
  return (
    <div className='flex flex-col bg-gray-50 items-center'>
      <h3 className='bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432] text-base font-bold mt-10 sm:mt-16 lg:mt-32'>Testimonials</h3>
      <div className='text-2xl md:text-4xl font-bold mt-2 m-8 text-center'>
        <span>See what our users </span>
        <span className='emphasis-text p-6 -ml-6 md:p-11 md:-ml-11'>say </span>
        <span className='-ml-6 md:-ml-11'>about us</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 p-10 m-4 ml-10 lg:m-10 items-center justify-center first-letter:mx-auto max-w-[1840px] '>
        <Carousel>
          <CarouselContent>
            <CarouselItem className='xl:basis-1/3 md:basis-1/2 basis-[100%]'>
              <Reveal>
                <TestimonialCard
                  imageSrc='/anjana_prasad.jpeg'
                  name='Anjana Prasad'
                  occupation='Talent Acquisition, Headout'
                  testimonial='SuperHR solved for my candidate data access in no time, and the super calling feature is a step up in the recruitment game!'
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className='xl:basis-1/3 md:basis-1/2 basis-[100%]'>
              <Reveal delay={0.1}>
                <TestimonialCard
                  imageSrc='/gayathri.jpg'
                  name='Gayathri Katikam'
                  occupation='TA Specialist, Orange Health'
                  testimonial='SuperHR is a very efficient tool for recruiters. It is seamless, user friendly and a boon for every recruiter.'
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className='xl:basis-1/3 md:basis-1/2 basis-[100%]'>
              <Reveal delay={0.2}>
                <TestimonialCard
                  imageSrc='/athish_sagar.jpg'
                  name='Athish Sagar'
                  occupation='TA professional, Matarmedia'
                  testimonial="The Super-Calling feature is such a lifesaver for me, especially during hiring sprints! Click, click, import data and done, I'm set for calling 20-40 folks in a day like a breeze!"
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className='xl:basis-1/3 md:basis-1/2 basis-[100%]'>
              <Reveal>
                <TestimonialCard
                  imageSrc='/roopinder.jpg'
                  name='Roopinder Kaur'
                  occupation='Talent Acquisition, Randstad'
                  testimonial="It's a savior for recruiters who spend their entire day engaging with candidates, and most importantly, a ready database for any hiring request makes it more attractive to a recruiter like me!"
                />
              </Reveal>
            </CarouselItem>


            <CarouselItem className='xl:basis-1/3 md:basis-1/2 basis-[100%]'>
              <Reveal delay={0.1}>
                <TestimonialCard
                  imageSrc='/manasvi_chijwani.jpeg'
                  name='Manasvi Chijwani'
                  occupation='Recruitment Manager, Hireveda'
                  testimonial='I especially like the mobile app that allows me to access all of my candidate
                    information and make progress from
                    anywhere, at any time.'
                />
              </Reveal>
            </CarouselItem>

            <CarouselItem className='xl:basis-1/3 md:basis-1/2 basis-[100%]'>
              <Reveal delay={0.2}>
                <TestimonialCard
                  imageSrc='/kashmira_naidu.jpeg'
                  name='Kashmira Naidu'
                  occupation='TA specialist, FYND'
                  testimonial="The call from web feature has saved me so much time. Instead of dialing it manually, I can
                  simply click on the call button in the Web CRM and call goes from my phone."
                />
              </Reveal>
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
