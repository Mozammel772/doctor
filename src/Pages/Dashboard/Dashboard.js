import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sitebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-2xl font-mono text-purple-700 py-5 font-bold'>Welcome to Admin Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sitebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-white text-base-content">
                    <li><Link to='/dashboard' className='text-xl font-semibold font-mono text-orange-600 '>Appoiment</Link></li>
                    <li><Link to='/dashboard/reviws' className='text-xl font-semibold font-mono text-orange-600 '>Appoiment Reviws</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;