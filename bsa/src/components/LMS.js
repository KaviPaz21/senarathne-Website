import React from 'react'
import { Link } from 'react-router-dom'

export default function LMS() {
  return (
    <div className='text-center w-full mt-12'>
        <h1 className='text-3xl font-extrabold'>Request can't Proceed at the moment.😐</h1>
      <div className='font-semibold text-gray-700 text-2xl'>
      😶<br />
        LMS is under development now...!  <br />
        we will be back soon  

        <br /> <br /> <br />
        <div>Sorry For the Inconvenience😢</div>
        <Link to={'/'}><button className='bg-blue-600 mt-5 py-2 px-4 text-white rounded-lg hover:scale-105 duration-300'>BACK</button></Link>
      </div>
    </div>
  )
}
