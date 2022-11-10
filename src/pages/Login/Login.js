import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';
import GoogleSignIn from '../../firebase/GoogleSignIn';
import { createJWT } from '../../utilities/createJWT';

const Login = () => {

    const { emailSignIn, setUserInfo, setLoading, loading } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // SignIn user
    const handleSignIn = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        emailSignIn(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                createJWT(user);
                setUserInfo(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div className='bg-base-100 container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)]'>
            <Helmet><title>Login - Smiley</title></Helmet>



            <div className='flex justify-center'>
                <div className='w-full md:w-1/2 xl:w-1/3 relative'>
                    {
                        loading &&
                        <div className='flex justify-center items-center text-primary text-2xl font-medium absolute top-0 right-0 z-10 bg-white/80 w-full h-full'>
                            <FaSpinner className="animate-spin mr-3"></FaSpinner>
                            Logging in...
                        </div>
                    }
                    <div className='backdrop-blur-sm bg-base-300 w-full mx-auto p-8 rounded-lg md:rounded-r-none'>
                        <form onSubmit={handleSignIn}>
                            <h1 className='text-2xl md:text-3xl text-primary font-medium mb-6 text-center'>Login Here</h1>
                            <div className="form-control w-full mb-2">
                                <label className="label font-medium">
                                    <span className='label-text'>Your Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Type here..." className="input input-bordered input-primary" required />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label font-medium">
                                    <span className='label=text'>Your Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Type here..." className="input input-bordered input-primary" required />
                            </div>
                            <button type='submit' className='btn btn-primary w-full mt-6'>Login</button>
                            <p className='text-base mt-4 text-center'>Don't have an account? <Link to='/register' className='text-primary font-medium'>Register.</Link></p>
                        </form>
                        <GoogleSignIn from={from}></GoogleSignIn>
                    </div>
                </div>
                <div className='hidden md:block md:w-1/2 xl:w-1/3 bg-base-300 p-8 rounded-r-lg'>
                    <img src="https://i.ibb.co/TPDnmWb/right-side.jpg" alt="" className='w-full h-full object-cover rounded' />
                </div>
            </div>
        </div>
    );
};

export default Login;