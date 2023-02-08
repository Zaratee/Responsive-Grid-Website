import React from 'react'

import Header from '../components/Header';
import Top from '../components/Top';
import Boxes from '../components/Boxes';
import About from '../components/About';
import Portafolio from '../components/Portafolio';
import Footer from '../components/Footer';

export const Home = () => {
    return (
        <div>
            <Header />
            <Top />
            <Boxes />
            <About />
            <Portafolio />
            <Footer />
        </div>
    )
}
