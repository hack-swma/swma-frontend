import styled from 'styled-components'
import Slider from 'react-slick';

export const background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    position: relative;
    background-color: white;
`
export const slider = styled(Slider)`
    width: 100vw;
    height: 550px;
`
export const sliderImage = styled.div`
    padding-top: 7%;
    padding-left: 5%;
    width: 100%;
    height: 550px;
    position: relative;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${(props) => props.bg});
    background-size: cover;
`
export const sliderText = styled.span`
    font-size: 64px;
    font-weight: bold;
    color: ${(props) => props.color ? props.color : 'white'};
`
export const sliderUnderText = styled(sliderText)`
    position: absolute;
    font-size: 48px;
    right: 5%;
    bottom: 5%;
`
export const navigateButton = styled.button`
    width: 550px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: white;
    background-color: #0066FF;
    border: none;
    border-radius: 50px;
    font-weight: bold;
    transition: .15s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: #0044FF;
    }
    > span {
        color: white;
        font-weight: bold;
    }
`