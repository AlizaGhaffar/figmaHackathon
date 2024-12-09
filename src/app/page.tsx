import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sign from './components/Sign'
import Footer from './components/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sign/>
      <Footer/>
    </div>
  )
}
