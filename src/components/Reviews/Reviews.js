import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = ({ id }) => {

    const { userInfo } = useContext(UserContext);

    const handleReview = (event) => {
        event.preventDefault()
        const review = event.target.review.value;
        const serviceId = id;
        const userName = userInfo?.displayName;
        const userEmail = userInfo?.email;
        const userImg = userInfo?.photoURL;

        const data = {
            serviceId,
            userName,
            userEmail,
            userImg,
            review
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                const inserted = data.acknowledged;
                if (inserted) {
                    event.target.reset();
                    toast.success('Review Submitted');
                }
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='gap-8 bg-base-300/70 rounded-xl p-4 lg:p-8 mt-8'>
            <form onSubmit={handleReview}>
                <p className='text-xl font-medium mb-1'>Write your review</p>
                <textarea name='review' className="textarea textarea-primary w-full text-base my-3" rows="3" placeholder="Write review here..." required ></textarea>
                <button type='submit' className='btn btn-primary'>Submit Review</button>
            </form>
            <div>

            </div>
        </div>
    );
};

export default Reviews;