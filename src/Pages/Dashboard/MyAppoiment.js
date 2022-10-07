import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoiment = () => {
    const [Appoiment, setAppoiment] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking? patient=${user?.patient}`)
                .then(res => res.json())
                .then(data => setAppoiment(data))
        }
    }, [user]);
    return (
        <div className="overflow-x-auto">
            <h1>Appoiment:{Appoiment.length}</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatement</th>
                        <th>Slot</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Appoiment.map(a =><tr>
                            <th>1</th>
                            <td>{a.patientName}</td>
                            <td>{a.treatment}</td>
                            <td>{a.slot}</td>
                            <td>{a.date}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppoiment;