import React from 'react'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Aboutme from '../components/aboutme'
import Workprocess from '../components/workprocess.js'

export default function Index() {
  return (
    <div>
        <div className=' fixed left-1/2 -translate-x-1/2 top-0'><Navbar className="z-0" bck={true} textcol={false} /></div>
        <Home classname="relative" />
        <Aboutme/>
        <Workprocess/>
      
    </div>
  )
}
