import React from 'react'
import "./aboutme.css"
import logo from "../images/logo.png"

export default function Aboutme() {
  return (
    <div className='aboutme' >

      <div className='Academy mb-7'>
        <h1 className='aboutme_header text-5xl font-bold font-serif py-4 text-center'>The Effort...</h1>
        
        <div className='text w-cw900 leading-8 text-center'>
          BS Physics Academy which is introduced by Mr. Bandara Senarathna, a Leading 
          tution master in Sri Lanka to produce crystel clear plysics knowledge targeting the students who are facing G.C.E Advanced Level Examination in Sri lanka. <br />
          The Vision of this organization is to teach, explain and practice the advaced concepts, explain the practicals, give proper practice for the examination and eleminate the examination fear 
          of the students by targetting the A/L s.
          To ful-fill that vision, we take several options such as produce quality and compleate materials through a powerful Learning Management System (LMS) called BSP LMS, Practical Video Sessions, 
          Explanations through simulations ect

          <p className='text-c17 font-semibold mt-4 relative'>So Let's begin your Journey with ,
          <img src={logo} alt="logo" className='logo w-80 absolute rounded-xl left-1/2 -translate-x-1/2 top-8 cursor-pointer hover:scale-105 duration-300' /></p>
        </div>
      </div>


    </div>
  )
}
