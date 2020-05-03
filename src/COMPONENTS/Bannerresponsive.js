import React from 'react'

import '../CSS/Bannerresponsive.css'

function Bannerresponsive() {
    return (
        <div className='responsive-banner' data-aos="zoom-in-up">
            <div className='dark-zone-img'>
                <div className='dark-banner-text'>
                    <p>Compatible Mobile,Tablettes & PC</p>
                    <h3>Développement Web Responsive</h3>
                </div>
                <img src='../../img/responsive-exemple.png' alt='resp-banner-img'></img>
            </div>
            <div className='white-zone'></div>
        </div>
    )
}

export default Bannerresponsive
