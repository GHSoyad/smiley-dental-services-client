import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log(service)

    const { name, cost, img, description, _id } = service;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} className="max-h-[200px] w-full object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='pt-1 pb-4'>{description.length > 100 ? description.slice(0, 100) : description}...</p>
                <Link to={`/service/${_id}`}><button className="btn btn-primary font-bold w-full">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;