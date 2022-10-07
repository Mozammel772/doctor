import React from 'react';
import MainButton from '../Share/MainButton';

const Service = ({image}) => {
    return (
        <div className="hero min-h-fit">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-xs rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-black">Expresion Donate Care You Are Team!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <MainButton>Get Started </MainButton>
                </div>
            </div>
        </div>
    );
};

export default Service;