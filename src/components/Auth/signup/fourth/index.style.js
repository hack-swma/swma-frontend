import styled from 'styled-components';

export const background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: white;
    background-image: url("https://cdn.mkhealth.co.kr/news/photo/201910/img_MKH191015001_0.jpg");
    background-size: cover;
`;
export const loginbox = styled.div`
    width: 80vw;
    height: 85vh;
    margin: auto;
    background-color: white;
    border-radius: 10px;
    > .box {
    > h1 {
        margin-left: 47vw;
        margin-top: 42px;
    }
    > h2 {
        font-size: 30px;
        margin-left: 54vw;
        margin-top: -2vh;
    }
    > h3 {
        font-size: 24px;
        margin-left: 52vw;
        margin-top: 10vh;
    }
    > .inj {
        margin-left: 48vw;
        margin-top: 10vh;
        width: 16vw;
        height: 8vh;
        border: 0;
        border-radius: 10px;
        background-color: #597DFF;
        > text {
            font-size: 24px;
            color: white;
        }
    }
    > .nextb {
        display: flex;
        margin-left: 46vw;
        margin-top: 13vh;
        width: 20vw;
        height: 7vh;
        border: 0px;
        border-radius: 10px;
        background-color: #597DFF;
        > text{
            margin: auto;
            color: white;
            font-size: 20px;
        }
        :hover {
            cursor: pointer;
        }
    }
}
`

export const whemanchu = styled.div`
    position: fixed;
    width: 30vw;
    height: 85vh;
    margin-right: auto;
    background-color: #597DFF;
    border-radius: 10px;
    > h1 {
        margin-left: 40px;
        color: white;
        font-size: 35px;
        :hover {
            cursor: pointer;
        }
    }
    > p {
        margin-top: 50vh;
        margin-left: 40px;
        margin-right: 40px;
        color: white;
        font-size: 35px;
        font-weight: bold;
    }
`
