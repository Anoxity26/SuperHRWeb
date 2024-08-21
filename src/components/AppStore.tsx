import React from 'react'
import Image from 'next/image'
const AppStore = () => {
    return (
        <div className='flex mx-auto justify-center z-0 bg-gray-50 mt-2 sm:mt-16 lg:mt-32'>
            <Image src='/PhoneScreen.png' alt='' width={200} height={400}  className='z-20'/>
            <div className='ml-4 items-start z-20'>
                <Image src='/QRCode.png' alt='' width={120} height={120} />
                <div className='bg-clip-text text-transparent bg-gradient-to-b from-[#ed6d31] to-[#eb4432] font-bold ml-1 text-lg'>All this from the convenience of your phone.</div>
                <div className='font-bold ml-1 text-lg'>Download the SuperHR mobile app.</div>
            </div>
            <div className=' h-[60px] bg-white absolute  w-full z-10'></div>
        </div>
    )
}

export default AppStore