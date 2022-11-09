import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const Reviews = ({ id }) => {

    const { userInfo } = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const [reviewLoader, setReviewLoader] = useState(true);
    const location = useLocation();

    const handleReview = (event) => {
        event.preventDefault()
        const review = event.target.review.value;
        const serviceId = id;
        const userName = userInfo?.displayName;
        const userEmail = userInfo?.email;
        const userImg = userInfo?.photoURL;

        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dateTime = `${date} ${time}`

        const reviewData = {
            serviceId,
            userName,
            userEmail,
            userImg,
            review,
            dateTime
        }

        fetch('https://smiley-dental-services-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                const inserted = data.acknowledged;
                const _id = data.insertedId;
                if (inserted) {
                    event.target.reset();
                    toast.success('Review Submitted');
                    const newReview = { ...reviewData, _id }
                    const newReviews = [newReview, ...reviews]
                    setReviews(newReviews)
                }
            })
            .catch(error => toast.error(error.message))
    }

    useEffect(() => {
        fetch(`https://smiley-dental-services-server.vercel.app/reviews?serviceId=${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setReviewLoader(false);
            })
            .catch(error => console.log(error))
    }, [id, setReviewLoader])

    return (
        <div className='flex flex-col gap-8 bg-base-300/70 rounded-xl p-4 lg:p-8 mt-8'>
            {
                userInfo && userInfo?.email ?
                    <form onSubmit={handleReview}>
                        <p className='text-xl font-medium mb-1'>Write your review</p>
                        <textarea name='review' className="textarea textarea-primary w-full text-base my-3" rows="3" placeholder="Write review here..." required ></textarea>
                        <button type='submit' className='btn btn-primary'>Submit Review</button>
                    </form>
                    :
                    <div className='flex items-center gap-2 text-xl font-medium'>
                        <p>Login to Review</p>
                        <Link to='/login' className='text-primary hover:underline' state={{ from: location }} replace >Login here!</Link>
                    </div>
            }
            {
                (reviews.length === 0) && (!reviewLoader) &&
                <p className='text-xl font-medium'>No Reviews Found. Be the first to Review!!</p>
            }
            <div className='flex flex-col gap-4'>
                {
                    reviews.map(reviewData => <Review key={reviewData._id} reviewData={reviewData}></Review>)
                }
            </div>
            {
                reviewLoader &&
                <div className='text-center font-medium flex justify-center items-center text-xl'>
                    <FaSpinner className="animate-spin mr-3 text-primary text-3xl"></FaSpinner>
                    Loading reviews...
                </div>
            }
        </div>
    );
};

export default Reviews;