import React from 'react'
import Feature from './Feature'
import Image from 'next/image'
import OurFocusCard from './OurFocusCard'
const OurFocus = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center w-screen p-16 flex-row bg-[#FFF7F7]'>
                <h1 className='font-bold text-4xl'>Our Focus</h1>
                <Image src="/our_focus.svg" alt='' width={65} height={65} className='mt-8' />
            </div>
            <div className='flex flex-row gap-16 flex-wrap justify-center'>
                <OurFocusCard imageSrc='/focus.png' heading='Interview Assistance' desc='Unlock Your Full Potential: Supercharge Your Interview Success with SuperHR Mentorship' />
                <OurFocusCard imageSrc='/career_transition_creative.jpg' heading='Career transition' desc='Seamless Transition: Unlock Opportunities and Expert Guidance for a Successful Transition.' />
                <OurFocusCard imageSrc='/international_career_creative.jpg' heading='International Career' desc="Unlock Global Career Growth with SuperHR's International Mentors Who Live and Work Abroad." />
            </div>

            {/* <Feature imageOnLeft={true} imageSrc='/next.svg' heading='Develop Without Limits' subheading='Connect with top-tier professionals and reshape your destiny. Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.' />
            <Feature imageOnLeft={false} imageSrc='/mentors.svg' heading='Develop Without Limits' subheading='Connect with top-tier professionals and reshape your destiny. Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.' />
            <Feature imageOnLeft={true} imageSrc='/superhr_logo.svg' heading='Develop Without Limits' subheading='Connect with top-tier professionals and reshape your destiny. Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.' />
            <Feature imageOnLeft={false} imageSrc='/vercel.svg' heading='Develop Without Limits' subheading='Connect with top-tier professionals and reshape your destiny. Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.Connect with top-tier professionals and reshape your destiny.' /> */}
        </div>
    )
}

export default OurFocus
