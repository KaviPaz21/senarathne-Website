import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Aboutme from '../components/aboutme'
import Workprocess from '../components/workprocess.js'
import Thoughts from '../components/Thoughts.js'
import Contacts from '../components/contacts.js'

export default function Index() {
  return (
    <div>
        <div className=' fixed left-1/2 -translate-x-1/2 top-0 w-screen z-50'><Navbar className="z-0" bck={true} textcol={false} /></div>
        <div className='w-screen '><Home/></div>
        <div className='w-screen '><Aboutme/></div>
        <div className='w-screen mt-5'><Workprocess/></div>
        <div className='w-screen mt-5'><Thoughts/></div>
        <div className='w-screen mt-5'><Contacts/></div>
      
    </div>
  )
}
