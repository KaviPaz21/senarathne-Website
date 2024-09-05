import React from 'react'
import './foter.css'
import logo from '../images/seal.png'
export default function Foter() {
    return (
        <div>
            <div className='footer bg-gray-300 py-16'>
                <div className="note text-center">
                    <img src={logo} alt="seal" className='w-20 py-4 relative left-1/2 -translate-x-1/2' />
                    <div className="div text-3xl font-semibold">PHYSICS</div>
                    <div className="fnm text-2xl font-bold">Bandara Senarathne</div>
                    <div className='text-lg'>ආසාවෙන් ඉගෙන ගන්න...</div>

                </div>
                <div className="links text-left">
                    <div className="fnm text-2xl py-2 font-semibold">Frequent Links</div>
                    <hr className='bg-black w-48 h-1 mb-5' />
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Site Home</a></div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">LMS</a></div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Registrations</a></div>

                </div>


                <div className="loc">
                    <div className="fnm text-2xl py-2 font-semibold">Locations</div>
                    <hr className='bg-black w-52 h-1 mb-5' />
                    <div className='text-black text-xl font-semibold'>Katubedda, Moratuwa, <br />Sri Lanka</div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Sigma - Wellawaya</a></div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Expertexion - Kesbewa</a></div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Minacrea - Hanwella</a></div>

                </div>


                <div className="qnv">

                    <div className="fnm text-2xl py-2 font-semibold">Quick Navigation</div>
                    <hr className='bg-black w-52 h-1 mb-5' />
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">About US</a></div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Process</a></div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Thoughts</a></div>
                    <div className='py-2 font-semibold text-gray-500 text-lg cursor-pointer hover:text-gray-700 duration-300'><a href="#">Contacts</a></div>

                </div>

                
            </div>
            <div className="w-full text-center bg-gray-950 py-5 text-white">
                
                <div className='py-1'>Copyright &#169; 2024 BSA. All rights reserved...</div>
                <div className='font-semibold'>Developed By : <u><a href="https://pasindukavinda.netlify.app"> Pasindu Kavinda</a></u>    </div>
            </div>
        </div>
    )
}
