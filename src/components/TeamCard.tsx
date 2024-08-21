import React from 'react'
import Image from 'next/image'
interface TeamCardProps {
    imageSrc: string,
    name: string,
    position: string,
    description: string
}

const TeamCard = ({ imageSrc, name, position, description }: TeamCardProps) => {
    return (
        <div className='flex flex-col bg-white justify-center gap-y-1 items-center p-5 w-52'>
            <Image src={imageSrc} alt='' width={120} height={120} className='rounded-full' />
            <div className='mt-3 font-semibold text-base text-center'>{name}</div>
            <div className='text-sm bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432] text-center'>{position.toUpperCase()}</div>
            <p className='text-xs text-[#222222] opacity-60 text-center'>{description.toUpperCase()}</p>
        </div>
    )
}

export default TeamCard
