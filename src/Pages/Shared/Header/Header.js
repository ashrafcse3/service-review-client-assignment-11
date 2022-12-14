import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/favicon.ico';
import { AuthContext } from '../../../contexts/AuthProvider';

const Header = () => {
    const { user, setUser, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                setUser(null);
            })
            .then(error => console.error('header.js error', error));
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
            user ?
                <>
                    <li><Link to='/myreviews'>My reviews</Link></li>
                    <li><Link to='/addservice'>Add a service</Link></li>
                </>
                : ''
        }
    </>;

    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl d-flex flex-row">
                    {/* navbar icon */}
                    <img src={logo} alt="logo header" />
                    <p className='ml-2'>Eye specialist</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            Welcome {user.email}
                            <button onClick={handleLogOut} className='ml-2 btn'>Logout</button>
                        </div>
                        :
                        <div>
                            <Link to="/login" className="btn">Login</Link>
                            <Link to="/register" className="btn ml-2">Register</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;