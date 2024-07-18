import React, { useState } from 'react'
import './home.css'
import Navbar from './navbar'

export default function Home() {
    const [first, setfirst] = useState(true)
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)

    const mover = (K) => {
        if (K === 1) {
            if (first) { setfirst(false); setsecond(true) }
            else if (second) { setsecond(false); setthird(true) }
            else if (third) { setthird(false); setfirst(true) }
        }
        else if(K=== "one"){setfirst(true); setsecond(false); setthird(false)}
        else {
            if (first) { setfirst(false); setthird(true) }
            else if (second) { setsecond(false); setfirst(true) }
            else if (third) { setthird(false); setsecond(true) }
        }

    }

    return (
        <div>
            <div className='Grid grid-cols-1  w-full'>
                <Navbar className="z-10" bck={false} textcol={false} />

                <div className={`slideone ${!first && "opacity-0"} text-center w-full absolute h-screen  -z-20 top-0 duration-700`}>
                    <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
                    <h1 className='text-white absolute left-1/2 top-1/2 text-3xl -translate-x-1/2'>දශමෙට Physics</h1>
                </div>
                <div className={`slidetwo ${!second && "opacity-0" }  text-center w-full absolute h-screen  -z-10 top-0 duration-700`}>
                <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
                <h1 className='text-white absolute left-1/2 top-1/2 text-3xl -translate-x-1/2'>working 02සමන් බංඩාර</h1>
                  
                </div>
                <div className={`slidethree ${!third && "opacity-0"} text-center w-full absolute h-screen  -z-10 top-0 duration-700`}>
                <div className="absolute inset-0 bg-black opacity-70 -z-10"></div>
                <h1 className='text-white absolute left-1/2 top-1/2 text-3xl -translate-x-1/2'>working 02සමන් බංඩාර</h1>
                </div>
                <br />
                <span onClick={() => mover(-1)} className='absolute ml-4 top-1/2 -translate-y-1/2 text-3xl bg-black text-white px-4 py-2 rounded-lg'>&lt;</span>
                <span onClick={() => mover(1)} className='absolute mr-4 top-1/2 right-0 -translate-y-1/2 text-3xl bg-black text-white px-4 py-2 rounded-lg'>&gt;</span>

                <div className=' absolute bottom-3 left-1/2 -traslate-x-1/2'>
                <div className={`${first ? "bg-gray-400 w-6 h-6": "bg-gray-700"} w-5 h-5  rounded-full inline-block mx-1 duration-300`} onClick={()=>mover("one")}></div>
                <div className={`${second ? "bg-gray-400 w-6 h-6": "bg-gray-700"} w-5 h-5  rounded-full inline-block mx-1 duration-300`}></div>
                <div className={`${third ? "bg-gray-400 w-6 h-6": "bg-gray-700"} w-5 h-5  rounded-full inline-block mx-1 duration-300`}></div>
                </div>
            </div>
        </div>
    )
}
