import React, { useState } from 'react'
import './register.css'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

export default function Register() {
  const [name, setname] = useState(null)
  const [nic, setnic] = useState(null)
  const [mail, setmail] = useState(null)
  const [contact, setcontact] = useState(null)

  const [dist , setdist]  = useState(null)
  const [stream , setstream] = useState(null)
  const [year , setyear]  = useState(null)
  const [ school , setschool] =   useState(null)

  const [first, setfirst] = useState(true)
  const [second, setsecond] = useState(false)
  const [third, setthird] = useState(false)
  const [step, setstep] = useState(1)

  const [btn , setbtn] = useState("Next")

  const check = () => {
    if (first) {

      if (name != null && nic != null && mail != null && contact != null) {
        setfirst(!first)
        setsecond(!second)
        setstep(2)
      } else { alert("fields are empty") }
    }

    if (second) {

      if (dist != null && stream != null && year != null && school != null) {
        setsecond(!second)
        setthird(!third)
        setstep(3)
        setbtn("Submit")
      } else { alert("fields are empty") }
    }
  }

  const stephandler=(k)=>{
        if(k===1 && (second || third)){
            setfirst(true)
            setsecond(false)
            setthird(false)
            setstep(1)
        }
        if(k===2 && (third)){
        
          setsecond(true)
          setthird(false)
          setstep(2)
      }
  }
  return (
    <div className='Register bg-slate-500'>
      <div className='Register-box fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300'>
        
        <div className='right bg-white font-zain'>
          <img src={logo} alt="logo" className='w-60 rounded-3xl mb-4' />
          <div className='text-3xl font-bold font-zain'>Welcome to BS Physics Academy !</div>
          <div className='text-gray-500 text-c20'>Please fill all the fields given below for sucessfull Registration</div>
          <div className='forms relative'>


            <div className={`${!first && "scale-0"} my-5 text-nv18 duration-300`}>
              <div >Your Name</div>
              <input type="text"   className='w-full mr-16 border-b py-2 px-5 font-sans' value={name} onChange={(event) => setname(event.target.value)} />

              <div className='mt-8' >NIC Number</div>
              <input type="number"  className='w-full mr-16 border-b py-2 px-5 font-sans' value={nic} onChange={(event) => setnic(event.target.value)} />

              <div className='mt-8' >Email Address</div>
              <input type="email"  id="name" className='w-full mr-16 border-b py-2 px-5 font-sans' required value={mail} onChange={(event) => setmail(event.target.value)} />

              <div className='mt-8' >Contact Number</div>
              <input type="Number"  className='w-full mr-16 border-b py-2 px-5 font-sans' value={contact} onChange={(event) => setcontact(event.target.value)} />
            </div>



            <div className={`${!second && "scale-0"} absolute -top-5 my-5 text-nv18 duration-300 w-full`}>
              <div >A/L District</div>
              <input type="text"  className='w-full mr-16 border-b py-2 px-5 font-sans' value={dist} onChange={(event) => setdist(event.target.value)} />

              <div className='mt-8' >Stream</div>
              <input type="text"  className='w-full mr-16 border-b py-2 px-5 font-sans' value={stream} onChange={(event) => setstream(event.target.value)} />

              <div className='mt-8' >A/L Year</div>
              <input type="number"  className='w-full mr-16 border-b py-2 px-5 font-sans'  value={year} onChange={(event) => setyear(event.target.value)} />

              <div className='mt-8' >School</div>
              <input type="Text"  className='w-full mr-16 border-b py-2 px-5 font-sans' value={school} onChange={(event) => setschool(event.target.value)} />
            </div>

            <div className={`${!third && "scale-0"} absolute -top-5 my-5 text-nv18 duration-300 w-full`}>
              <div >Password</div>
              <input type="password"  className='w-full mr-16 border-b py-2 px-5 font-sans' value={dist} onChange={(event) => setdist(event.target.value)} />

              <div className='mt-8' >Confirm Password</div>
              <input type="password"  className='w-full mr-16 border-b py-2 px-5 font-sans' value={stream} onChange={(event) => setstream(event.target.value)} />
             
              <input type="checkbox" className=' mt-12 float-left'/>
              <div className=' mt-10 pl-4'>I agree to the terms and conditions with BS Physics Academy and I always follow the rules and resignations while i using this network</div>

              
            </div>

          </div>


          <div className='font-sans font-semibold text-c20 bg-blue-700 text-white text-center py-2 rounded-lg hover:bg-blue-600 duration-300' onClick={check}>{btn}</div>

          <div className='mt-5 flex justify-center'>
            <div className={`${step > 0 ? 'bg-green-600' : 'bg-gray-300'} w-1/4 mx-2 bg-gray-300 h-2 rounded-xl inline-block duration-300 cursor-pointer`} onClick={()=>stephandler(1)}></div>
            <div className={`${step > 1 ? 'bg-green-600' : 'bg-gray-300'} w-1/4 mx-2 bg-gray-300 h-2 rounded-xl inline-block duration-300 cursor-pointer`} onClick={()=>stephandler(2)}></div>
            <div className={`${step > 2 ? 'bg-green-600' : 'bg-gray-300'} w-1/4 mx-2 bg-gray-300 h-2 rounded-xl inline-block duration-300 cursor-pointer`}></div>
          </div>

         
        </div>
      </div>
    </div>
  )
}
