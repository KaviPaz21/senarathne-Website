import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Aboutme from '../components/aboutme'

export default function Index() {
  return (
    <div>
        <div className=' sticky top-0'><Navbar className="z-0" bck={true} textcol={false} /></div>
        <Home classname="relative" />
        <Aboutme/>
      
    </div>
  )
}
