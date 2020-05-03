import React from 'react'

import '../CSS/Services.css'
import './Banner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUikit} from '@fortawesome/free-brands-svg-icons' 
import {faProjectDiagram,faLaptopCode,faUserCog,faSearch,faHandPointer,faGem,faExpandArrowsAlt} from '@fortawesome/free-solid-svg-icons'


function Services() {
    return (
        <div id='anchor-services'>
            <div className='blank-div-for-anchor'></div>
            <div className='services-title' >
            <div className=''></div>
                <h2>MES SERVICES</h2>
                <span className='space-under'>Des services répondant à vos envies</span>
                <div className='separator-orange-title'></div>
            </div>
            <div className='services-detail-container'>

                <div className='services-col-1'>
                <div className='flex-service'>
                    <div className='services-col-1-lign-1 float-shadow'>
                        <div className='circle'><FontAwesomeIcon icon={faProjectDiagram}/></div>
                        <h3>GESTION DE PROJET WEB</h3>
                        <p>Sites vitrines,  identités visuelles, logos, cartes de visite </p>
                    </div>
                </div>

                <div className='flex-service'>
                    <div className='services-col-1-lign-2 float-shadow'>
                         <div className='circle'><FontAwesomeIcon icon={faLaptopCode}/></div>
                        <h3>INTEGRATION WEB</h3>
                        <p>Des intégrations HMTL/CSS/React Js respectueuses des standards du Web</p>
                    </div>
                </div>
                </div>
                
                <div className='services-col-1'>
                <div className='flex-service'>
                    <div className='services-col-1-lign-3 float-shadow'>
                        <div className='circle'><FontAwesomeIcon icon={faUserCog}/></div>
                        <h3>DEVELOPPEMENT PERSONNALISE</h3>
                        <p>Applications Web personnalisées</p>
                    </div>
                </div>

                <div className='flex-service'>
                    <div className='services-col-1-lign-4 float-shadow'>
                        <div className='circle'><FontAwesomeIcon icon={faSearch}/></div>
                        <h3>SEO (Référencement naturel)</h3>
                        <p>Optimisation des pages pour un meilleur référencement </p>
                    </div>
                </div>
                </div>

                <div className='services-col-3'>
                <div className='flex-service-3'>
                    <div className='services-col-3-lign-1 float-shadow'>
                        <div className='circle'><FontAwesomeIcon icon={faUikit}/></div>
                        <h3> WEBDESIGN UX/UI</h3>
                        <p>Logos, templates Web, plaquettes publicitaires, cartes de visite</p>
                    </div>
                    </div>

                <div className='flex-service-3'>
                    <div className='services-col-3-lign-2 float-shadow'>
                        <div className='circle'><FontAwesomeIcon icon={faHandPointer}/></div>
                        <h3>DYNAMISME DES PAGES</h3>
                        <p> Animations du contenu non intrusives pour embellir vos projets.</p>
                    </div>
                </div>
                </div>

                <div className='services-col-3'>
                <div className='flex-service-3'>
                    <div className='services-col-3-lign-3 float-shadow'>
                        <div className='circle'><FontAwesomeIcon icon={faGem}/></div>
                        <h3>ICONES PERSONALISES</h3>
                        <p>Création d'icones personnalisés</p>
                    </div>
                    </div>
                <div className='flex-service-3'>
                    <div className='services-col-3-lign-4 float-shadow'>
                        <div className='circle'><FontAwesomeIcon icon={faExpandArrowsAlt}/></div>
                        <h3>RESPONSIVE DESIGN</h3>
                        <p>Un contenu optimisé pour smartphone et tablette</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
