import React, { useState } from 'react';
import Footer from '../../Share/Footer';
import AppoimentCall from '../Services/AppoimentCall';
import Services from '../Services/Services';

const Homee = () => {
    const [date, setDate] =  useState(new Date())
    return (
        <div>
            <Services date={date} setDate ={setDate}></Services>
            <AppoimentCall date={date}></AppoimentCall>
            <Footer />
        </div>
    );
};

export default Homee;