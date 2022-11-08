import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { name, img, cost, description, _id } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} className="w-full object-cover md:h-[200px]" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title">{name}</h2>
                    <div className='flex items-center text-base'>
                        <FaDollarSign className='text-primary'></FaDollarSign>
                        <p className='font-medium'>{cost}</p>
                    </div>
                </div>
                <p className='pt-1 pb-4'>{description.length > 100 ? description.slice(0, 100) : description}...</p>
                <Link to={`/service/${_id}`}><button className="btn btn-primary font-bold w-full">Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;