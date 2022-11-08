import React, { useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {

    const { userInfo, loading } = useContext(UserContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center items-center text-primary text-2xl font-medium'>
                <FaSpinner className="animate-spin mr-3"></FaSpinner>
                Logging in...
            </div>
        )
    }

    if (userInfo && userInfo?.email) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;