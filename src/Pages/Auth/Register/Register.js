import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const { user, setUser, signUpUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signUpUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                setUser(registeredUser);
            })
            .catch(error => console.error(error));
    }

    console.log(user);

    return (
        <div className='mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2'>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="/login" className="label-text-alt link link-hover">Have an account? Login</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Sign up</button>
                </div>
            </form>
            <div className='flex items-center justify-center'>
                <button className='border px-4 py-2 flex items-center'>Login with google <FcGoogle className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Register;