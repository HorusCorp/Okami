import React from 'react'
import '../CSS/Formules.css'

function Formules() {
    return (
        <div id='anchor-formules' className='formules-zone'>
            <div className='formules-title'>
                <h2>FORMULES</h2>
                <span>Des formules adaptées à un site internet de qualité</span>
                <div className='separator-orange-title'></div>
                <div className='devis-gratuits'>Devis gratuit sur demande</div>
            </div>
            <div className='formules-cards'>
                <div id='item1' className='formule-card-1'>
                      <a href='#item1'>
                        <h3>SITE VITRINE "BUDGET"</h3>
                        <div className="separator-orange"></div>
                        <p className='p-intro'>Bénéficiez d'un site simple et accessible, à un prix compétitif, présentant l'essentiel de vos activités.</p>
                        <div className="separator-orange"></div>
                        <div className='arrow-down-zone'><div className='arrow-down'>En Savoir +</div></div>
                      </a>
                      <div className='p'>
                          <div className='one-point'>
                              <p> • Site Web "one page" en Responsive Design, sur mesure</p>
                          </div>
                          <div className='one-point'>
                          <p> • Une galerie d'images jusqu'à 10 images</p>
                          </div>
                          <div className='one-point'>
                          <p> • Un formulaire de contact avec nom, adresse, email, objet, message</p>
                          </div>
                          <div className='one-point'>
                            <p> • Liens vers les réseaux sociaux</p>
                          </div>
                          <div className='one-point'>
                          <p>• Référencement naturel</p>
                        </div>
                        <div className='one-point'>
                          <p>• Codage à la main</p>
                        </div>
                        <div className='one-point'>
                          <p>• Offert: Pages "mentions légales" et "RGPD"</p>
                        </div>
                    </div>
                </div>

                <div id='item2' className='formule-card-2'>
                    <a href='#item2'><h3>SITE VITRINE "STANDARD"</h3>
                      <div className="separator-orange"></div>
                      <p className='p-intro'>Faites la promotion de vos activités,grâce à un site Web complet et évolutif, en fonction de vos besoins.</p>
                      <div className="separator-orange"></div>
                      <div className='arrow-down-zone'><div className='arrow-down'>En savoir +</div></div>
                    </a>
                      <div className='p'>
                        <div className='one-point'>
                            <p>• Création d'une maquette au démarrage du projet</p>
                        </div>
                      <div className='one-point'>
                            <p>• Site Web en Responsive Design sur mesure jusqu'à 5 pages</p>
                        </div>
                        <div className='one-point'>
                        <p>• Une gallerie d'images jusqu'à 40 images</p>
                        </div>
                        <div className='one-point'>
                        <p>• Un formulaire de contact avec nom, adresse, email, objet, message</p>
                        </div>
                        <div className='one-point'>
                          <p>• Liens vers les reseaux sociaux</p>
                        </div>
                        <div className='one-point'>
                        <p>• Référencement naturel</p>
                      </div>
                      <div className='one-point'>
                        <p>• Codage à la main</p>
                      </div>
                      <div className='one-point'>
                        <p>• Offert: Pages "mentions légales", "RGPD" et lien "QR Code"</p>
                      </div>
                    </div>
                </div>


                <div id='item3' className='formule-card-4'>
                    <a href='#item3'>
                        <h3>PROJET PERSONNALISé</h3>
                        <div className="separator-orange"></div>
                        <p className='p-intro'>En cas de besoin d'un projet Web spécifique, ne pouvant pas être inclus dans les deux catégories "Site Vitrine".</p>
                        <div className="separator-orange"></div>
                        <div className='arrow-down-zone'><div className='arrow-down'>En savoir +</div></div>
                    </a>
                    <div className='p'>
                        <p>Un projet qui ne rentre pas dans ces deux catégories?</p>
                        <div className="separator-orange"></div>
                        <p>Prendre contacte  avec moi pour parler de votre projet et en connaître la faisabilité</p>
                        <p>Cette formule implique une rémunération par forfait journalier</p>
                    </div>
                </div>
            </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div className="separator-orange descend"></div>
                    <p className='remonte'>Suppléments : icones personnalisés et carte intéractive</p>
                    <div className="separator-orange descend2"></div>
          </div>
        </div>
    )
}


export default Formules
