import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { setUser, signInUser, signInWithGoogle } = useContext(AuthContext);

    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                // console.error(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const signedUser = result.user;
                setUser(signedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            });
    }

    return (
        <div className='mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2'>
            <Helmet>
                <title>Login | Eye Specialist</title>
            </Helmet>
            <form onSubmit={handleLoginForm} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <Link to="/register" className="label-text-alt link link-hover">Do not have an account? Sign Up</Link>
                    </label>
                </div>
                <div>
                    <p className='text-red-600'>{error}</p>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className='flex items-center justify-center'>
                <button onClick={handleGoogleSignIn} className='border px-4 py-2 flex items-center'>Login with google <FcGoogle className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Login;