import React from 'react'
import "./aboutme.css"
import logo from "../images/logo.png"

export default function Aboutme() {
  return (
    <div className='aboutme' >

      <div className='Academy mb-7'>
        <h1 className='aboutme_header text-5xl font-bold font-serif py-4'>The Effort...</h1>
        <img src={logo} alt="logo" className='logo w-96 rounded-xl top-1/2 translate-y-1/2' />
        <div className='text w-cw500 leading-8'>
          BS Physics Academy which is introduced by Mr. Bandara Senarathna, a Leading 
          tution master in Sri Lanka to produce crystel clear plysics knowledge targeting the students who are facing G.C.E Advanced Level Examination in Sri lanka. <br />
          The Vision of this organization is to teach, explain and practice the advaced concepts, explain the practicals, give proper practice for the examination and eleminate the examination fear 
          of the students by targetting the A/L s.
          To ful-fill that vision, we take several options such as produce quality and compleate materials through a powerful Learning Management System (LMS) called BSP LMS, Practical Video Sessions, 
          Explanations through simulations ect
        </div>
      </div>


    </div>
  )
}
