import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='mx-auto mb-7 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default AllServices;