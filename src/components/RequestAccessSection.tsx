import React from 'react'

interface RequestAccessSectionProps {
    openForm: () => void
}

const RequestAccessSection = ({ openForm }: RequestAccessSectionProps) => {
    return (
        <div className='p-12 flex flex-col items-center gap-8'>
            <h1 className='text-4xl font-bold'>Get started with SuperHR today!</h1>
            <p>Elevate your recruiting game.</p>
            <button className="join-button relative phone:text-base phone:h-16 sm:w-auto sm:h-12 sm:text-xs lg:text-base xl:h-14 p-16" onClick={openForm} >
                <span className='font-medium'>Book Demo</span>
            </button>
        </div>
    )
}

export default RequestAccessSection
