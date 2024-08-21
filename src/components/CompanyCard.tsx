import React from 'react'
import Image from 'next/image'
import CompanyTag from './CompanyTag';


interface CompanyCardProps {
    CompanyName : string;
    imageSrc : string;
}

const CompanyCard = ({CompanyName, imageSrc} : CompanyCardProps) => {
  return (
    <div className='flex rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 w-56 relative items-center justify-center h-36'>
      <Image src={imageSrc} alt={CompanyName} width={70} height={70} className='flex items-center justify-center relative overflow-hidden w-[50%]'/>
      <CompanyTag CompanyName={CompanyName} />
    </div>
  )
}

export default CompanyCard
