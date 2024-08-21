import React from 'react'
interface CompanyTagProps {
    CompanyName : string;
}
const CompanyTag = ({CompanyName} : CompanyTagProps) => {
  return (
    <div className='rounded-tr-lg rounded-bl-lg bg-white shadow-xl w-[60%] absolute -bottom-5 -left-3 p-2'>
      {CompanyName}
    </div>
  )
}

export default CompanyTag
