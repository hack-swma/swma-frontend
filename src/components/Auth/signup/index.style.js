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
        margin-left: 700px;
        margin-top: 50px;
        color: #AFAFAF;
    }
    > .id {
        margin-left: 700px;
        width: 16vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > button {
        position: absolute;
        margin-left: 20px;
        width: 80px;
        height: 7vh;
    }
    > .pwp {
        margin-left: 700px;
        margin-top: 35px;
        color: #AFAFAF;
    }
    > .pw {
        margin-left: 700px;
        width: 16vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > .pwc {
        margin-left: 700px;
        width: 16vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
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