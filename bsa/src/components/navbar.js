import React , {useState} from 'react'
import './navbar.css'
import Menu from './menu'
import { Canvas } from '@react-three/fiber';
export default function Navbar() {
    const [click , setclick] = useState(false)
    return (
        <div className='w-full'>
            <div className={`navbar text-sm py-4 bg-slate-100`}>
                <div className='logo text-gray-700 font-serif text-3xl font-bold pr-16  hover:scale-105 duration-300 cursor-pointer'>BSA</div>
                <div className={`paths ps:hidden sm:hidden lg:block xl:block font-semibold ml-5 top-1/2 translate-y-2 text-c16`}>
                    <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Home</div>
                    <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>About Us</div>
                    <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Process</div>
                    <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Thoughts</div>
                    
                    <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Contacts</div>
                    

                </div>
                <div className='menu' onClick={(()=>setclick(!click))}> <Menu clicked={click} /></div>
            </div>
        </div>

    )
}
/*<div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Gallary</div>
                    <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>LMS</div>*/
