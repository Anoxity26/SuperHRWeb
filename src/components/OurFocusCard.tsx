import React from 'react'
import Image from 'next/image'

interface OurFocusProps {
    imageSrc : string,
    heading : string,
    desc : string,
}

const OurFocusCard = ({imageSrc, heading, desc} : OurFocusProps) => {
  return (
    <div className='w-72 h-[450px] m-10'>
      <Image src={imageSrc} alt='' width={340} height={100} className='rounded-lg shadow-lg mb-14 ' />
      <h1 className='font-bold text-2xl mb-5'>{heading}</h1>
      <div className='text-[#94A2B3]'>{desc}</div>
    </div>
  )
}

export default OurFocusCard
