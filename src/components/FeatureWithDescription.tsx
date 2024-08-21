import React from 'react'
import Image from 'next/image'
import { Reveal } from './Reveal';

interface FeatureWithDescriptionProps {
    imageOnLeft: boolean;
    imageSrc: string;
    heading: string;
    subheading: string;
    description: string;
}

const FeatureWithDescription = ({ imageOnLeft, imageSrc, heading, subheading, description }: FeatureWithDescriptionProps) => {
    const flexDir = imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse';
    return (
        <Reveal>
            <div className={`flex flex-col-reverse lg:flex-row items-center 2xl:mx-auto justify-center ` + flexDir}>
                <div className='m-4'>
                    <Image src={imageSrc} alt='' width={450} height={400} />
                </div>
                <div className={`flex flex-col items-start sm:w-3/4 lg:w-1/3 m-8`}>
                    <h1 className='font-bold text-base bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432] '>{heading}</h1>
                    <div className='text-2xl md:text-[32px] font-bold mt-2 leading-tight'>{subheading}</div>
                    <div className='text-lg font-normal mt-8 opacity-80'>{description}</div>
                </div>
            </div>
        </Reveal>
    )
}

export default FeatureWithDescription
