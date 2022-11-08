import React from 'react';

const SvDetails = ({ serviceDetails: { name, image, price, description } }) => {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <figure className=''><img className='w-9/12 mx-auto rounded' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <span className='w-24 rounded px-4 bg-orange-100 text-orange-700'>Creative</span>
                <h2 className="font-extrabold text-5xl">{name}</h2>
                <span className='text-slate-500 font-bold'>
                    <span>By <span className='text-black'>Admin</span> </span>
                    <span className='ml-5'>September 16, 2022</span>
                    <span className='ml-5'>Views <span className='text-black'>453</span></span>
                </span>
                <p className='text-slate-500'>{description}</p>
            </div>
        </div>
    );
};

export default SvDetails;