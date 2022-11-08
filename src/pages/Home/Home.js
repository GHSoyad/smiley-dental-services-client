import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Home = () => {

    const services = useLoaderData();

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)]'>

            <div className='bg-base-300/70 p-4 md:p-8 rounded-xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10 '>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='text-center pt-4 md:pt-8'>
                    <Link to='/services'><button className='btn btn-primary font-bold'>See All Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;