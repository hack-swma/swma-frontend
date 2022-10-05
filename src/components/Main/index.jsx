import * as style from './index.style';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick';
import axios from 'axios'

import sliderImage1 from '../../images/Main/sliderImage1.png'

const Render = () => {
    const colorList = ['red', 'orange', 'yellow']
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <style.background>
            <style.slider {...settings}>
                <style.sliderImage bg={sliderImage1}/>
                <style.sliderImage bg={sliderImage1}/>
                <style.sliderImage bg={sliderImage1}/>
            </style.slider>
        </style.background>
    )
}
export default Render;