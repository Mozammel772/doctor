import React from 'react';
import InfoCard from './InfoCard';
import image from '../../asset/icons/clock.svg';
import image1 from '../../asset/icons/phone.svg';
import image2 from '../../asset/icons/marker.svg';


const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
           <InfoCard title1='This is my Tearm and Condition' bgColor='bg-accent' title='Opening Hours' image={image}></InfoCard>
           <InfoCard title1='+1263546326' bgColor='bg-black' title='Contact Us' image={image1}></InfoCard>
           <InfoCard title1='Faridpur, Dhaka ,Bangladesh' bgColor='bg-blue-300' title='Visited Our Location' image={image2}></InfoCard>
        </div>
    );
};

export default Info;