import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service: { _id, name, image, price, description } }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure className='h-56'><img src={image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <div className='flex justify-between'>
                    <span className='rounded px-4 bg-orange-100 text-orange-700'>Creative</span>
                    <span>Rating: 5/5</span>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{description.length > 100 ? `${description.slice(0, 200)}...` : description}</p>
                <span className='text-slate-500'>
                    <div>
                        <span>By <span className='text-black'>Admin</span> </span>
                        <span className='ml-5'>September 16, 2022</span>
                    </div>
                    <p>Views 453</p>
                </span>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;