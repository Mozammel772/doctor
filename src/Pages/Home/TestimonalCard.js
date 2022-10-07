import React from 'react';

const TestimonalCard = ({ reviwe }) => {
    const { name, title, image ,location} = reviwe;
    return (
        <div className="card bg-white shadow-2xl">
            <div className="card-body">
                <p className='text-black text-xl'>{title}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-15 rounded-full ring ring-primary ring-offset-red-100 mr-5">
                            <img src={image} alt="Avator"/>
                        </div>
                    </div>
                    <div className='text-xl font-mono text-blue-500'>
                        <h1>{name}</h1>
                        <h2>{location}</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TestimonalCard;