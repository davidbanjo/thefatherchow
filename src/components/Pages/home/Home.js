import React from 'react'
// import '../styles/home.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Products from './sections/Products'
import Footer from '../../Footer/Footer'
import Navbar from '../../Navbar/Navbar'

const Home = () => {
  return (
    <div className='homeContainer'>
        <Navbar />
        <Hero />
        <About />
        <Products />
        <Footer />
    </div>
  )
}

export default Home