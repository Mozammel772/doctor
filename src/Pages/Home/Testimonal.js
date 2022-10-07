import React from 'react';
import image from '../../asset/icons/quote.svg';
import people1 from '../../asset/images/people1.png';
import people2 from '../../asset/images/people2.png';
import people3 from '../../asset/images/people3.png';
import TestimonalCard from './TestimonalCard';
const Testimonal = () => {
    const reviwes = [
        {_id:1,
        name:'Wilson Hari',
        title:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        image:people1,
        location:'Califoniya'
        },
        {_id:2,
        name:'Wilson Hari',
        title:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        image:people2,
        location:'USA'
        },
        {_id:3,
        name:'Wilson Hari',
        title:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        image:people3,
        location:'UK'
        },
    ]
    return (
        <section>
            <div className='flex justify-between mt-20'>
                <div>
                    <h1 className='font-mono text-blue-500 text-2xl'>Testimonial</h1>
                    <h1 className='text-xl text-black font-mono'>What Our Partner Says</h1>
                </div>
                <div className='w-20 lg:48'>
                    <img src={image} alt="Avator" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    reviwes.map(reviwe=><TestimonalCard
                    key={reviwe._id}
                    reviwe={reviwe}
                    ></TestimonalCard>)
                }
            </div>
        </section>
    );
};

export default Testimonal;