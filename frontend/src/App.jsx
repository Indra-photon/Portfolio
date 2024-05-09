import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About'
import { Route, Routes } from 'react-router-dom';


function App() {
 

  return (
    <>
      <div className = 'p-20 bg-green-800'>
        <Navbar />
        <main>
          <Routes>
            <Route path = '/' element = {<Homepage />} />
            <Route path='/home' element = {<Homepage />}/>
            <Route path='/project' element = {<Project />}/>
            <Route path='/about' element = {<About />}/>
          </Routes>
        <Footer />
        
        </main>
      
      </div>
    </>
  )
}

export default App
