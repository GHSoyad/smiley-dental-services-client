import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyReview = ({ reviewData, handleDelete }) => {
    const { userName, userImg, review, dateTime, _id } = reviewData;

    return (
        <div className='bg-white p-4 rounded-lg'>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <img src={userImg} className="w-10 h-10 object-cover rounded-full" alt="" />
                    <div>
                        <p className='font-medium'>{userName}</p>
                        <p className='text-sm'>{dateTime}</p>
                    </div>
                </div>
                <button onClick={() => handleDelete(_id)} className='text-rose-600 bg-rose-200 p-2 rounded-full hover:scale-110 transition'><FaTrashAlt></FaTrashAlt></button>
            </div>
            <div className='pt-4'>
                <span className='font-medium'>Review:</span> {review}
            </div>
        </div>
    );
};

export default MyReview;