import React from 'react';
import CardInfo from './CardInfo';
import image1 from '../../asset/images/cavity.png';
import image2 from '../../asset/images/fluoride.png';
import image3 from '../../asset/images/whitening.png'

const Card = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-mono text-blue-500 mt-5'>Our Service</h1>
            <h1 className='text-5xl text-center font-mono text-blue-500 mt-5'>Service We Provider</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           <CardInfo bgColor='bg-red-100' name='Cavite' title='lorem ispa is the best free website' image={image1}></CardInfo>
            <CardInfo bgColor='bg-red-100' name='fluoride' title='lorem ispa is the best free website' image={image2}></CardInfo>
            <CardInfo bgColor='bg-red-100' name='whitening' title='lorem ispa is the best free website' image={image3}></CardInfo>
           </div>
            
        </div>
    );
};

export default Card;