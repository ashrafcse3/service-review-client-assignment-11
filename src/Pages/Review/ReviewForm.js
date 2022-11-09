import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ReviewForm = ({ handleForm }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className='rounded-md px-7 py-5 my-5 bg-white text-lg mb-8'>
            {
                !user ?
                    <h1 className='text-2xl font-medium'>You need to <span className='font-extrabold'><Link to="/login">log in</Link> or <Link to="/register">register</Link></span> first to write a review</h1>
                    :
                    <div>
                        <h1 className='text-2xl font-bold'>Write a review about this service</h1>
                        <form onSubmit={handleForm} className='mt-9'>
                            <textarea name="review" id="" rows='5' className="border rounded block p-2.5 w-full text-sm" placeholder='Write your review'></textarea>
                            <input type="text" className='block w-full border my-3' readOnly placeholder={user.displayName} />
                            <button className='btn'>Submit review</button>
                        </form>
                    </div>
            }
        </div>
    );
};

export default ReviewForm;