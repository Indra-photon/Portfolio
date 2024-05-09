import React from 'react'
import {Link} from "react-router-dom";
import pic1 from '../assets/pic1_homepage.svg'
import pic2 from '../assets/pic2.svg'
import pic3 from '../assets/pic3.svg'


const Homepage = () => {
  return (
    <div className = 'h-max bg-green-300'>
        <div className = 'h-screen bg-green-300 flex pl-10 pr-10 py-10'>
            
            <section className = 'text-3xl font-serif flex items-center w-1/2'>
                <p className = 'pt-10'>I'm Indranil, a passionate <span className = 'text-green-900 font-bold'>full stack web developer</span> dedicated to crafting immersive digital 
                experiences. With a blend of creativity and technical expertise, I bring ideas to life through 
                elegant <span className = 'text-green-900 font-bold'>front-end designs</span> and robust <span className = 'text-green-900 font-bold'>
                back-end solutions</span>.</p>
            </section>
            <section className = 'flex items-center'>
                <img src={pic1} alt="Vite logo" className = 'w-full h-full opacity-100 hover:ease-in duration-300 hover:opacity-100'></img>
            </section>        
        </div>

        <section className = 'py-10 px-48'>

            <div className = 'flex justify-center text-4xl'>
                <p className = 'pb-14'> What I can do </p>
            </div>

            <div className = 'flex gap-10 pb-16'>
            <img src={pic2} className = 'w-28 h-28'></img>
            <section>
                <p className = 'text-green-900 text-3xl pb-5'>Design what you want</p>
                <p className = 'text-xl'>I like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
            </section>           
            </div>

            <div className = 'flex gap-10'>
            <section>
                <p className = 'text-green-900 text-3xl pb-5'>Develop what you need</p>
                <p className = 'text-xl'>I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
            </section>
            <img src={pic3} className = 'w-28 h-28'></img>          
            </div>
        </section>

        <section className = 'py-10 px-48'>
            <div className = 'flex justify-center text-4xl'>
                <p className = 'pb-10'> I can help </p>
            </div>

            <div>
                <section className='flex justify-center items-center'>
                    <p className = 'text-green-900 text-3xl pb-5'>I’m currently available for freelance work.</p>
                </section>
                <section className='flex justify-center items-center'>
                <p className = 'text-xl'>If you have a project that you want to get started, 
                think you need my help with something or just fancy saying hey, then get in touch.</p>
                </section>
            </div>
        </section>
    </div>
  )
}

export default Homepage
