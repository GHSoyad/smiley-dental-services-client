import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)]'>
            <h1 className='text-2xl md:text-3xl font-medium text-center'>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10 bg-base-300/70 p-4 md:p-8 rounded-xl my-6 md:my-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;