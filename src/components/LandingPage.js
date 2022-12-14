import React from 'react'
import zappalogo from '../assets/zappalogo.png'
import landBeer from '../assets/landingpageBeers.png'
import landFood from '../assets/landingpageFood.png'
import landBeerMobile from '../assets/landingpageBeersMobile.png'
import landFoodMobile from '../assets/landingpageFoodMobile.png'
import { Link } from 'react-router-dom'

import '../style/landingPage.css'

const LandingPage = () => {
  return (
    <div className='landing-wrapper'>
        <div className='flex-column'>
            <Link to="/home">
                <div className='limage-container'>
                    <img className='landing-image' src={landFood} alt="Zappa café" />
                    <img className='landing-imageMobile' src={landFoodMobile} alt="Zappa café" />
                
                <div className='bottom-left'> 
                <h3>Café Zappa</h3> 
                <p>Se vores menu og book et bord</p> 
                </div>
                </div>
            </Link>
            <div className='limage-container'>
                    <img className='landing-image' src={landBeer} alt="Zappa cocktails" />
                    <img className='landing-imageMobile' src={landBeerMobile} alt="Zappa cocktails" />
            
                    <div className='bottom-left'>
                    <h3>Zappa Cocktails</h3>
                    <p>Se vores drinks menu</p>
                    </div>
                </div>
           
        
        <p className='image-text'>Vælg din oplevelse herover.</p>
        </div>
        <div className='content-column' >
            <img className='landing-logo' src={zappalogo} alt="Zappas logo" />
            <h2 className='content-heading'>Café & Cocktails</h2>
            <hr className='hr-style'></hr>
            <p className='content-text'>
               Kom og smag vores lækre retter 
               inspireret af mellemøstlig og asiatisk 
               cousine, eller tag ind og nyd en cocktail
               i hyggelige lokaler med god stemning. 
            </p>
        </div>
    </div>
  )
}

export default LandingPage