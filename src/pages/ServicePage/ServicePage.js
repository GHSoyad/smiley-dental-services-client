import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaDollarSign } from 'react-icons/fa';
import Reviews from '../../components/Reviews/Reviews';
import { Helmet } from 'react-helmet';


const ServicePage = () => {

    const service = useLoaderData();
    const { _id, name, img, cost, description, rating } = service;

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)]'>
            <Helmet><title>{name} - Smiley</title></Helmet>
            <div className='flex flex-col md:flex-row gap-8 bg-base-300/70 rounded-xl p-4 lg:p-8'>
                <img src={img} alt="" className='md:w-1/2 rounded-lg' />
                <div className='md:w-1/2 flex flex-col gap-3 lg:gap-8 text-base lg:text-xl'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>{name}</h2>
                    <div className='flex gap-8 lg:gap-12'>
                        <div className='flex items-center gap-2'>
                            <FaStar className='text-primary'></FaStar>
                            <p className='font-medium'>Rating: {rating ? rating : '--'}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaDollarSign className='text-primary'></FaDollarSign>
                            <p className='font-medium'>Cost: {cost}</p>
                        </div>
                    </div>
                    <p className='text-justify'>{description}</p>
                </div>
            </div>
            <Reviews id={_id}></Reviews>
        </div>
    );
};

export default ServicePage;