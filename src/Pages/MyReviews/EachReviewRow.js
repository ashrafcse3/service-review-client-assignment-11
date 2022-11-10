import React from 'react';

const EachReviewRow = ({ review: { service_image, service_name, user_name, review, _id } }) => {
    return (
        <tr>
            <td>{user_name}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={service_image} alt={`alt of ${service_image}`} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{service_name}</td>
            <th>{review.length > 30 ? `${review.slice(0, 30)}..` : review}</th>
            <td>
                <button className="btn btn-ghost btn-xs">Update</button> |
                <button className="btn btn-ghost btn-xs">Delete</button>
            </td>
        </tr>
    );
};

export default EachReviewRow;