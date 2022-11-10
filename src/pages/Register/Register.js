import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';
import GoogleSignIn from '../../firebase/GoogleSignIn';
import { createJWT } from '../../utilities/createJWT';

const Register = () => {

    const { emailRegistration, profileUpdate, setUserInfo, setLoading, loading } = useContext(UserContext);
    const success = (message) => toast.success(message, { duration: 8000 });
    const navigate = useNavigate();

    // Register user
    const handleUserRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const userPhoto = form.photo.value;
        const userEmail = form.email.value;
        const userPassword = form.password.value;

        // Check if password has uppercase letter
        if (!/(?=.*[A-Z])/.test(userPassword)) {
            toast.error('Password must contain a UpperCase Letter');
            return;
        }
        // Check if password has lowercase letter
        if (!/(?=.*[a-z])/.test(userPassword)) {
            toast.error('Password must contain a LowerCase Letter');
            return;
        }
        // Check if password has digit letter
        if (!/(?=.*[0-9])/.test(userPassword)) {
            toast.error('Password must contain a Digit');
            return;
        }

        emailRegistration(userEmail, userPassword)
            .then(userCredential => {
                const user = userCredential.user;
                form.reset()
                handleProfileUpdate(userName, userPhoto)
                createJWT(user)
                navigate('/')
                success("Registered Successfully.")
                setUserInfo(user)
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    // Update user profile
    const handleProfileUpdate = (userName, userPhoto) => {
        const profile = {
            displayName: userName,
            photoURL: userPhoto
        }

        profileUpdate(profile)
            .then(() => { })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='bg-base-100 container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)'>
            <Helmet><title>Register - Smiley</title></Helmet>

            <div className='flex justify-center'>
                <div className='hidden md:block md:w-1/2 xl:w-1/3 bg-base-300 p-8 rounded-l-lg'>
                    <img src="https://i.ibb.co/x5DPRBR/left-side.jpg" alt="" className='w-full h-full object-cover rounded' />
                </div>
                <div className='w-full md:w-1/2 xl:w-1/3 relative'>
                    {
                        loading &&
                        <div className='flex justify-center items-center text-primary text-2xl font-medium absolute top-0 right-0 z-10 bg-white/80 w-full h-full'>
                            <FaSpinner className="animate-spin mr-3"></FaSpinner>
                            Registering...
                        </div>
                    }
                    <div className='backdrop-blur-sm bg-base-300 w-full mx-auto p-8 rounded-lg md:rounded-l-none'>
                        <form onSubmit={handleUserRegistration}>
                            <h1 className='text-2xl md:text-3xl text-primary font-medium mb-6 text-center'>Register Here</h1>
                            <div className="form-control w-full mb-2">
                                <label className="label font-medium">
                                    <span>Your Full Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Type here..." className="input input-bordered input-primary" required />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label font-medium">
                                    <span>Your Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="Type here..." className="input input-bordered input-primary" required />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label font-medium">
                                    <span>Your Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Type here..." className="input input-bordered input-primary" required />
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label font-medium">
                                    <span>Your Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Type here..." className="input input-bordered input-primary" required />
                            </div>
                            <button type='submit' className='btn btn-primary w-full mt-6'>Register</button>
                            <p className='text-base mt-4 text-center'>Already have an account? <Link to='/login' className='text-primary font-medium'>Login.</Link></p>
                        </form>
                        <GoogleSignIn></GoogleSignIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;