import React from 'react'
import Image from 'next/image'
interface TestimonialCardProps {
    imageSrc : string,
    testimonial : string,
    name : string,
    occupation : string
}

const TestimonialCard = ({ imageSrc, testimonial, name, occupation }: TestimonialCardProps) => {
  return (
    <div className='flex flex-col rounded-lg border-1 border-[#EBEBEB] p-6 bg-white my-2 sm:my-12 sm:m-12  lg:w-auto m-8'>
      <p className='text-base text-[#222222] opacity-60'>&ldquo;{testimonial}&rdquo;</p>
      <br />
      <div className='flex flex-row mt-2'>
        <Image src={imageSrc} alt='' width={40} height={40} className='rounded-full w-fit h-fit' />
        <div className='flex flex-col ml-3 text-sm gap-1'>
          <div className='font-bold'>{name}</div>
          <div className='text-[#222222] opacity-60'>{occupation}</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
