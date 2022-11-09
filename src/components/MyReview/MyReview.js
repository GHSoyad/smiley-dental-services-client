import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReview = ({ reviewData, handleDelete }) => {
    const { review, dateTime, _id, serviceId } = reviewData;

    const [service, setService] = useState({});
    const [placeholder, setPlaceHolder] = useState(true);

    useEffect(() => {
        fetch(`https://smiley-dental-services-server.vercel.app/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setPlaceHolder(false);
            })
            .catch(error => console.log(error))
    }, [serviceId])

    return (
        <div className='bg-white p-4 rounded-lg'>
            {
                placeholder ?
                    <div className='animate-pulse flex flex-col gap-2'>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='bg-primary/50 w-32 h-5 rounded'></div>
                                    <div className='bg-primary/50 w-32 h-4 rounded'></div>
                                </div>
                            </div>
                            <button className='text-rose-600 bg-rose-200 p-2 rounded-full hover:scale-110 transition'><FaTrashAlt></FaTrashAlt></button>
                        </div>
                        <div className='pt-4'>
                            <div className='bg-primary/50 w-full h-12 rounded'></div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Link to={`/service/${serviceId}`}><p className='font-medium'>{service.name}</p></Link>
                                    <p className='text-sm'>{dateTime}</p>
                                </div>
                            </div>
                            <button onClick={() => handleDelete(_id)} className='text-rose-600 bg-rose-200 p-2 rounded-full hover:scale-110 transition'><FaTrashAlt></FaTrashAlt></button>
                        </div>
                        <div className='pt-4'>
                            <span className='font-medium'>Review:</span> {review}
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyReview;