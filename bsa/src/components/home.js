import React, { useState, useEffect } from 'react'
import './home.css'
import Social from './social'

import home from '../images/home.svg'


export default function Home() {
    

    return (
        <div className='homepage hptwo h-screen'> 
            <div className='home-Details pt-16'>
                <div className="slogan text-5xl text-gray-900 font-semibold text-left">ආසාවෙන් ඉගෙන ගන්න...</div>
                <div className="subject pt-4 text-left font-bold text-8xl text-purple-900">PHYSICS</div>
                <div className="name text-left pt-7 font-bold text-6xl text-gray-800">Bandara Senarathne</div>

                <div className='pt-12'>
                    <div className='text-gray-600 text-2xl font-semibold'>Advanced Level Physics.</div>
                    <div className="cont cursor-pointer py-2 px-5 bg-blue-600 w-fit rounded-xl text-white mt-5 hover:scale-105 duration-300 inline-block">Register Now &#10148;</div>
                    <div className='cont inline-block ml-2 cursor-pointer py-2 px-5 bg-gray-100 w-fit rounded-xl text-black border-1 hover:bg-purple-600 hover:text-white mt-5 hover:scale-105 duration-300'>Contact Us</div>


                    <div className="fowllo mt-20 text-xl font-semibold">Follow Us On...</div>
                    <div><Social/></div>
                </div>
            </div>
            <div className="Logo relative">
                <div className='absolute text-9xl mt-32 -ml-48 text-gray-600 top-1/2 left-1/2 font-bold'>BSA</div>
                <img src={home} alt="home" className='image mt-20'/>
                <hr className='line mt-16 w-full' />


            </div>


        </div>
    )
}

/*const [firsts, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)

    const mover = (K) => {
        if (K === 1) {
            if (firsts) { setfirst(false); setsecond(true) }
            else if (second) { setsecond(false); setthird(true) }
            else if (third) { setthird(false); setfirst(true) }
        }
        else if (K === "one") { setfirst(true); setsecond(false); setthird(false) }
        else if (K === "two") { setfirst(false); setsecond(true); setthird(false) }
        else if (K === "three") { setfirst(false); setsecond(false); setthird(true) }
        else {
            if (firsts) { setfirst(false); setthird(true) }
            else if (second) { setsecond(false); setfirst(true) }
            else if (third) { setthird(false); setsecond(true) }
        }

    }
    const check = ()=>{alert("working")}
    useEffect(() => {
        const interval = setInterval(() => {
          mover(1); 
        }, 10000); 
    
        return () => clearInterval(interval);
      }, [firsts, second, third]);*/




/*
<div className='Grid grid-cols-1  w-full h-screen'>
                

                <div className={`slideone ${!firsts && "opacity-0"} text-center w-full absolute h-screen  -z-10 top-0 duration-1000`}>
                    <div className="absolute inset-0 bg-black opacity-80 -z-0"></div>
                    
                    <div className='text-white absolute left-1/2 top-1/4  -translate-x-1/2 font-sinhala-1'>

                        <div className=' font-serif text-6xl py-4 font-semibold text-yellow-300'>PHYSICS</div>
                        <div className='font-name text-7xl pt-5 py-4'>Bandara Senarathne</div>
                        <div className='text-3xl mt-5 font-semibold'> විශිෂ්ඨ ප්‍රතිඵලයක් වෙනුවෙන්</div>
                        <div className='text-3xl font-semibold'>කැපවෙන පංතියක්....</div>
                    </div>
                    <div className='text-white absolute right-6 bottom-6 font-bold text-3xl'>Hot Line - 070 3 799 699</div>

                </div>
                <div className={`slidetwo ${!second && "opacity-0"}  text-center w-full absolute h-screen  -z-10 top-0 duration-1000`}>
                    <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
                    <div className='text-white absolute left-1/2 top-1/4 z-20  -translate-x-1/2 font-sinhala-1'>
                    
                        <div className=' font-serif text-8xl py-4 font-semibold text-yellow-500'>ආසාවෙන් ඉගෙන ගන්න...</div>
                        <div className='py-4 text-5xl font-semibold font-sans'>Theory | Revison</div>
                      
                       
                       
                    </div>
                    <div className='text-white absolute right-6 bottom-6 font-bold text-3xl'>Hot Line - 070 3 799 699</div>
                </div>
                <div className={`slidethree ${!third && "opacity-0"} text-center w-full absolute h-screen  -z-10 top-0 duration-1000`}>
                    <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
                    
                    <div className='text-white absolute left-1/2 top-1/4 z-20  -translate-x-1/2 font-sinhala-1'>
                        <div className='text-3xl font-semibold'>අස්සක් මුල්ලක් නෑර</div>
                        <div className=' font-serif text-8xl py-4 font-semibold text-yellow-500'>දශමෙටම, තිතටම</div>
                        <div className='font-name text-8xl pt-2 py-4'>Physics</div>
                        <div className='text-3xl py-4 font-semibold'> ඉගෙන ගන්න අපිත් එක්ක සෙට් වෙන්න</div>
                        <div className='text-3xl font-semibold'></div>
                       
                    </div>
                    <div className='text-white absolute right-6 bottom-6 font-bold text-3xl'>Hot Line - 070 3 799 699</div>

                </div>
                <br />
                <span onClick={() => mover(-1)} className='absolute ml-4 top-1/2 -translate-y-1/2 text-3xl bg-black text-white px-4 py-2 rounded-lg opacity-40 hover:opacity-100 duration-300'>&lt;</span>
                <span onClick={() => mover(1)} className='absolute mr-4 top-1/2 right-0 -translate-y-1/2 text-3xl bg-black text-white px-4 py-2 rounded-lg opacity-40 hover:opacity-100 duration-300' >&gt;</span>
                
                <button className={`${!firsts && "scale-0"} font-sans text-white py-2 px-4 bg-orange-600 mt-4 rounded-full hover:scale-105 hover:bg-orange-500 duration-300 absolute left-1/2 bottom-20 -translate-x-1/2`}>Contact Us</button>
                <Link to="/Register"> <button className={`${!second && "scale-0"} font-sans text-white py-2 px-4 bg-orange-600 mt-4 rounded-full hover:scale-105 hover:bg-orange-500 duration-300 absolute left-1/2 bottom-20 -translate-x-1/2`}>Registe Now</button></Link>
                <button className={`${!third && "scale-0"} font-sans text-white py-2 px-4 bg-orange-600 mt-4 rounded-full hover:scale-105 hover:bg-orange-500 duration-300 absolute left-1/2 bottom-20 -translate-x-1/2`}>Join with LMS</button>
                
                <div className=' absolute bottom-3 left-1/2 -traslate-x-1/2'>
                    <div className={`${firsts ? "bg-gray-400 w-4 h-4" : "bg-gray-700"} w-3 h-3  rounded-full inline-block mr-1 duration-300`} onClick={() => mover("one")}></div>
                    <div className={`${second ? "bg-gray-400 w-4 h-4" : "bg-gray-700"} w-3 h-3  rounded-full inline-block mr-1 duration-300`} onClick={() => mover("two")}></div>
                    <div className={`${third ? "bg-gray-400 w-4 h-4" : "bg-gray-700"} w-3 h-3  rounded-full inline-block mr-1 duration-300`} onClick={() => mover("three")}></div>
                </div>
            </div>*/