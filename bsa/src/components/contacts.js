import React from 'react'
import './contact.css'
import fb from '../images/fb.svg'
import yt from '../images/yt.svg'
import tel from '../images/tel.svg'
import wp from '../images/wap.svg'
import { useForm, ValidationError } from '@formspree/react';

export default function Contacts() {


  const [state, handleSubmit] = useForm("xjkbzazb");
  if (state.succeeded) {
      alert("Thank You..! Our team will contact you soonn");}
  return (
    <div className='contactssec py-20'>
      <div className='contp text-5xl font-bold font-serif text-left text-gray-700'>📲 Contact Us</div>
      <div className="context ">
        <p className='conpara w-cw700 px-6 text-2xl font-zain font-semibold text-gray-700'>Feel Free to contact us on any kind of your educational concern.
          Just use your finger tips, and our team will contact you as soon as possible.!</p>
        <div className="socials text-xl font-zain  ml-16 mt-12">
          <div className="link py-2">
            <img src={yt} alt="yt" className='inline w-10 mr-12' /><span>Youtube/@BSphysics-m8x</span>
          </div>
          <div className="link py-2">
            <img src={fb} alt="yt" className='inline w-10 mr-12 ' /><span>Facebook/BS Physics Academy  </span>
          </div>
          <div className="link py-2">
            <img src={wp} alt="yt" className='inline w-10 mr-12' /><span>Channels/BS Physics Academy</span>
          </div>
          <div className="link py-2">
            <img src={tel} alt="yt" className='inline w-10 mr-12' /><span>Telegram/@BS Physics Academy</span>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="inputtiing w-cw500 px-5 py-5 border-2 border-gray-600 rounded-2xl">
          <div className='text-3xl font-zain font-bold'>Write a Message</div>
          <form onSubmit={handleSubmit} className='mt-5' action='https://formspree.io/f/xjkbzazb' method='POST'>
            <label htmlFor="name" className='py-1 text-xl font-semibold text-gray-600'>Name*</label><br />
            <input type="text" id='Name' name='Name' placeholder='Enter Your Name' className='px-5 py-2 w-full border border-gray-300 rounded-xl mb-5 mt-2' />

            <label htmlFor="name" className='py-1 text-xl font-semibold text-gray-600'>E-mail*</label><br />
            <input type="email" id='mail' name='mail' placeholder='Enter Your mail address' className='px-5 py-2 w-full border border-gray-300 rounded-xl mb-5 mt-2' />

            <label htmlFor="name" className='py-1 text-xl font-semibold text-gray-600'>Subject*</label><br />
            <input type="text" name='subject' id='subject' placeholder='Topic you going to discuss' className='px-5 py-2 w-full border border-gray-300 rounded-xl mb-5 mt-2' />

            <label htmlFor="name" className='py-1 text-xl font-semibold text-gray-600'>Messege*</label><br />
            <textarea name="msg" id='msg'  placeholder='Enter Your Messege Here...' className='px-5 py-2 w-full border border-gray-300 rounded-xl mb-5 mt-2 h-24'></textarea>

            <button className='mt-0 bg-blue-600 py-2 px-6 text-white rounded-lg hover:scale-105 duration-200' type='submit' disabled={state.submitting}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
