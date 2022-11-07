import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaDollarSign } from 'react-icons/fa';


const ServicePage = () => {

    const service = useLoaderData();
    console.log(service)
    const { _id, name, img, cost, description, rating } = service;

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl'>
            <div className='flex flex-col md:flex-row gap-8 bg-base-200/90 rounded-xl p-4 lg:p-8'>
                <img src={img} alt="" className='md:w-1/2 rounded-lg' />
                <div className='md:w-1/2 flex flex-col gap-3 lg:gap-8 text-base lg:text-xl'>
                    <h2 className='text-2xl lg:text-3xl font-semibold'>{name}</h2>
                    <div className='flex gap-8 lg:gap-12'>
                        <div className='flex items-center gap-2'>
                            <FaStar className='text-amber-300'></FaStar>
                            <p className='font-medium'>Rating: {rating}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaDollarSign className='text-amber-300'></FaDollarSign>
                            <p className='font-medium'>Cost: {cost}</p>
                        </div>
                    </div>
                    <p className='text-justify'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;