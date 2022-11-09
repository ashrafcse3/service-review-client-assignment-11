import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const { setUser, signUpUser, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signUpUser(email, password)
            .then(result => {
                const registeredUser = result.user;
                setUser(registeredUser);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const signedUser = result.user;
                setUser(signedUser);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='mx-auto max-w-screen-lg grid grid-cols-1 lg:grid-cols-2'>
            <Helmet>
                <title>Register | Eye Specialist</title>
            </Helmet>
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
                        <Link to="/login" className="label-text-alt link link-hover">Have an account? Login</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Sign up</button>
                </div>
            </form>
            <div className='flex items-center justify-center'>
                <button onClick={handleGoogleSignIn} className='border px-4 py-2 flex items-center'>Login with google <FcGoogle className='ml-2' /></button>
            </div>
        </div>
    );
};

export default Register;