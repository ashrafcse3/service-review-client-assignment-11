import React from 'react';
import img1 from '../../../assets/banner/img1.jpg';
import img2 from '../../../assets/banner/img2.jpg';
import img3 from '../../../assets/banner/img3.jpg';
import img4 from '../../../assets/banner/img4.jpg';
import img5 from '../../../assets/banner/img5.jpg';
import SliderItem from './SliderItem';
import SliderPictureItem from './SliderPictureItem';

const sliderData = [
    {
        id: 1,
        img: img1,
        next: 2,
        prev: 5
    },
    {
        id: 2,
        img: img2,
        next: 3,
        prev: 1
    },
    {
        id: 3,
        img: img3,
        next: 4,
        prev: 2
    },
    {
        id: 4,
        img: img4,
        next: 5,
        prev: 3
    },
    {
        id: 5,
        img: img5,
        next: 1,
        prev: 4
    },
];

const Slider = () => {
    return (
        <div>
            <div className="carousel w-9/12 mx-auto">
                {
                    sliderData.map(item => <SliderItem
                        key={item.id}
                        item={item}
                    ></SliderItem>)
                }
            </div>

            <div className="flex justify-center w-full py-2 gap-2">
                {
                    sliderData.map(item => <SliderPictureItem
                        key={item.id}
                        item={item}
                    ></SliderPictureItem>)
                }
            </div>
        </div>
    );
};

export default Slider;