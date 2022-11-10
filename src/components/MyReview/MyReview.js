import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReview = ({ reviewData, handleDelete }) => {
    const { review, dateTime, _id, serviceId } = reviewData;

    const [service, setService] = useState({});
    const [placeholder, setPlaceHolder] = useState(true);
    const [newReview, setNewReview] = useState(review);
    const [newDateTime, setNewDateTime] = useState(dateTime)

    // Load service data
    useEffect(() => {
        fetch(`https://smiley-dental-services-server.vercel.app/service/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setPlaceHolder(false);
            })
            .catch(error => console.log(error))
    }, [serviceId])

    // Update review function
    const handleEditReview = (event, id) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;

        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dateTime = `${date} ${time}`;

        const updatedReview = {
            review,
            dateTime
        }

        fetch(`https://smiley-dental-services-server.vercel.app/update-review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                const updated = data.modifiedCount;
                if (updated) {
                    toast.success('Review Updated!')
                    setNewReview(review);
                    setNewDateTime(dateTime);
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='bg-white p-4 rounded-lg'>
            {
                placeholder ?
                    <div className='animate-pulse flex flex-col'>
                        <div className='flex justify-between items-center gap-4'>
                            <div className='flex items-center gap-2'>
                                <div className='flex flex-col gap-1'>
                                    <div className='bg-primary/50 w-32 h-5 rounded'></div>
                                    <div className='bg-primary/50 w-32 h-4 rounded'></div>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <button className="text-primary bg-primary/20 p-2 rounded-full hover:scale-110"><FaEdit></FaEdit></button>
                                <button className='text-rose-600 bg-rose-200 p-2 rounded-full hover:scale-110 transition'><FaTrashAlt></FaTrashAlt></button>
                            </div>
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
                                    <Link to={`/service/${serviceId}`}><p className='font-medium text-primary'>{service.name}</p></Link>
                                    <p className='text-sm'>{newDateTime}</p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div title='Edit Review'>
                                    {/* The button to open modal */}
                                    <label htmlFor={`my-modal-${_id}`} className="block text-primary bg-primary/20 p-2 rounded-full hover:scale-110 cursor-pointer" ><FaEdit></FaEdit></label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />

                                    <label htmlFor={`my-modal-${_id}`} className="modal cursor-pointer">
                                        <label className="modal-box relative max-w-3xl" htmlFor="">
                                            <label htmlFor={`my-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                            <form onSubmit={(event) => handleEditReview(event, _id)}>
                                                <p className='text-xl font-medium mb-1'>Edit your review</p>
                                                <textarea name='review' className="textarea textarea-primary w-full text-base my-3" rows="3" placeholder="Write review here..." required defaultValue={newReview} onFocus={(e) => e.target.select()} ></textarea>
                                                <button type='submit' className='btn btn-primary'>Update Review</button>
                                            </form>
                                        </label>
                                    </label>
                                </div>
                                <button onClick={() => handleDelete(_id)} title='Delete Review' className='text-rose-600 bg-rose-200/80 p-2 rounded-full hover:scale-110 transition'><FaTrashAlt></FaTrashAlt></button>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <span className='font-medium'>Review:</span> {newReview}
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyReview;