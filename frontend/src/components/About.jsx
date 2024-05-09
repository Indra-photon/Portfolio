import React from 'react'
import pic6 from '../assets/Indranil_pic-modified.png'

const About = () => {
  return (
    <div className = 'bg-green-300'>
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









    </div>
  )
}

export default About