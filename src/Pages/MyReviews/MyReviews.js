import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import EachReviewRow from './EachReviewRow';

const MyReviews = () => {
    const reviews = useLoaderData();
    console.log(reviews);

    return (
        <div className='mx-auto max-w-screen-lg'>
            <Helmet>
                <title>My Reviews | Eye Specialist</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User name</th>
                            <th>S. Image</th>
                            <th>S. Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <EachReviewRow
                                key={review._id}
                                review={review}
                            ></EachReviewRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReviews;