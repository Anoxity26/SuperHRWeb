import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer2 = () => {
    return (
        <div className='bg-white flex flex-col lg:flex-row items-center justify-between text-[#222222] p-8 pt-20'>
            <div className='flex flex-col lg:ml-24 gap-y-8 lg:w-96 items-center'>
                <Image src="superhr_logo.svg" alt='' width={161} height={28} />
                Made with ❤️ in India.
            </div>
            <div className='flex flex-col items-center mt-3 lg:mt-0 lg:mr-24 lg:items-start '>
                <ul className='flex flex-row gap-4'>
                    <li><a href=""><Image src="/linkedin_icon.svg" alt='in' width={24} height={24} /></a></li>
                    <li><Image src="/Instagram.svg" alt='I' width={24} height={24} className='opacity-20' /></li>
                    <li><Image src="/twitter.svg" alt='T' width={24} height={24} className='opacity-20' /></li>
                </ul>
                <div className='mt-4 lg:mt-10 text-center'>All rights reserved. © 2023.</div>
                <div className='flex gap-6 items-center justify-center mt-3 underline'>
                    <div><Link href="" className='opacity-60'>Privacy & Terms</Link></div>
                    <div className='opacity-20'>|</div>
                    <div><Link href="" className='opacity-60'> Terms of Service</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Footer2
