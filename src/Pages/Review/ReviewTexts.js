import React from 'react';
// import { FaUserTie } from 'react-icons/fa';
import { UserIcon } from '@heroicons/react/24/solid'

const ReviewTexts = () => {
    return (
        <div className='my-9'>
            <div className='rounded-md px-7 py-5 bg-white text-lg'>
                Reviewd by 1 User
            </div>
            <div className='grid grid-cols-12 rounded-md px-7 py-5 bg-white text-lg my-5'>
                <span className='col-span-1'>
                    <UserIcon className='text-purple-600' />
                </span>
                <div className='col-span-11 text-slate-500'>
                    <span>by: <span className='font-semibold'>admin</span> </span>
                    <span>September 16, 2022 </span>
                    <p>description</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewTexts;