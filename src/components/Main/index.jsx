import * as style from './index.style';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import sliderImage1 from '../../images/Main/sliderImage1.png'
import sliderImage2 from '../../images/Main/sliderImage1.png'
import sliderImage3 from '../../images/Main/sliderImage1.png'

const Render = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
    };
    return (
        <style.background>
            <style.slider {...settings}>
                <style.sliderImage bg={sliderImage1}/>
                <style.sliderImage bg={sliderImage1}/>
            </style.slider>
        </style.background>
    )
}
export default Render;