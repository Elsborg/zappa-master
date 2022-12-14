import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Booking from './Booking'
import About from './About'
import News from './News'
import Gallery from './Gallery'



const Wrapper = () => {
  return (
    <>
    <div className='wrapper'>
    <Navigation />
    <div className='page-wrapper'>
    <Home />
    <Menu />
    <Booking />
    <About />
    <News />
    <Gallery />
    <Footer />
    </div>
    </div>
    </>
  )
}

export default Wrapper