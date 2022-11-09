import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';
import GoogleSignIn from '../../firebase/GoogleSignIn';

const Register = () => {

    const { emailRegistration, profileUpdate, setUserInfo } = useContext(UserContext);
    const success = (message) => toast.success(message, { duration: 8000 });
    const navigate = useNavigate();

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
                form.reset()
                handleProfileUpdate(userName, userPhoto)
                navigate('/')
                success("Registered Successfully.")
                setUserInfo(userCredential.user)
            })
            .catch(error => {
                toast.error(error.message)
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
        <div className='bg-base-100 container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl'>
            <Helmet><title>Register - Smiley</title></Helmet>
            <div className='backdrop-blur-sm bg-base-300/70 max-w-md mx-auto p-8 rounded-lg text-xl'>
                <form onSubmit={handleUserRegistration}>
                    <h1 className='text-2xl md:text-3xl text-primary font-medium mb-6 text-center'>Register Here</h1>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span>Your Full Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Type here..." className="input input-bordered input-primary" required />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span>Your Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Type here..." className="input input-bordered input-primary" required />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span>Your Email</span>
                        </label>
                        <input name='email' type="email" placeholder="Type here..." className="input input-bordered input-primary" required />
                    </div>
                    <div className="form-control w-full mb-2">
                        <label className="label">
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
    );
};

export default Register;