import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services-in-home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='mt-14'>
            <h1 className='text-4xl font-bold text-center mb-7'>Our services</h1>
            <div className='mx-auto mb-7 max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Link to='/services' className='flex justify-center mb-9'><button className=' btn'>See all services</button></Link>
        </div>
    );
};

export default Services;