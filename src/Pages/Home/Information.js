import React from 'react';
import Service from './Service';
import image from '../../asset/images/treatment.png';

const Information = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Service image={image}></Service>
        </div>
    );
};

export default Information;