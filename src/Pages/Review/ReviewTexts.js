import React from 'react';
// import { FaUserTie } from 'react-icons/fa';
import { UserIcon } from '@heroicons/react/24/solid'

const ReviewTexts = ({ review: { review, user_name, user_profile_pic } }) => {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-12 rounded-md px-7 py-5 bg-white text-lg my-5'>
                <span className='col-span-1 p-4'>
                    {
                        user_profile_pic ?
                            <img src={user_profile_pic} alt="" />
                            :
                            <UserIcon className='text-purple-600' />

                    }
                </span>
                <div className='col-span-11 text-slate-500'>
                    <span>by: <span className='font-semibold'>{user_name}</span> </span>
                    <span>September 16, 2022 </span>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewTexts;