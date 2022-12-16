import React from 'react'
import '../style/home.css'
import heroVideo from '../assets/zappavideo3.mp4'

const Home = () => {
  return (
    <div name="forside" className='home-container'>
        <video className='hero-video' src={heroVideo} autoPlay loop muted />
        <div className='content'>
            <h1 className='hero-text'>Velkommen Til Café Zappa</h1>
        </div>
        
    </div>
  )
}

export default Home