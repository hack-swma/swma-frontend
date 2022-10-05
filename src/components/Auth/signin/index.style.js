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
    > h1 {
        margin-left: 725px;
        margin-top: 42px;
    }
    > .idp {
        margin-left: 730px;
        margin-top: 50px;
        color: #AFAFAF;
    }
    > .id {
        margin-left: 730px;
        width: 16vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > .pwp {
        margin-left: 730px;
        margin-top: 35px;
        color: #AFAFAF;
    }
    > .pw {
        margin-left: 730px;
        width: 16vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > .log{
        display: flex;
        margin-left: 730px;
        margin-top: 60px;
        width: 16vw;
        height: 7vh;
        border: 0px;
        border-radius: 10px;
        background-color: #597DFF;
        > text{
            margin: auto;
            color: white;
            font-size: 20px;
        }
    }
    > .sign {
        display: flex;
        margin-left: 730px;
        margin-top: 20px;
        width: 16vw;
        height: 7vh;
        border: 0;
        border-radius: 10px;
        background-color: whitesmoke;
        > text{
            color: black;
            font-size: 20px;
            margin: auto;
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