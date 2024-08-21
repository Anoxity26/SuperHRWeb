import React from 'react'
import Image from 'next/image'
import FeatureFAQCard from './FeatureFAQCard'
const FeatureFAQ = () => {
  return (
    <div className='flex flex-col items-center m-16'>
      <h3 className='bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432] text-base font-bold'>Features</h3>
      <h1 className='text-xl sm:text-4xl font-bold mt-1'>Frequently asked questions</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-[#222222] text-base mx-auto max-w-[1840px]'>
        <FeatureFAQCard feature='Feature' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, laboriosam.' />
        <FeatureFAQCard feature='Feature' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, laboriosam.' />
        <FeatureFAQCard feature='Feature' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, laboriosam.' />
        <FeatureFAQCard feature='Feature' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, laboriosam.' />
        <FeatureFAQCard feature='Feature' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, laboriosam.' />
        <FeatureFAQCard feature='Feature' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, laboriosam.' />
      </div>
    </div>
  )
}

export default FeatureFAQ