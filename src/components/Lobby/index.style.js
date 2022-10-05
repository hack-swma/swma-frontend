import styled from 'styled-components';

export const background = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: white;
`
export const mainWrapper = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    gap: 20px;
`
export const textContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const titleText = styled.span`
    font-size: 50px;
    font-weight: bold;
    color: ${(props) => props.color ? props.color : 'black'};
    transition: .15s ease-in-out;
    &:hover {
        text-shadow: 1px 1px 2px ${(props) => props.color ? `${props.color + '99'}` : 'none'};
    }
`
export const regionButtonContainer = styled.div`
    width: 100%;
    justify-content: flex-start;
    appearance: none;
`
export const regionSelectButton = styled.select`
    width: 15%;
    height: 30px;
    max-width: 125px;
    display: flex;
    border-radius: 3px;
    outline: none;
    padding-left: 3px;
    padding-right: 5px;
    right: auto;
`
export const postWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`
export const postContainer = styled.div`
    width: 100%;
    aspect-ratio: 1 / 0.25;
    max-height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 5px solid #DADADA;
    border-radius: 20px;   
    padding-left: 25px;
    padding-right: 25px;
`
export const postProfileImageContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const postProfileImage = styled.img`
    height: 90%;
    max-height: 150px;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
`
export const postProfileInfoContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
`
export const postProfileInfoName = styled.span`
    font-size: 48px;
    font-weight: bold;
`
export const postProfileInfoLocation = styled.span`
    font-size: 30px;
    color: gray;
`
export const postProfileViewProfileMessageContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const postProfileViewProfileMessage = styled.span`
    font-size: 40px;
    color: darkgray;
    text-overflow: clip;
`
