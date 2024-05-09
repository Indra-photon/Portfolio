import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between bg-green-50 text-green-900 text-2xl'>
            <p className='pt-10 pl-10'> WebWorks Gallery </p>
            <nav>
                <ul className='flex gap-10 cursor-pointer pl-20 pr-10 py-10'>
                    <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/home">Home</Link></li>
                    <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/project">Project</Link></li>
                    <li className='font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><Link to = "/about">About me</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
