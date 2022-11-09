import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import SvDetails from './SvDetails';

const ServiceDetails = () => {
    const { service, reviews } = useLoaderData();
    return (
        <div>
            <>
                <SvDetails serviceDetails={service}></SvDetails>
                <Review reviews={reviews}></Review>
            </>
        </div>
    );
};

export default ServiceDetails;