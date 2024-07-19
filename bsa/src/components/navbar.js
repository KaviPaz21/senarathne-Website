import React , {useState} from 'react'
import './navbar.css'
import Menu from './menu'

export default function Navbar({bck , textcol}) {
    const [click , setclick] = useState(false)
    return (
        <div className=''>
            <div className={`${bck ? "":" bg-black" } navbar text-sm py-8`}>
                <div className='logo text-white font-serif text-3xl font-bold  hover:scale-105 duration-300 cursor-pointer'>BSA</div>
                <div className={`paths ${!textcol ? "text-white" : "text-black"} ps:hidden sm:hidden lg:block xl:block font-semibold ml-5 top-1/2 translate-y-2`}>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer hove'>Home</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>About Us</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Process</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Thoughts</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Gallary</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>LMS</span>
                    <span className='px-4 hover:text-blue-600 duration-300 cursor-pointer'>Contacts</span>
                    

                </div>
                <div className='menu' onClick={(()=>setclick(!click))}> <Menu clicked={click} /></div>
            </div>
        </div>

    )
}
