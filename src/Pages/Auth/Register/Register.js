import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div className='mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2'>
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="/login" className="label-text-alt link link-hover">Have an account? Login</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign up</button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className='border px-4 py-2 flex items-center'>Login with google <FcGoogle className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Register;