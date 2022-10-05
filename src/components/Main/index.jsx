import * as style from './index.style';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import sliderImage1 from '../../images/Main/sliderImage1.png'
import sliderImage2 from '../../images/Main/sliderImage2.png'
import sliderImage3 from '../../images/Main/sliderImage3.png'

const Render = () => {
    const sliderImageList = [sliderImage1, sliderImage2, sliderImage3]
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000  
    };
    return (
        <style.background>
            <style.slider {...settings}>
                {
                    sliderImageList.map((element, idx) => {
                        return (
                            <style.sliderImage bg={element} key={idx}>
                                <p>
                                <style.sliderText>여행을 떠나고 싶은데,</style.sliderText>
                                </p>
                                <style.sliderText color='#00ffc2'>같이 떠날 사람</style.sliderText>
                                <style.sliderText>이 없다면?</style.sliderText>
                                <style.sliderUnderText>바로가기 →</style.sliderUnderText>
                            </style.sliderImage>
                        )
                    })
                }
            </style.slider>
            <style.navigateButton>같이 떠날 사람 찾아보기</style.navigateButton>
        </style.background>
    )
}
export default Render;