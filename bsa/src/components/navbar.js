import React from 'react'
import './navbar.css'

export default function Navbar({bck , textcol}) {
    return (
        <div className=''>
            <div className={`${bck ? "bg-slate-100":" bg-black opacity-50" } navbar text-sm    py-8 `}>
                <div className='logo text-white font-serif text-3xl font-bold  hover:scale-105 duration-300 cursor-pointer'>BS</div>
                <div className={`${!textcol ? "text-white" : "text-black"} paths font-semibold ml-5 top-1/2 translate-y-2`}>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Home</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>About Us</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Process</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Thoughts</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Gallary</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Contacts</span>
                </div>
            </div>
        </div>

    )
}
