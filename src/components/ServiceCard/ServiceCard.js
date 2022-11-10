import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { name, img, cost, description, _id } = service;

    return (
        <PhotoProvider maskOpacity={0.9}>
            <div className="card card-compact bg-base-100 shadow-xl ring ring-primary/10 rounded">
                <PhotoView src={img}><img src={img} alt={name} className="w-full object-cover md:h-[200px]" /></PhotoView>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <div className='flex items-center text-base'>
                            <FaDollarSign className='text-primary'></FaDollarSign>
                            <p className='font-medium'>{cost}</p>
                        </div>
                    </div>
                    <p className='pt-1 pb-4'>{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
                    <Link to={`/service/${_id}`}><button className="btn btn-primary font-bold w-full">View Details</button></Link>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceCard;