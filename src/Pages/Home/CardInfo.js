import React from 'react';

const CardInfo = ({image,name,title,bgColor}) => {
    return (
        <div className={`card shadow-xl ${bgColor}`}>
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-mono font-bold text-2xl text-black">{name}</h2>
                <p className='font-mono font-semibold text-black'>{title}</p>
            </div>
        </div>
    );
};

export default CardInfo;