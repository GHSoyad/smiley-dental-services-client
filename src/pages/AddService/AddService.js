import React from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.service.value;
        const cost = form.cost.value;
        const img = form.imgURL.value;
        const description = form.description.value;

        const service = {
            name,
            cost,
            img,
            description
        }

        fetch('https://smiley-dental-services-server.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                const inserted = data.acknowledged;
                if (inserted) {
                    toast.success('Service Added Successfully');
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='container px-2 md:px-4 xl:px-0 mx-auto max-w-screen-xl min-h-[calc(100vh_-_364px)]'>
            <Helmet><title>Add Service - Smiley</title></Helmet>
            <h1 className='text-2xl md:text-3xl font-medium text-center'>Add Service</h1>
            <div className='bg-base-300/70 p-4 md:p-8 rounded-xl mt-8'>
                <form onSubmit={handleAddService} className='bg-white p-4 flex flex-col gap-2 md:gap-4 md:p-8 rounded-xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 lg:gap-8'>
                        <div>
                            <label className="label font-medium">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input name='service' type="text" placeholder="Type here..." className="input w-full input-bordered input-primary" required />
                        </div>
                        <div>
                            <label className="label font-medium">
                                <span className="label-text">Service Cost</span>
                            </label>
                            <input name='cost' type="number" placeholder="Type here..." className="input w-full input-bordered input-primary" required />
                        </div>
                    </div>
                    <div>
                        <label className="label font-medium">
                            <span className="label-text">Service Image URL</span>
                        </label>
                        <input name='imgURL' type="text" placeholder="Type here..." className="input w-full input-bordered input-primary" required />
                    </div>
                    <div>
                        <label className="label font-medium">
                            <span className="label-text">Service Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-primary w-full text-base" rows="4" placeholder="Type here..." required ></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary sm:btn-wide'>Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;