import React from 'react'
import '../CSS/About.css'

function About() {
    return (
        <div id='anchor-about' className='about-zone'>
        <div className='blank-div-for-anchor'></div>
            <div className='about-title'>
                <h2>à PROPOS</h2>
                <span>Développeur web et j'adore ça !</span>
                <div className='separator-orange-title'></div>
                
            </div>

            <div className='about-body'>
                <div className='about-col-1'>
                    <h3>Un développeur web passionné</h3>
                    <p>Conseiller bancaire de formation, j’ai commencé à fortement m’intéresser au développement web depuis 2017. Ce domaine m’a conduit à une reconversion professionnelle radicale, afin de pouvoir vivre pleinement de cette passion.</p>
                    <p>Dès lors, j’ai tout mis en action pour m’investir dans cette profession, tout en prenant du plaisir sur les divers projets développés. Dans le cadre de ce projet professionnel, j’ai décidé, depuis janvier 2019  d’acquérir une spécialisation opérationnelle au sein de la Capsule Academy pour devenir développeur web indépendant.</p>
                    <p>A la suite des nombreuses expériences acquises en lien avec cette vocation professionnelle, et ce pour différentes entreprises, je suis disposé à mettre mes compétences au service de votre projet Web.</p>
                </div>
                <div className='about-img'></div>
                <div className='about-col-3'>
                    <h3>Expérience en développement</h3>
                    <p>Mon expérience acquise au cours de ces dernières années m’a permis de mieux cerner les attentes de clients de tout type (PME, association, grands groupes, etc.), afin d’y répondre de manière proactive.</p>
                    <p>Du site vitrine au projet personnalisé sur mesure, je vous propose une expertise en matière de développement web propre à satisfaire vos attentes et besoins.</p>
                    <h3>Un tarif adapté à vos projets</h3>
                    <p>Je peux vous proposer un accompagnement web à votre portée, de l’association de quartier au PME, en passant par les particuliers, tenant compte notamment de vos contraintes de temps et de budget.</p>
                </div>
            </div>
        </div>
    )
}

export default About
