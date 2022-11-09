import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ReviewForm from './ReviewForm';
import ReviewTexts from './ReviewTexts';

const Review = ({ reviews }) => {
    const [updatedReviews, setUpdatedReviews] = useState(reviews);

    const serviceId = reviews[0].service_id;

    const handleForm = event => {
        event.preventDefault();
        const review = event.target.review.value;

        const newReview = {
            review: review,
            service_id: serviceId,
            user_id: "636ab1406fbf03bf44767445",
            user_name: "admin1",
            user_profile_pic: "https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330_1280.png"
        };

        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    newReview._id = data.insertedId;
                    const allReviews = [...updatedReviews, newReview];
                    setUpdatedReviews(allReviews);

                    // reset the form
                    event.target.reset();
                    // give a toast
                    toast.success('Review added successfully');
                }
            })
    }
    return (
        <div className='mx-auto max-w-screen-xl mt-9'>
            <Toaster />
            <h1 className='text-3xl font-bold'>Reviews for this service</h1>
            <hr />
            <div className='rounded-md px-7 py-5 mt-5 bg-white text-lg'>
                Reviewd by <span className='font-semibold'>{reviews.length} User</span>
            </div>
            {
                updatedReviews.map(review => <ReviewTexts
                    key={review._id}
                    review={review}
                ></ReviewTexts>)
            }
            <ReviewForm handleForm={handleForm}></ReviewForm>
        </div>
    );
};

export default Review;