import React from 'react'
import '../CSS/Footer.css'
import {Link} from 'react-router-dom';
import Contact from './Contact';


function Footer() {
    return (
        <div id='anchor-footer' className='footer-zone'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                <div class="fb-share-button" 
                    data-href="https://developpeur-lyon.com/" 
                    data-layout="button_count">
                </div>
                </div>
                <div className='footer-top-right'>
                <div className='btn-social'>
                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/HorusCorp'><div className='fb-logo'></div></a>
                </div>
                <div className='btn-social'>   
                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/arnaud-rey-8a6695185/'><div className='in-logo'></div></a>
                </div>
                <div className='btn-social'>   
                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/arnaud-rey-8a6695185/'><div className='insta-logo'></div></a>
                </div>        
                </div>
            </div>
            <div className='footer-main'>
                <div className='footer-main-left'>
                    <h3>développeur indépendant</h3>
                    <p>Développeur web full-stack (Front et Back-end) et Web Designer, je suis à votre disposition pour intervenir dans tout type de projets de creations web (sites Internet, applications web mobiles, etc.), adapté à vos besoins et impératifs.</p>
                    <p>Passionné par le Web, je mets mes compétences au service de votre développement et de votre promotion sur Internet.</p>
                </div>
                <div className='footer-main-right'>
                <Contact/>


                {/* <div className='logo-footer'></div>
                    <div className='footer-location'>
                        <img src='../../img/adress.png' width='30' height='30' alt='adress-icon' style={{marginRight:10}}></img>
                        <p>2 rue de la fraternité 69100 VILLEURBANNE</p>
                    </div>
                    <div className='footer-eadresse'>
                    <img src='../../img/mail.png' alt='mail-icon' width='30' height='30' alt='adress-icon' style={{marginRight:10}}></img>
                        <a href="mailto:arnaud.rey@developpeur-lyon.com" target='_blank' rel="noopener noreferrer"> Contactez-moi </a>
                    </div>
                    <div className='footer-telephone'>
                    <img src='../../img/phone.png' alt='tel-icon' width='30' height='30' alt='tel-icon' style={{marginRight:10}}></img>
                        <p>06.28.33.20.17</p>
                    </div> */}
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-left'><Link href="#anchor-mentions" to="/mentions" >MENTIONS légales & RGPD</Link></div>
                <a href='https://donka-creation.fr' target='_blank' rel="noopener noreferrer">GRAPHISTE DONKA</a>
                <div className='footer-bottom-right'>ARNAUD REY - @ COPYRIGHT 2020</div>
            </div>
        </div>
    )
}

export default Footer
