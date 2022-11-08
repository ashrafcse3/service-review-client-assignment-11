import React from 'react';

const SliderPictureItem = ({ item: { id, img } }) => {
    return (
        <a href={`#slide${id}`}>
            <img alt='' className="mask mask-squircle w-3/5" src={img} />
        </a>
    );
};

export default SliderPictureItem;