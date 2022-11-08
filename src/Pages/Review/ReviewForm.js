import React from 'react';

const ReviewForm = () => {
    return (
        <div className='rounded-md px-7 py-5 bg-white text-lg mb-8'>
            <h1 className='text-2xl font-bold'>Write a review about this service</h1>
            <form className='mt-9'>
                <textarea name="review" id="" rows='5' className="border rounded block p-2.5 w-full text-sm" placeholder='Write your review'></textarea>
                <input type="text" className='block w-full border my-3' readOnly placeholder='Your name? admin' />
                <button className='btn'>Submit review</button>
            </form>
        </div>
    );
};

export default ReviewForm;