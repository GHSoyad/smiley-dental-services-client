import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaSpinner } from 'react-icons/fa';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [servicesLoader, setServicesLoader] = useState(true);

    useEffect(() => {
        fetch('https://smiley-dental-services-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setServicesLoader(false);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)]'>
            <Helmet><title>Services - Smiley</title></Helmet>
            <h1 className='text-2xl md:text-3xl font-medium text-center'>Services</h1>
            <div className='bg-base-300/70 p-4 md:p-8 rounded-xl my-6 md:my-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                {
                    servicesLoader &&
                    <div className='text-center font-medium flex justify-center items-center text-xl'>
                        <FaSpinner className="animate-spin mr-3 text-primary text-3xl"></FaSpinner>
                        Loading Services...
                    </div>
                }
            </div>
        </div>
    );
};

export default Services;