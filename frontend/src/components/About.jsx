import React from 'react'
import pic6 from '../assets/Indranil_pic-modified.png'
import pic7 from '../assets/Bootstrap.svg'
import pic8 from '../assets/Express.svg'
import pic9 from '../assets/Git.svg'
import pic10 from '../assets/Github.svg'
import pic11 from '../assets/HTML.svg'
import pic12 from '../assets/MongoDB.svg'
import pic13 from '../assets/React-Dark.svg'
import pic14 from '../assets/Tailwind.svg'
import pic15 from '../assets/NodeJS.svg'
import pic16 from '../assets/JavaScript.svg'


const About = () => {
  return (
    <div className = 'bg-green-300 pb-8'>
        <section className='flex p-10 justify-between'>
            <section>
                <p> Indranil Maiti</p>
                <p>
                    Single Photon Applications Laboratory <br />
                    National Laboratory of Atomic, Molecular and Optical Physics
                </p>
                <p>
                Institute of Physics <br></br>
                Nicolaus Copernicus University <br></br>
                Room No- 372 <br></br>
                87-100 Torun, Poland
                </p>
            </section>
            <section><img src={pic6} className = 'w-30 h-30'></img></section>
        </section>

        <section>
           <div className='flex justify-center text-xl font-bold font-style: italic'> <h1> Web Development Journey </h1></div>
           <div className='flex justify-center pt-2'> <h1> Vidyastu (2024): Certificate </h1></div>
           <div className='flex justify-center text-xl font-bold font-style: italic'> <h1> Skills </h1></div>
           <div className='flex justify-center'>
            <section className='pb-5'>
              <h1 className='text-xl pb-2'> Frontend Development </h1>
              <section className='flex gap-5'>
                <img src= {pic11} className='h-24'/>
                <img src= {pic13} className='h-24'/>
                <img src= {pic14} className='h-24'/>
                <img src= {pic7} className='h-24'/>
                <img src= {pic16} className='h-24'/>
              </section>
            </section>
            </div>

            <div className='flex justify-center'>
            <section>
              <h1 className='text-xl pb-2'> Backend Development </h1>
              <section className='flex gap-5'>                
                <img src= {pic8} className='h-24'/>
                <img src= {pic9} className='h-24'/>
                <img src= {pic10} className='h-24'/> 
                <img src= {pic12} className='h-24'/>
                <img src= {pic15} className='h-24'/>
              </section>
            </section>
            </div>
        </section>

    </div>
  )
}

export default About