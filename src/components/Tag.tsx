import React from 'react'

interface TagProps {
    lable : string;
}

const Tag = ({lable} : TagProps) => {
  return (
    <div className='flex p-[10px] px-[14px] m-2 justify-center items-center flex-shrink-0 rounded-full border border-opacity-20 border-gray-400 bg-white'>
      {lable}
    </div>
  )
}

export default Tag
