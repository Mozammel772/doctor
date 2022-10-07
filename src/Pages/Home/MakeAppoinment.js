import React from 'react';
import image from '../../asset/images/doctor.png';
import appoinment from '../../asset/images/appointment.png';
import MainButton from '../Share/MainButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background:`url(${appoinment})`
        }} 
        className='flex justify-center items-center mt-20'>
            <div className="flex-1 -mt-20 hidden lg:block">
                <img src={image} alt="" />
            </div>
            <div className="flex-1 ">
                <h1 className='text-xl text-blue-500'>Appoiment</h1>
                <h1 className='text-3xl font-mono text-white'>Make an Appoiment Today</h1>
                <p className='text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae asperiores illum numquam at esse, accusamus assumenda tenetur qui corporis nisi aspernatur voluptatum omnis enim eius nesciunt reiciendis consequuntur provident.</p>
               <div className='mt-10'>
               <MainButton>Get Starts</MainButton>
               </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;