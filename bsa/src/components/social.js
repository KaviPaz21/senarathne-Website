import React from 'react'
import fb from '../images/fb.svg'
import yt from '../images/yt.svg'
import tel from '../images/tel.svg'
import wp from '../images/wap.svg'


export default function Social() {
  return (
    <div className='py-4'>
      
      <a href="http://www.youtube.com/@BSphysics-m8x" className="media inline-block px-1 hover:scale-105 duration-300"><img src={yt} alt="you tube" className='w-7' /></a>
      <a href="https://www.facebook.com/share/Gts5evRe6m9uvdEQ/?mibextid=qi2Omg" className="media inline-block px-1  hover:scale-105 duration-300"><img src={fb} alt="facebook" className='w-7' /></a>
      <a href=" https://whatsapp.com/channel/0029VainuDz72WTqiFhU8P0O " className="media inline-block px-1  hover:scale-105 duration-300"><img src={wp} alt="whats app" className='w-7' /></a>
      <a href="https://t.me/BS_Physics_Academy" className="media inline-block px-1  hover:scale-105 duration-300"><img src={tel} alt="telegram" className='w-7' /></a>
    </div>
  )
}
