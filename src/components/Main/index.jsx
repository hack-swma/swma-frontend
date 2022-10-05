import * as style from './index.style';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import axios from 'axios'

const Render = () => {
    const colorList = ['red', 'orange', 'yellow']
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <style.background>
            <style.slider {...settings}>
                <div>asd</div>
                <div>asd</div>
                <div>asd</div>
            </style.slider>
        </style.background>
    )
}
export default Render;