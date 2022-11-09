import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/favicon.ico';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content">
            <div>
                <img className='w-14' src={logo} alt="logo footer" />
                <p className="font-bold">
                    Eye specialist <br />Helping with different kind of eye problems since 2022
                </p>
                <p>Copyright © 2022</p>
            </div>
            <div className="grid grid-flow-col gap-4">
                <Link to='/' className="link link-hover">Home page</Link>
                <Link to='/services' className="link link-hover">All services</Link>
            </div>
        </footer>
    );
};

export default Footer;