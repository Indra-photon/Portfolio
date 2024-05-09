import React from 'react'
import pic5 from '../assets/pic5.svg'
import pic6 from '../assets/sisyphus.jpg'
import pic7 from '../assets/tinderDog.jpg'
import pic8 from '../assets/shopping.jpg'
import caraousal from './caraousal'

const slides = [pic5,pic6,pic7,pic8]


const Project = () => {
  return (
    <div className = 'bg-green-300'>
        
        <div className = 'flex'>
            <section className = 'w-screen flex justify-center'>
                <section className = 'flex'>
                    <section>
                    <img src = {pic5} className = 'w-28 h-28 pt-10'></img>
                    </section>
                    <section className = 'pt-12'>
                    <p className = 'text-green-900 text-3xl'> What I've been up to</p>
                    <p className = 'text-xl pr-32'>Here's a selection of some recent work.</p>
                    </section>
                </section>
            </section>
        </div>

        <div className = 'pt-24 flex-col justify-center items-center'>
            <section className = 'flex justify-center'>
                <img src = {pic8} className = 'w-3/4'></img>
            </section>
            <section className = 'flex justify-center'>
                <p className = 'text-4xl text-green-900 pt-5 pb-3'>MERN Stack E-commerce website</p>
            </section>
            {/* <section className = 'flex justify-center'>
                <p className = 'text-xl text-white pl-36 pr-28'>
                As an exploration in product design and architecture I worked on an idea 
                to build an E-commerce website. Thoroughly challenging thinking through the product 
                design but ultimately rewarding.</p>
            </section> */}
            <section className = 'flex justify-center'>
                <p className = 'text-xl text-green-900 pl-36 pr-28'>
                Features:
                <ul className = 'flex gap-5 flex-wrap pl-10'>
                    <li>1. API Build and call</li>
                    <li>2. Database handling</li>
                    <li>3. Add to cart options</li>
                    <li>4. Admin Dashboard/ Product add to website</li>
                    <li>5. Sign up and log in page</li>
                </ul>
                </p>
            </section>
            <section className = 'flex justify-center pt-3'>
                <button className = 'text-xl text-white  bg-green-700 rounded-2xl p-2'> <a href = 'https://github.com/Indra-photon/E-commerce-Website'>Github repo</a> </button>
            </section>
            
        </div>


        <div className = 'pt-24 flex-col justify-center items-center'>
            <section className = 'flex justify-center'>
                <img src = {pic6} className = 'w-3/4'></img>
            </section>
            <section className = 'flex justify-center'>
                <p className = 'text-4xl text-green-900 pt-5'>Cloned website</p>
            </section>
            <section className = 'flex justify-center'>
                <p className = 'text-2xl text-green-900 pb-3'>Interface design/ UI</p>
            </section>
            {/* <section className = 'flex justify-center'>
                <p className = 'text-xl text-white pl-36 pr-28'>
                As an exploration in product design and architecture I worked on an idea 
                to clone a website. Thoroughly challenging thinking through the product 
                design but ultimately rewarding.</p>
            </section> */}
            <section className = 'flex justify-center'>
                <p className = 'text-xl text-green-900 pl-24 pr-28'>
                Frontend: HTML, CSS</p>
            </section>
            <section className = 'flex justify-center pt-3'>
                <button className = 'text-xl text-white  bg-green-700 p-2 rounded-2xl'> <a href = 'https://github.com/Indra-photon/Cloning-Website---Sisyphus-Infotech'>Github repo</a> </button>
            </section>
        </div>

        <div className = 'pt-24 flex-col justify-center items-center'>
            <section className = 'flex justify-center'>
                <img src = {pic7} className = 'w-3/4'></img>
            </section>
            <section className = 'flex justify-center'>
                <p className = 'text-4xl text-green-900 pt-5'>Cloned website</p>
            </section>
            <section className = 'flex justify-center'>
                <p className = 'text-2xl text-green-900 pb-3'>Interface design/ UI</p>
            </section>
            {/* <section className = 'flex justify-center'>
                <p className = 'text-xl text-white pl-36 pr-28'>
                As an exploration in product design and architecture I worked on an idea 
                to clone a website. Thoroughly challenging thinking through the product 
                design but ultimately rewarding.</p>
            </section> */}
            <section className = 'flex justify-center'>
                <p className = 'text-xl text-green-900 pl-24 pr-28'>
                Frontend: HTML, CSS</p>
            </section>

            <section className = 'flex justify-center pt-3 pb-5'>
                <button className = 'text-xl text-white  bg-green-700 p-2 rounded-2xl'> <a href = 'https://github.com/Indra-photon/Cloning-Website---Sisyphus-Infotech'>Github repo</a> </button>
            </section>
        </div>

       
    </div>
  )
}

export default Project
