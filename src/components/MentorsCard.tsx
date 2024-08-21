import React from 'react'
import Image from 'next/image'
interface MentorCardProps {
    imagesSrc : string,
    name : string, 
    occupation : string
}

const MentorsCard = ({imagesSrc, name, occupation} : MentorCardProps) => {
  return (
    <div className='flex flex-col rounded-lg shadow-lg border-[1px] border-gray-200  sm:w-80 h-[400px] m-6 sm-m-6'>
      <Image src={imagesSrc} alt='' width={320} height={320} className='rounded-tl-[100px] rounded-br-[80px] rounded-tr-lg ' />
      <div className='font-bold text-lg ml-3 mt-3 '>{name}</div>
      <div className='ml-3 mb-3 text-[#676972] flex-wrap flex'>{occupation}</div>
    </div>
  )
}

export default MentorsCard
