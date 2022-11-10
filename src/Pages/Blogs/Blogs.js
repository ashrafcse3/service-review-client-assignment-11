import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData();

    return (
        <div className='mt-16 border mx-auto max-w-screen-lg'>
            <Helmet>
                <title>Blogs | Eye Specialist</title>
            </Helmet>
            <h1 className='text-center font-bold text-3xl'>Blogs questions and answers</h1>
            {
                blogs.map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;