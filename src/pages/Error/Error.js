import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="grid h-screen place-content-center">
            <Helmet><title>Error 404 - Smiley</title></Helmet>
            <div className="text-center bg-base-300/70 rounded-xl p-8 md:p-14">
                <strong className="text-6xl md:text-9xl font-black text-primary">404</strong>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-4xl mt-4">Uh-oh!</h1>
                <p className="my-6 text-gray-500">We can't find that page.</p>
                <Link to='/'><button className='btn-primary py-2.5 px-6 rounded-lg'>Go Back Home</button></Link>
            </div>
        </div>

    );
};

export default Error;