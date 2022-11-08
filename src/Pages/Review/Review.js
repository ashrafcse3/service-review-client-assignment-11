import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewTexts from './ReviewTexts';

const Review = () => {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <ReviewTexts></ReviewTexts>
            <ReviewForm></ReviewForm>
        </div>
    );
};

export default Review;