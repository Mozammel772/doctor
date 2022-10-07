import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import image from '../../../asset/images/chair.png';


const Services = ({date, setDate}) => {
   
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker 
                     mode="single"
                     selected={date}
                     onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;