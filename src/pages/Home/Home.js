import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Home = () => {

    const services = useLoaderData();

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)]'>

            <div className='grid grid-cols-3 gap-8 bg-base-200/90 p-8 rounded-xl'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;