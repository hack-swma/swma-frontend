import styled from 'styled-components'
import Slider from 'react-slick';

export const background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: white;
`
export const slider = styled(Slider)`
    width: 100vw;
    height: 550px;
    display: flex;
    .slick-dots {
        .slick-active {
            button::before {
                color: #ff0000;
            }
        }
        button::before {
            color: #ee0000;
        }
    }
`
export const sliderImage = styled.div`
    width: 100%;
    height: 550px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${(props) => props.bg});
    background-size: cover;
`
export const sliderContent = styled.div`
    height: 300px;
    background-color: ${(props) => props.bgColor};
`
export const sliderArrow = styled.div`
    background-color: lightgray;
`