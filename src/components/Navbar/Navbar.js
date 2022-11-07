import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 container mx-auto max-w-screen-xl mb-10 pt-4 justify-between">
            <div className='hidden md:flex gap-3'>
                <Link to='/'><img src={logo} alt="" className='w-12 h-full rounded' /></Link>
                <p className='hidden lg:block text-3xl font-bold'>Smiley Dental Services</p>
                <p className='lg:hidden text-3xl font-bold'>Smiley</p>
            </div>
            <div className='md:hidden'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/courses'>Services</NavLink></li>
                    </ul>
                </div>

            </div>
            <div className='md:hidden gap-2'>
                <Link to='/'><img src={logo} alt="" className='w-8 h-full rounded' /></Link>
                <p className='text-2xl font-bold'>Smiley</p>
            </div>
            <div className="hidden md:flex">
                <ul className="menu menu-horizontal p-0 gap-2 font-bold items-center">
                    <li><NavLink to='/courses' className='py-2.5 px-5'>Services</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;