import styled from 'styled-components'
import Slider from 'react-slick';

export const background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;
`
export const slider = styled(Slider)`
    width: 1100px;
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
    .slick-arrow {
        background-color: gray;
        height: 100%;
        &:active {
            background-color: black;
        }
    }
`
export const sliderContent = styled.div`
    height: 300px;
    background-color: ${(props) => props.bgColor};
`
export const sliderArrow = styled.div`
    background-color: lightgray;
`