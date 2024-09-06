import React , {useState} from 'react'
import './navbar.css'
import Menu from './menu'
import { Link } from 'react-scroll';

import Social from './social';
export default function Navbar() {
    const [click , setclick] = useState(false)
    return (
        <div className='w-full'>
            <div className={`navbar text-sm py-4 bg-slate-100`}>
                <div className='logo text-gray-700 font-serif text-3xl font-bold pr-16  hover:scale-105 duration-300 cursor-pointer'>BSA</div>
                <div className={`paths font-semibold ml-5 top-1/2 translate-y-2 text-c16`}>
                <Link to="home" smooth={true} duration={600} ><div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Home</div></Link>
                <Link to="aboutme" smooth={true} duration={600} >   <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>About Us</div></Link>
                <Link to="wkprocess" smooth={true} duration={600} >   <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Process</div></Link>
                <Link to="thoughts" smooth={true} duration={600} >   <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Thoughts</div></Link>
                    
                <Link to="contacts" smooth={true} duration={600} >   <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Contacts</div></Link>
                    

                </div>
                <div className='menu' onClick={(()=>setclick(!click))}> <Menu clicked={click} /></div>
                <div className={`spanned ${click ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} absolute text-center w-full lg:w-2/5 lg:right-0 mt-12 bg-slate-100 h-screen duration-300`}>
                    <div className="sp-pth text-lg font-semibold">
                    <Link to="home" smooth={true} duration={600} ><div className='nvitm mx-10 hover:text-blue-600 duration-300 cursor-pointer py-4 border-b  border-b-neutral-400' onClick={()=>setclick(!click)}>Home</div></Link>
                    <Link to="aboutme" smooth={true} duration={600} ><div className='nvitm mx-10 hover:text-blue-600 duration-300 cursor-pointer py-4 border-b  border-b-neutral-400'onClick={()=>setclick(!click)}>About Us</div></Link>
                    <Link to="wkprocess" smooth={true} duration={600} ><div className='nvitm mx-10 hover:text-blue-600 duration-300 cursor-pointer py-4 border-b  border-b-neutral-400'onClick={()=>setclick(!click)}>Process</div></Link>
                    <Link to="thoughts" smooth={true} duration={600} > <div className='nvitm mx-10 hover:text-blue-600 duration-300 cursor-pointer py-4 border-b  border-b-neutral-400'onClick={()=>setclick(!click)}>Thoughts</div></Link>
                    
                    <Link to="contacts" smooth={true} duration={600} ><div className='nvitm mx-10 hover:text-blue-600 duration-300 cursor-pointer py-3 border-b  border-b-neutral-400'onClick={()=>setclick(!click)}>Contacts</div></Link>
                    <div className='absolute left-1/2 -translate-x-1/2 bottom-20'>
                        <div className='font-extrabold text-2xl font-serif '>BSA</div>
                        <div>Follow Us on</div>
                            <Social/>
                    </div>
                    </div>

                </div>

            </div>
        </div>

    )
}
/*<div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>Gallary</div>
                    <div className='nvitm mx-3 hover:text-blue-600 duration-300 cursor-pointer inline-block'>LMS</div>*/
