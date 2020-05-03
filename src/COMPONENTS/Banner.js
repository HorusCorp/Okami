import React from 'react'
import '../CSS/Banner.css'
import './Services'
import Sparkling from './video/pol.mp4'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'


function Banner() {
    return (
        <div className='main-banner-zone'>
            <video autoPlay loop muted playsinline="true" disablePictureInPicture="true" preload="auto" style={
            {position:'absolute',
            width:'100%',
            top:'50%',
            left:'50%',
            height:'100%',
            objectFit:'cover',
            transform:'translate(-50%, -50%)',
            zIndex:-1,
            }
        }>
        <source src={Sparkling} type='video/mp4'></source>

        </video>
            <div className='nav-contact'>
                
                <div className='btn-phone'>
                    <FontAwesomeIcon icon={faPhone} className='phone-icon'></FontAwesomeIcon>
                </div>
                <a href="tel:+33628332017">06 28 33 20 17</a>

                <div className='btn-mail'>
                    <a href="mailto:arnaud.rey@developpeur-lyon.com" target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className='phone-icon'></FontAwesomeIcon>
                    </a>
                </div>
            </div>

            <nav role="navigation">
                <div id="menuToggle">
                    
                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                        <a href="#anchor-services"><li>Services</li></a>
                        <a href="#anchor-portfolio"><li>Portfolio</li></a>
                        <a href="#anchor-formules"><li>Formules</li></a>
                        <a href="#anchor-about"><li>A propos</li></a>
                        <a href="#anchor-footer"><li>Contact</li></a>
                    </ul>
                </div>
                </nav>

            <header className='nav-main'>
                <div className='logo-navbar'></div>
                <ul>
                    
                    <a href="#anchor-services" className='nav-btn'><li>Services</li></a>
                    <a href="#anchor-portfolio" className='nav-btn'><li>Portfolio</li></a>
                    <a href="#anchor-formules" className='nav-btn'><li>Formules</li></a>
                    <a href="#anchor-about" className='nav-btn'><li>A propos</li></a>
                    <a href="#anchor-footer" className='nav-btn'><li>Contact</li></a>
                </ul>
            </header>
            {
                window.addEventListener("scroll", function(){
                    var header = document.querySelector("header");
                    header.classList.toggle("sticky",window.scrollY > 0)
                })
            }



            <div className='my-name'>
            <div className='logo-banner'></div>
                <h1>Développeur Web freelance Lyon</h1>
            </div>
            
        </div>
    )
}

export default Banner
