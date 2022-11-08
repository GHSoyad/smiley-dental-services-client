import React from 'react';

const Review = ({ reviewData }) => {
    const { userName, userImg, review, dateTime } = reviewData;

    return (
        <div className='bg-white p-4 rounded-lg'>
            <div className='flex items-center gap-2'>
                <img src={userImg} className="w-10 h-10 object-cover rounded-full" alt="" />
                <div>
                    <p className='font-medium'>{userName}</p>
                    <p className='text-sm'>{dateTime}</p>
                </div>
            </div>
            <div className='pt-4'>
                <span className='font-medium'>Review:</span> {review}
            </div>
        </div>
    );
};

export default Review;