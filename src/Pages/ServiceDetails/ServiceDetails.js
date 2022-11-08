import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import SvDetails from './SvDetails';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    console.log(serviceDetails);
    return (
        <div>
            <>
                <SvDetails serviceDetails={serviceDetails}></SvDetails>
                <Review></Review>
            </>
        </div>
    );
};

export default ServiceDetails;