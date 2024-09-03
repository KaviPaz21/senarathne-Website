import React from 'react'

export default function Menu({clicked}) {
  return (
    <div className='px-1 py-1 w-9'>
      
      <div className='line1 mt-1 w-8 rounded-full h-2x bg-gray-800'></div>
      <div className={`${clicked ? "w-8" :"w-6 ml-2"} rounded-full h-2x bg-gray-800 duration-300 line1 mt-1`}></div>
      <div className={`${clicked ? "w-8" :"w-4 ml-4"} rounded-full h-2x bg-gray-800 duration-300 line1 mt-1`}></div>
      
    </div>
  )
}
