import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };


    const menuId = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Appoiment'>Appoiment</Link></li>
        <li><Link to='/Reviews'>Reviews</Link></li>
        {
            user && <li><Link to='/Dashboard'>Dashboard</Link></li>
        }
        {user ? <button className='btn btn-outline btn-warning font-mono font-bold' onClick={logout}>Sing Out</button> : <Link className='btn btn-outline btn-warning font-mono font-bold' to='/Login'>Login</Link>}
    </>
    return (
        <div className="navbar bg-red-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-100 rounded-box w-52 text-black font-bold font-mono">
                        {
                            menuId
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-orange-500">Doctor-Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-black font-bold font-mono text-xl">
                    {
                        menuId
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={1} htmlFor="dashboard-sitebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;