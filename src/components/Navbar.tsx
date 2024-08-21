import React from 'react'
import Image from 'next/image'

interface NavbarProps {
    handlOpenForm : () => void
}

const Navbar = ({handlOpenForm} : NavbarProps) => {
    return (

        <div className="flex justify-between py-4 px-24 items-start relative max-w-[1640px] mx-auto">
            <Image src={"/superhr_logo.svg"} alt='HR' width={214} height={217} className='w-45 absolute center sm:w-28 sm:relative'/>
            <button className="join-button w-60 h-11 hidden sm:flex" onClick={handlOpenForm}
            ><span>Get early access now!</span></button>
        </div>
    )
}

export default Navbar