import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import AppoimentCard from './AppoimentCard';
import Booking from './Booking';
import Loading from '../../Share/Loading';

const AppoimentCall = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatement] = useState(null);

    const formattedDate = format(date,'PP');

    const {data:services, isLoading, refetch } = useQuery(['avaiable',formattedDate], () => fetch(`http://localhost:5000/avaiable?date=${formattedDate}`)
            .then(res => res.json()) )
    if(isLoading){
        return <Loading></Loading>
    }

    //  useEffect(() => {
    //     fetch(`http://localhost:5000/avaiable?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    return (
        <div>
            <div>
                <h1 className='text-center text-2xl font-mono font-bold text-black'>Avaiable Appoiments:<span className='text-blue-500 font-mono'>{format(date, 'PP')}</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>
                {
                    services.map(service => <AppoimentCard
                        key={service._id}
                        service={service}
                        setTreatement={setTreatement}
                    ></AppoimentCard>)
                }
            </div>
            {
                treatment && <Booking  
                key={treatment._id}
                date={date}
                 treatment={treatment}
                 setTreatement ={setTreatement}
                 refetch={refetch}
                 ></Booking>
            }
        </div>
    );
};

export default AppoimentCall;