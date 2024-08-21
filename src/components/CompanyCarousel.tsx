import React from 'react'
import CompanyCard from './CompanyCard'
const CompanyCarousel = () => {
    return (
        <div className='flex flex-col items-center mx-auto'>
            <div className='text-center text-3xl m-10'>
            Our <span className='text-red-600 font-bold'>mentors</span> are from world’s best companies!
            </div>
            <div className='flex flex-wrap justify-center gap-16 mb-24'>
                <CompanyCard CompanyName="Uber" imageSrc='/uber.png' />
                <CompanyCard CompanyName="Amazon" imageSrc='/amazon.png' />
                <CompanyCard CompanyName="Google" imageSrc='/google.png' />
                <CompanyCard CompanyName="Microsoft" imageSrc='/microsoft.png' />
                <CompanyCard CompanyName="Meta" imageSrc='/meta.png' />
            </div>
        </div>

    )
}

export default CompanyCarousel
