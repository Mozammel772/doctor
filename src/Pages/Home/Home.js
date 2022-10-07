import React from 'react';
import image1 from '../../asset/images/chair.png';
import MainButton from '../Share/MainButton';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image1} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-black">Your New Smile Starts Here!</h1>
                    <p className="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <MainButton>Get Starts</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Home;