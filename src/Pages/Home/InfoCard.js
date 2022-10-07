import React from 'react';

const InfoCard = ({image,title,bgColor,title1}) => {
    return (
        <div className={`card lg:card-side shadow-xl  ${bgColor}`}>
            <figure>
                <img className='pl-5 pt-5' src={image}
                 alt="Album" />
                </figure>
            <div className="card-body">
                <h2 className="card-title  text-white font-mono font-bold">{title}</h2>
                <p className='text-violet-500'>{title1}.</p>
            </div>
        </div>
    );
};

export default InfoCard;