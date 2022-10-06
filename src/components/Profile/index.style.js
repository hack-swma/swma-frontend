import styled from 'styled-components'

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
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
`
export const profileContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
export const profileImageContainer = styled.div`
    height: 30vh;
    aspect-ratio: 1 / 1;
`
export const profileImage = styled.img`
    width: 100%;
    height: 100%;
`
export const profileInfoContainer = styled.div`
    width: 100%;
    display: flex;
    row-gap: 50px;
    flex-direction: column;
    padding-left: 3%;
`
export const profileNameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5%;
`
export const profileNameText = styled.span`
    font-size: calc((100vw / 1240) * 35.742);
    font-weight: bold;
`
export const profileLocationCertifiedIcon = styled.img`
    height: 70%;
    aspect-ratio: 1 / 1;
`
export const profileCertifyButton = styled.button`
    width: 20%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid red;
    border-radius: 10px;
    font-size: calc((100vw / 1240) * 18);
    font-weight: bold;
    cursor: pointer;
    transition: .15s ease-in-out;
    &:hover {
        background-color: #eee;
    }
`
export const profileRecentCertifiedDateText = styled.span`
    font-size: calc((100vw / 1240) * 20);
    color: gray;
`
export const profileLocationContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 3%;
    gap: 2.5%;
`
export const profileLocationIcon = styled.img`
    height: 100%;
    aspect-ratio: 1 / 1;
`
export const profileLocationText = styled.span`
    font-size: calc((100vw / 1240) * 25);
    color: gray;
`
export const profileGenderAgeContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 3%;
    gap: 4%;
`
export const profileGenderAgeText = styled.span`
    font-size: calc((100vw / 1240) * 20);
    font-weight: bold;
`
export const profileIntroduceContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3%;
    gap: 20px;
`
export const profileIntroduceTitleText = styled.span`
    font-size: calc((100vw / 1240) * 25.5);
    font-weight: bold;
`
export const profileIntroduceBox = styled.div`
    width: 70%;
    min-width: 300px;
    height: 150px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 12px 16px;
    `
export const profileIntroduceText = styled.span`
    display: flex;
    word-break: break-all;
    word-wrap: break-word;
    font-size: 22px;
    `
export const profileRatingContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3%;
    gap: 20px;
`
export const profileRatingText = styled.span`
    font-size: calc((100vw / 1240) * 25.5);
    font-weight: bold;
`
export const profileRatingStarContainer = styled.div`
    display: flex;
`
export const profileRatingStar = styled.span`
    font-size: 40px;
    color: ${(props) => props};
`



export const reviewContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    background-color: #F1F1F1;
    padding-right: 2.5%;
    gap: 2%;
    bottom: 0;
`
export const reviewStarWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const reviewOptionText = styled.span`
    font-size: 24px;
    font-weight: bold;
`
export const reviewStarContainer = styled.div`
    display: flex;
`
export const reviewStar = styled.span`
    font-size: 32px;
    color: ${(props) => props.level <= props.nowRate ? '#FFD600' : '#D9D9D9'};
    transition: .15s color;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.level <= props.nowRate ? '#FFC600' : '#C9C9C9'};
    }
`
export const reviewCommentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const reviewCommentArea = styled.textarea`
    width: 25vw;
    height: 8vh;
    display: flex;
    align-items: center;
    outline: none;
    border-radius: 2px;
    padding: 6px;
    resize: none;
`
export const reviewButton = styled.button`
    width: 200px;
    height: 50%;
    color: white;
    background-color: #597dff;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: .15s ease-in-out;
    &:hover {
        background-color: #486CEE;
    }
`