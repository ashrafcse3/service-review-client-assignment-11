import React from 'react';

const Blog = ({ blog: { question, answer } }) => {
    return (
        <div className="card bg-base-100 shadow-xl m-7">
            <div className="card-body">
                <h2 className="card-title">{question}</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Blog;