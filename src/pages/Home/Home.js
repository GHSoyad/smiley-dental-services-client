import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pricing from '../../components/Pricing/Pricing';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <section className="relative -mt-[128px] bg-[url(https://i.ibb.co/Zzr3Vb9/hero-cover.jpg)] bg-cover bg-center bg-no-repeat" >
                <div className="absolute inset-0 bg-white/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/40 sm:to-white/0" ></div>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-2xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">Crafting Smiles With<strong className="block font-extrabold text-primary mt-2">Our Personal Touch.</strong></h1>
                        <p className="mt-4 sm:text-xl">A personalized approach to creating the perfect smile</p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link to='/services' className='w-full rounded sm:w-auto'><button className="btn btn-primary px-12 py-3 text-sm font-medium">Get Started</button></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)] flex flex-col gap-20'>
                <div className='mt-20'>
                    <h1 className='text-2xl md:text-3xl font-medium text-center mb-8'>Dental Services</h1>
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
                    <h1 className='text-2xl md:text-3xl font-medium text-center mb-8'>Pricing Package</h1>
                    <Pricing></Pricing>
                </div>

                <div>
                    <h1 className='text-xl md:text-3xl font-medium text-center mb-8'>About Me</h1>

                    <div className='flex flex-col md:flex-row border border-primary/30 rounded'>
                        <div className='md:w-2/5'>
                            <img src="https://i.ibb.co/dLbmNd2/dentist.jpg" alt="" className='rounded' />
                        </div>
                        <div className='md:w-3/5 flex flex-col gap-6 p-6'>
                            <p className='font-medium text-xl text-primary'>Dental Surgeon</p>
                            <h2 className='font-medium text-4xl'>John Doe</h2>
                            <p className='text-lg text-justify'>Providing the most advanced dental care in a comfortable and pleasant atmosphere are the priorities of John Doe.  Dr. Doe is among the most accomplished and regarded general dentists in San Antonio and South Texas. He is diligent in his pursuit to stay current in providing the profession's leading dental care procedures while utilizing state-of-the-art technology, supplies and equipment.</p>
                            <div className='flex flex-col sm:flex-row justify-between gap-6'>
                                <div className='flex flex-col gap-2 md:w-1/2'>
                                    <p className='font-bold mb-2'>Practice Areas</p>
                                    <li className='flex items-center gap-3'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Teeth Alignment</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Cavity Inspection</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Cosmetic Dentistry</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <svg className="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span>Oral Hygiene</span>
                                    </li>
                                </div>
                                <div className='flex flex-col gap-2 md:w-1/2'>
                                    <p className='font-bold mb-2'>Contact</p>
                                    <p><span className='font-bold mr-2'>Email:</span> example@mail.com</p>
                                    <p><span className='font-bold mr-2'>Phone:</span> +526489xxxx</p>
                                    <div className='flex items-center text-4xl text-primary gap-6 mt-2'>
                                        <a href="https://www.facebook.com/golam.sowad/" target="_blank" rel="noreferrer noopener"><FaFacebookF className='bg-base-100 rounded-full p-2 hover:bg-primary hover:text-base-100 cursor-pointer border border-primary'></FaFacebookF></a>
                                        <a href="https://www.linkedin.com/in/ghsoyad/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn className='bg-base-100 rounded-full p-2 hover:bg-primary hover:text-base-100 cursor-pointer border border-primary'></FaLinkedinIn></a>
                                        <a href="https://github.com/GHSoyad" target="_blank" rel="noreferrer noopener"><FaGithub className='bg-base-100 rounded-full p-2 hover:bg-primary hover:text-base-100 cursor-pointer border border-primary'></FaGithub></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;