import React from 'react'

const ContactUs = () => {
    const handleContactUsClick = () => {
        window.location.href = 'mailto:girish@superhr.ai';
    }

    return (
        <div className='flex flex-col justify-center items-center bg-[#FFF7F7] gap-8 p-10 '>
            {/* <div className='text-[#5E4242]'>
                WE MENTOR, GUIDE, AND HELP OUR MENTEE REACH NEW HEIGHTS!
            </div>
            <div className=' text-[36px] font-semibold text-center w-2/3 items-center justify-center'>
                Unlock Your Full Potential: Supercharge Your  Success with SuperHR Mentorship
            </div> */}
            <button className='w-40 bg-[#F79393] px-6 py-3 rounded-md font-bold hover:shadow-md' onClick={handleContactUsClick}>Contact Us</button>
        </div>
    )
}

export default ContactUs
