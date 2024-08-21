import React from 'react'
import Image from 'next/image'
interface FeatureFAQCardProps {
    imageSrc?: string,
    feature: string,
    description: string
}

const FeatureFAQCard = ({ imageSrc, feature, description }: FeatureFAQCardProps) => {
    return (
        <div className='flex flex-col rounded-lg p-6 bg-gray-50 sm:m-12'>
          {/* <Image src={imageSrc} alt='' width={20} height={20} className='rounded-full' /> */}
          <div className='font-semibold'>{feature}</div>
          <div className='font-medium opacity-80'>{description}</div>
        </div>
    )
}

export default FeatureFAQCard
