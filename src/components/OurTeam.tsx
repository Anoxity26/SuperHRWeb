import React from 'react'
import Image from 'next/image'
import TeamCard from './TeamCard'
import { Reveal } from './Reveal'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import TestimonialCard from './TestimonialCard'
const OurTeam = () => {
    return (
        <div className='flex flex-col 2xl:mx-auto sm:mx-24 mt-10 sm:mt-16 lg:mt-32 max-w-[1840px]'>
            <div className='flex flex-col mx-8 2xl:w-1/2 items-center 2xl:items-start 2xl:mx-24'>
                <h3 className='bg-clip-text text-transparent bg-gradient-to-b from-[#ed6c31] to-[#ec5c32] text-base font-bold'>Our Team</h3>
                <div className='font-bold text-[#222222] text-2xl sm:text-4xl mt-2'>Meet our dynamic team</div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 p-10 m-4 lg:m-10 items-center justify-center first-letter:mx-auto max-w-[1840px] '>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/girish_budhwani.jpeg'
                                    name='Girish Budhwani'
                                    position='Co-founder'
                                    description='Ex-Microsoft, IIT'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/manish_dipankar.jpeg'
                                    name='Manish Dipankar'
                                    position='Co-founder'
                                    description='Ex-Palo Alto Networks, VIT'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/heena_budhwani.jpg'
                                    name='Heena Budhwani'
                                    position='Founding team'
                                    description='TA specialist, MBA'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/samrat_datta.jpeg'
                                    name='Samrat Datta'
                                    position='Business Consultant'
                                    description='Swiggy, IIM'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/siddhant_tiwari.jpg'
                                    name='Siddhant Tiwari'
                                    position='Design Consultant'
                                    description='Zee, Ex-Uber'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/dhruv_mehta.png'
                                    name='Dhurv Mehta'
                                    position='Product Designer'
                                    description='Dotnyx, Ex-OkIndia'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/neet_dodhia.jpeg'
                                    name='Neet Dodhia'
                                    position='Product Consultant'
                                    description='Cashflo, GrowthX'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/shivansh_jaiswal.jpeg'
                                    name='Shivansh Jaiswal'
                                    position='Tech Intern'
                                    description='IIT Jodhpur'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/deepanshu_kewalramani.jpg'
                                    name='Deepanshu Kewalramani'
                                    position='Tech Intern'
                                    description='IIT Jodhpur'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/Shriansh_Agrawal.png'
                                    name='Shriansh Agrawal'
                                    position='Tech Intern'
                                    description='IIT Jodhpur'
                                />
                            </Reveal>
                        </CarouselItem>

                        <CarouselItem className='xl:basis-1/4 md:basis-1/2 basis-[100%]'>
                            <Reveal team={true}>
                                <TeamCard
                                    imageSrc='/animesh_singh.jpeg'
                                    name='Animesh Singh'
                                    position='Design Intern'
                                    description='IIT Jodhpur'
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

export default OurTeam