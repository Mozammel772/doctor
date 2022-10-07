import React from 'react';
import Footer from '../Share/Footer';
import Card from './Card';
import Contact from './Contact';
import Home from './Home';
import Info from './Info';
import Information from './Information';
import MakeAppoinment from './MakeAppoinment';
import Testimonal from './Testimonal';

const Homes = () => {
    return (
        <div>
            <Home />
            <Info />
            <Card />
            <Information />
            <MakeAppoinment />
            <Testimonal />
            <Contact />
            <Footer />
            </div>
    );
};

export default Homes;