import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pricing from '../../components/Pricing/Pricing';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <section className="relative -mt-[128px] bg-[url(https://i.ibb.co/Zzr3Vb9/hero-cover.jpg)] bg-cover bg-center bg-no-repeat" >
                <div className="absolute inset-0 bg-white/30 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/40 sm:to-white/0" ></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-2xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">Crafting Smiles With<strong className="block font-extrabold text-primary mt-2">Our Personal Touch.</strong></h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">A personalized approach to creating the perfect smile</p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link to='/services'><button className="btn btn-primary px-12 py-3 text-sm font-medium w-full rounded sm:w-auto">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)] flex flex-col gap-20'>
                <div className='mt-20'>
                    <h1 className='text-xl md:text-3xl font-medium text-center mb-8'>Dental Services</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10 '>
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </div>
                    <div className='text-center pt-4 md:pt-8'>
                        <Link to='/services'><button className='btn btn-primary font-bold shadow-lg'>See All Services</button></Link>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl md:text-3xl font-medium text-center mb-8'>Pricing Package</h1>
                    <Pricing></Pricing>
                </div>
            </section>
        </div>
    );
};

export default Home;