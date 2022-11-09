import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewTexts from './ReviewTexts';

const Review = ({ reviews }) => {
    return (
        <div className='mx-auto max-w-screen-xl mt-9'>
            <h1 className='text-3xl font-bold'>Reviews for this service</h1>
            <hr />
            <div className='rounded-md px-7 py-5 mt-5 bg-white text-lg'>
                Reviewd by <span className='font-semibold'>{reviews.length} User</span>
            </div>
            {
                reviews.map(review => <ReviewTexts
                    key={review._id}
                    review={review}
                ></ReviewTexts>)
            }
            <ReviewForm></ReviewForm>
        </div>
    );
};

export default Review;