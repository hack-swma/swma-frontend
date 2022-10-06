import * as style from './index.style';

import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Nav from '../common/Nav/index'
import sliderImage1 from '../../images/Main/sliderImage1.png'
import sliderImage2 from '../../images/Main/sliderImage2.png'
import sliderImage3 from '../../images/Main/sliderImage3.png'
import { useNavigate } from 'react-router-dom';

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
    const nav = useNavigate();
    const golob = () => {
        nav('/lobby');
    }
    return (
        <>
        <Nav/>
        <style.background>
            <style.slider {...settings}>
                {
                    sliderImageList.map((element, idx) => {
                        return (
                            <style.sliderImage bg={element} key={idx}>
                                <p>
                                <style.sliderText>여행을 떠나고 싶은데,</style.sliderText>
                                </p>
                                <style.sliderText color='#00ffc2'>함께 할 사람</style.sliderText>
                                <style.sliderText>이 없다면?</style.sliderText>
                                <style.sliderUnderText onClick={golob}><text>바로가기 →</text></style.sliderUnderText>
                            </style.sliderImage>
                        )
                    })
                }
            </style.slider>
            <Link to='/lobby'>
                <style.navigateButton>둘러보러 가기</style.navigateButton>
            </Link>
        </style.background>
        </>
    )
}
export default Render;