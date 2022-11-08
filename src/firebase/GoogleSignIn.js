import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider/AuthProvider';

const GoogleSignIn = () => {

    const { googleSignIn } = useContext(UserContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <button className='btn btn-primary border-0 w-full mt-8' onClick={handleGoogleSignIn}><FaGoogle className='font-medium text-lg mr-4'></FaGoogle> Continue with Google</button>
    );
};

export default GoogleSignIn;