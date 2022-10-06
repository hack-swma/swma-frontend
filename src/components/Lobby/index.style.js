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
    position: relative;
    margin-top: 100px;
    gap: 20px;
`
export const writeButton = styled.span`
    position: absolute;
    right: 5%;
    top: 5%;
`
export const textContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const titleText = styled.span`
    font-size: calc((100vw / 1240) * 39.6);
    font-weight: bold;
    color: ${(props) => props.color ? props.color : 'black'};
    transition: .15s ease-in-out;
    &:hover {
        text-shadow: 1px 1px 2px ${(props) => props.color ? `${props.color + '99'}` : 'none'};
    }
`
export const regionButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const selectContainer = styled.div`
    width: 30%;
    display: flex;
    padding-left: 5px;
    padding-right: 3px;
`
export const selectButton = styled.button`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    cursor: pointer;
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
    max-height: 200px;
    aspect-ratio: 1 / 0.25;
    display: flex;
    align-items: center;
    border: 5px solid #DADADA;
    border-radius: 20px;   
    padding-left: 1%;
    padding-right: 3%;
`
export const postProfileImageContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const postProfileImage = styled.img`
    width: 100%;
    max-width: 150px;
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
    position: relative;
    padding-left: 20px;
    gap: 5%;
`
export const postProfileInfoName = styled.span`
    font-size: calc((100vw / 1240) * 34.8);
    font-weight: bold;
`
export const postProfileInfoLocationContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    gap: 10px;
`
export const postProfileInfoLocation = styled.span`
    font-size: calc((100vw / 1240) * 25.5);
    color: gray;
`
export const postProfileInfoLocationIcon = styled.img`
    width: 2.2vw;
    aspect-ratio: 1 / 1;
    user-select: none;
`
export const postProfileViewProfileMessageContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const postProfileViewProfileMessage = styled.span`
    font-size: calc((100vw / 1240) * 33);
    color: #818181;
    text-overflow: clip;
`
