import React from 'react'
import './App.css'


import Navbar from '../src/Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Image from './Components/Image/Image.jsx'
import Dream from './Components/Dream/Dream.jsx'
import Process from './Components/Process/Process.jsx'
import Map from '../src/Map/Map.jsx'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>   
      <Hero/>   
      <About/>
      <Map/>
      <Image/>   
      <Process/>
      <div className="line"></div>
      <Dream/>
      <Footer/>   
    </div>
  )
}

export default App
