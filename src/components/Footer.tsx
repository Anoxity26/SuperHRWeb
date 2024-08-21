import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='bg-[#191919] sm:w-full justify-center sm:flex'>
            <div className='bg-[#191919] text-white p-32 flex-row flex justify-center lg:gap-[20%] max-w-[1500px] gap-[10%] text-sm'>
            <div className='flex flex-col gap-10'>
                <Image src="superhr_logo_dark.svg" alt='' width={250} height={100} />
                <div className='max-w-72'>Join the ranks of IT professionals who started their journey with us.</div>
                <div>
                    <ul className='flex flex-row gap-4'>
                        <li><Image src= "" alt='f' width={20} height={20} /></li>
                        <li><Image src= "" alt='i' width={20} height={20} /></li>
                        <li><Image src= "" alt='x' width={20} height={20} /></li>  
                        <li><Image src= "" alt='in' width={20} height={20} /></li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <h1 className='font-semibold text-lg sm:text-2xl'>Resources</h1>
                <ul className='flex flex-col gap-8'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Login</li>
                    <li>Sign up</li>
                    <li>Home Page</li>
                </ul>
            </div>
            <div className='flex flex-col gap-8'>
                <h1 className='font-semibold text-lg sm:text-2xl'>Legal</h1>
                <ul className='flex flex-col gap-8'>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                    <li>Legal Notice</li>
                </ul>
            </div>
            <div className='flex flex-col gap-8'>
                <h1 className='font-semibold text-lg sm:text-2xl'>Links</h1>
                <ul className='flex flex-col gap-8'>
                    <li>Feedbacks</li>
                    <li>Privacy policy</li>
                    <li>Legal Notice</li>
                </ul>
            </div>
        </div>
        </div>
        
    )
}

export default Footer
