import React from 'react';
import appoiment from '../../asset/images/appointment.png';
import MainButton from '../../Pages/Share/MainButton';

const Contact = () => {
    return (
        <section style={{
            background:`url(${appoiment})`
        }} className='bg-primary px-8 py-10'>
            <div className='text-center mt-10 '>
                <h1 className='text-xl text-blue-500 font-semibold'>Contact Us</h1>
                <h1 className='text-2xl text-black font-bold'>Stays Connected Us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5 pt-10 '>
               <input className='input w-full max-w-md bg-white  font-mono text-blue-500 font-bold ' type="text" placeholder='Enter Your Email' />
               <input className='input w-full max-w-md bg-white  font-mono text-blue-500 font-bold ' type="text" placeholder='Subject' />
               <textarea   rows={6} className='input w-full max-w-md  font-mono text-blue-500 font-bold bg-white'
               placeholder='Enter Message'
               ></textarea>
               <MainButton>Submit</MainButton>
            </div>
        </section>
    );
};

export default Contact;