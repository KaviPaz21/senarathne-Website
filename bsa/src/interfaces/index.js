import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Aboutme from '../components/aboutme'
import Workprocess from '../components/workprocess.js'
import Thoughts from '../components/Thoughts.js'
import Contacts from '../components/contacts.js'
import Foter from '../components/foter.js'

export default function Index() {
  return (
    <div>
        <div className=' fixed left-1/2 -translate-x-1/2 top-0 w-screen z-50'><Navbar className="z-0" bck={true} textcol={false} /></div>
        <div className='w-screen ' id='home'><Home/></div>
        <div className='' id='aboutme'><Aboutme/></div>
        <div className='w-screen mt-5' id='wkprocess'><Workprocess/></div>
        <div className='w-screen mt-5' id='thoughts'><Thoughts/></div>
        <div className='w-screen mt-16' id='contacts'><Contacts/></div>
        <div className='w-screen mt-16'><Foter/></div>
    </div>
  )
}
/* 
       
        
        
        
        */