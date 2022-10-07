import React from 'react';

const AppoimentCard = ({ service, setTreatement }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-white shadow-xl text-center">
            <div className="card-body">
                <h2 className="text-xl text-blue-500 font-mono font-bold text-center">{name}!</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Not Avaiable</span>}</p>
                <p className='font-semibold font-serif text-orange-300'>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Avaiable</p>
                <div>
                    <label
                        htmlFor="Booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatement(service)}
                        className="btn btn-outline btn-secondary"
                    >Book Appoiment</label>
                </div>
            </div>
        </div>
    );
};

export default AppoimentCard;