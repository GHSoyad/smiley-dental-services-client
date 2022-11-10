import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MyReview from '../../components/MyReview/MyReview';
import { UserContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {

    const { userInfo, signOutUser } = useContext(UserContext);
    const [reviewLoader, setReviewLoader] = useState(true);
    const [reviews, setReviews] = useState([]);
    const email = userInfo?.email;

    // Load user reviews
    useEffect(() => {
        fetch(`https://smiley-dental-services-server.vercel.app/my-reviews?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('smileySecretToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOutUser()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data);
                setReviewLoader(false);
            })
            .catch(error => console.log(error))
    }, [email, signOutUser])

    // Delete user review
    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure, you want to delete?')

        if (confirmation) {
            fetch(`https://smiley-dental-services-server.vercel.app/my-reviews?id=${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                        toast.success('Review Deleted!')
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_348px)]'>
            <Helmet><title>My Reviews - Smiley</title></Helmet>
            <h1 className='text-2xl md:text-3xl font-medium text-center'>My Reviews</h1>
            <div className='bg-base-300/70 rounded-xl p-4 lg:p-8 mt-8'>
                <div className='flex flex-col gap-4'>
                    {
                        reviews.map(reviewData => <MyReview key={reviewData._id} reviewData={reviewData} handleDelete={handleDelete}></MyReview>)
                    }
                </div>
                <div className='text-center font-medium text-xl'>
                    {
                        reviewLoader &&
                        <div className='flex justify-center items-center'>
                            <FaSpinner className="animate-spin mr-3 text-primary text-3xl"></FaSpinner>
                            Loading reviews...
                        </div>
                    }
                    {
                        (reviews.length === 0) && (!reviewLoader) &&
                        <div>
                            <p className='pb-6'>You haven't reviewed any services yet</p>
                            <Link to='/services'><button className='btn btn-primary'>Go to Services</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyReviews;