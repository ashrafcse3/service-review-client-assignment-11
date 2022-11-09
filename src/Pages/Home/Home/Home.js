import React from 'react';
import { Helmet } from 'react-helmet';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Helmet>
                <title>Home | Eye Specialist</title>
            </Helmet>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;