import React from 'react'
import '../App.css';

import Services from '../COMPONENTS/Services';
import Projets from '../COMPONENTS/Projets';
import Pmeassobanner from '../COMPONENTS/Pmeassobanner';
import Formules from '../COMPONENTS/Formules';
import About from '../COMPONENTS/About';
import OneInterloc from '../COMPONENTS/OneInterloc';
import Footer from '../COMPONENTS/Footer';
import Banner from '../COMPONENTS/Banner';


function Home() {
    return (
        <div>
            <Banner/>
            <Services/>
            <Projets/>
            <Pmeassobanner/>
            <Formules/>
            <OneInterloc/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home
