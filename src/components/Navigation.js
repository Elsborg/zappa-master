import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {FiFacebook, FiInstagram} from 'react-icons/fi'
import { Link as LinkScroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import zappa from '../assets/zappalogo.png'
import '../style/navigation.css'


// This component represents a responsive navigation bar for the website. It uses the 'react-icons' and 'react-scroll' libraries
// for the icon and smooth scrolling functionality, respectively. It also imports an image file for the logo and a CSS file for styling.

const Navigation = () => {

    // Declare a state variable for the mobile navigation menu
    const [nav, setNav] = useState(false);

    // Declare an array of objects representing the links in the navigation bar
    const links = [
        {
            id: 1,
            link: 'forside'
        },
        {
            id: 2,
            link: 'menu'
        },
        {
            id: 3,
            link: 'book bord'
        },
        {
            id: 4,
            link: 'om café zappa'
        },
        {
            id: 5,
            link: 'nyheder'
        },
        {
            id: 6,
            link: 'galleri'
        },
    ]
    

  // The component is rendered, with a burger icon for opening the mobile navigation menu, a logo image, a navigation bar with
  // links, and social media icons. The mobile navigation menu is hidden by default and can be toggled by clicking the burger icon.
  return (
    <div className='nav-container'>
        <div onClick={() => setNav(!nav)} className='burger'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>


        {nav && (
            <ul className='ulMobile'>
            {links.map(({id, link}) => (
                    <li key={id} className='li-mobile'>
                    <LinkScroll onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</LinkScroll>
                    </li>
                ))}
            </ul>

        )}

        
        <div className='logo'>
            <Link to="/"><img className='logo-nav' src={zappa} alt="zappa logo" /></Link>
        </div>
        <div className='nav-flex'>
        <ul className='ul-flex'>

            {links.map(({id, link}) => (
                <li key={id} className='li-container'>
                    <LinkScroll to={link} smooth duration={500}>{link}</LinkScroll>

                </li>
            ))}            
        </ul>
        </div>
        <div className='social-icons'>
           <a href='https://www.facebook.com/cafezappa.dk/' target='_blank' rel='noreferrer'> 
        <FiFacebook size={25} style={{marginRight : 20}} />
        </a>
        
        <a href='https://www.instagram.com/cafe_zappa/' target='_blank' rel='noreferrer'>
        <FiInstagram size={25} style={{marginLeft : 20}} />
        </a>
        </div>

    </div>
  )
        }

export default Navigation