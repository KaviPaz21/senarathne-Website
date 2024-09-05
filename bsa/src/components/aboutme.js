import React from 'react'
import "./aboutme.css"
import logo from "../images/logo.png"
import wave from '../images/wave.svg'

import poly from '../images/poly.svg'
import me from '../images/senarathne2.jpg'
import { Link } from 'react-router-dom'

export default function Aboutme() {
  return (
    <div className='aboutme h-auto relative' >
      <img src={wave} className='-mt-20 w-screen' />
      <div className='Academy mb-7'>

        <h1 className='aboutme_header text-5xl font-bold font-serif py-4 text-center text-gray-600'>💪The Greatful Effort...</h1>

        <div className='abtext leading-9 text-center text-gray-600 w-cw900 relative left-1/2 -translate-x-1/2'>
          BS Physics Academy which is introduced by Mr. Bandara Senarathna, a Leading
          tution master in Sri Lanka for teaching plysics by targetting targeting the students who are facing G.C.E Advanced Level Examination in Sri lanka. <br />
          The Vision of this organization is to teach, explain and practice the advaced concepts, explain the practicals, give proper practice for the examination and eleminate the examination fear
          of the students by targetting the A/L s.
          To ful-fill that vision, we take several options such as produce quality and compleate materials through a powerful Learning Management System (LMS) called BSP LMS, Practical Video Sessions,
          Explanations through simulations ect

          <p className='text-c20 font-semibold mt-4 relative'>So Let's begin your Journey with ,
           <div className='logo w-48 relative rounded-xl left-1/2 -translate-x-1/2 top-8 cursor-pointer bg-blue-600 text-white py-2 hover:scale-105 duration-300 text-center'><Link to='/LMS'>Join With Us</Link></div></p>
        </div>


        <div className='t-topic text-6xl font-bold font-serif py-4 text-gray-700 w-auto'>👨‍🎓 ගුරුවරයා පිලිබදව....</div>
        <div className='t-image w-full'><img src={me} alt="bandara senarathne" className='abme w-cw500 rounded-2xl' /></div>
        <div className='about-s  text-center w-cw500 text-gray-600 font-semibold text-2xl justify-center'>
          <p>2020 වසරේදී, ගණිත අංශයෙන් උසස්පෙල විභාගයෙන් විශිෂ්ට ප්‍රතිඵලයක් ලබාගෙන, 
            මොරටුව විශ්වවිද්‍යාලයේ බුද්ධිමය යාන්ත්‍රවිද්‍යාව උපාධිය සඳහා හදාරමින් සිටී. 
            දැනට තෙවන වසරේ සිටින ඔහු, හංවැල්ල, කැස්බෑව, සහ වැල්ලවාය නගරවල 
            ජනප්‍රියම උපකාරක පංති නිර්මාණය කර ඇති අතර, ඔහුගේ ඉගැන්වීමෙන් දරුවන්
             විශිෂ්ට ප්‍රතිඵල කරා ගමන් කරමින් සිටී. ඔහුගේ ප්‍රායෝගික සහ නිර්මාණාත්මක 
             ඉගැන්වීම් ක්‍රමවේදය හරහා ඕනෑම සිසුවෙකුට විශිෂ්ඨ ප්‍රතිඵලයක් ලබාගත හැකි
              බව නොරහසකි. ඔහුගේ විශිෂ්ට ඉගැන්වීමේ කලාව සිසුන් අතර සීඝ්‍රයෙන් ජනප්‍රිය වෙමින් පවතී.</p>

          <div className="classes text-black inline-block mx-2 rounded-xl px-5 py-7 text-left hover:scale-105 duration-200">
            <div className="cltp font-pacifico font-bold">SIGMA</div>
            <div className="place text-lg pt-2">Wallawaya</div>
          </div>
          <div className="classes text-black inline-block mx-2 rounded-xl px-5 py-7 text-left hover:scale-105 duration-200">
          <div className="cltp font-pacifico font-bold">Minacrea</div>
          <div className="place text-lg pt-2">Hanwella</div>
          </div>
          <div className="classes text-black inline-block mx-2 rounded-xl px-5 py-7 text-left hover:scale-105 duration-200">
          <div className="cltp font-pacifico font-bold">Expertexion</div>
          <div className="place text-lg pt-2">Kesbawa</div>
          </div>
        </div>

      </div>



    </div>
  )
}
