import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

const Footer = () => {
    return (
        <div className='w-full bg-base-300/70 mt-12 md:mt-16'>
            <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl pt-3'>
                <div className='py-5'>
                    <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-8 text-center py-5'>
                        <div className='flex gap-2 items-center justify-center'>
                            <Link to='/'><img src={logo} alt="" className='w-7 rounded' /></Link>
                            <Link to='/'><p className='text-xl font-medium'>Smiley Dental Services</p></Link>
                        </div>
                        <div className='flex justify-center items-center'>
                            <ul className='flex flex-wrap gap-7'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center text-2xl text-primary gap-6'>
                            <a href="https://www.facebook.com/golam.sowad/" target="_blank" rel="noreferrer noopener"><FaFacebookF className='cursor-pointer drop-shadow-md'></FaFacebookF></a>
                            <a href="https://www.linkedin.com/in/ghsoyad/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className='cursor-pointer drop-shadow-md'></FaLinkedinIn></a>
                            <a href="https://github.com/GHSoyad" target="_blank" rel="noreferrer noopener"><FaGithub className='cursor-pointer drop-shadow-md'></FaGithub></a>
                        </div>
                    </div>
                    <p className='text-center pt-5 text-xs'>Copyright © 2022 Golam Hasnain Soyad</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;