import React from 'react'
import '../style/home.css'
import heroVideo from '../assets/zappavideo3.mp4'

//This is the homepage which is the first page of the website.
//A herovideo is playing with a header ontop of it with a message.
//Styles for the page is imported at the top of this file.

const Home = () => {
  return (
    <div name="forside" className='home-container'>
        <video className='hero-video' src={heroVideo} autoPlay loop muted playsInline />
        <div className='content'>
            <h1 className='hero-text'>Velkommen Til Café Zappa</h1>
        </div>
        
    </div>
  )
}

export default Home