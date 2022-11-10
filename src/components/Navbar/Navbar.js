import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from "react-icons/fa";
import logo from '../../logo.png';

const Navbar = () => {

    const { userInfo, setUserInfo, signOutUser } = useContext(UserContext);

    // Sign out user
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                setUserInfo(null);
                toast.success('Logged out Successfully');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className='w-full bg-[#a3f1ec] relative z-20'>
            <div className="navbar container mx-auto max-w-screen-xl mb-4 md:mb-10 py-2 md:py-5 justify-between">
                <div className='hidden md:flex gap-3'>
                    <Link to='/'><img src={logo} alt="" className='w-12 h-full rounded' /></Link>
                    <Link to='/'><p className='hidden lg:block text-3xl font-bold'>Smiley Dental Services</p></Link>
                    <Link to='/'><p className='lg:hidden text-3xl font-bold'>Smiley</p></Link>
                </div>
                <div className='md:hidden'>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/blogs'>Blogs</NavLink></li>
                            {(userInfo && userInfo?.uid) ?
                                <>
                                    <li><NavLink to='/my-reviews'>My Reviews</NavLink></li>
                                    <li><NavLink to='/add-service'>Add Service</NavLink></li>
                                    <li className='ml-4' title={userInfo?.displayName || userInfo?.email}>
                                        Profile
                                    </li>
                                    <li><Link onClick={handleSignOut}>Logout</Link></li>
                                </>
                                :
                                <>
                                    <li><NavLink to='/login'>Login</NavLink></li>
                                    <li><NavLink to='/register'>Register</NavLink></li>
                                </>
                            }
                        </ul>
                    </div>

                </div>
                <div className='md:hidden gap-2'>
                    <Link to='/'><img src={logo} alt="" className='w-8 h-full rounded' /></Link>
                    <Link to='/'><p className='text-2xl font-bold'>Smiley</p></Link>
                </div>
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal p-0 font-medium items-center">
                        <li><NavLink to='/services' className='py-2.5 px-4'>Services</NavLink></li>
                        <li><NavLink to='/blogs' className='py-2.5 px-4'>Blogs</NavLink></li>
                        {(userInfo && userInfo?.uid) ?
                            <>
                                <li><NavLink to='/my-reviews' className='py-2.5 px-4'>My Reviews</NavLink></li>
                                <li><NavLink to='/add-service' className='py-2.5 px-4'>Add Service</NavLink></li>
                                <li><Link className='py-2.5 px-4' onClick={handleSignOut}>Logout</Link></li>
                                <li className='ml-4' title={userInfo?.displayName || userInfo?.email}>
                                    {userInfo?.photoURL ?
                                        <img className='w-8 h-8 object-cover p-0 rounded-full' src={userInfo?.photoURL} alt=''></img>
                                        :
                                        <FaUser className='text-primary p-1 text-3xl'></FaUser>
                                    }
                                </li>
                            </>
                            :
                            <>
                                <li><NavLink to='/login' className='py-2.5 px-4'>Login</NavLink></li>
                                <li><NavLink to='/register' className='py-2.5 px-4'>Register</NavLink></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;