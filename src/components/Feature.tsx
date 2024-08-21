import React from 'react'
import Image from 'next/image'

interface FeatureProps {
    imageOnLeft: boolean;
    imageSrc: string;
    heading: string;
    subheading: string;
}

const Feature = ({ imageOnLeft, imageSrc, heading, subheading }: FeatureProps) => {
    const order = imageOnLeft ? 0 : 1;
    return (
        <div className='flex flex-row flex-wrap items-center justify-center'>
            <div className={`m-16 order-${order}`}>
                <Image src={imageSrc} alt='' width={578} height={100} />
            </div>
            <div className='flex flex-col items-start gap-10 w-96 m-16 '>
                <h1 className='font-bold text-4xl'>{heading}</h1>
                <div className='text-xl'>{subheading}</div>
                <button className='bg-[#F86061] rounded-full w-48 p-2 text-white font-bold hover:shadow-lg'>Read More</button>
            </div>
        </div>
    )
}

export default Feature
