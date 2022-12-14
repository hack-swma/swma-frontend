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
    > .box{
        margin-left: 55%;
    > h1 {
        margin-top: 42px;
    }
    > h2 {
        font-size: 30px;
        margin-top: -2vh;
    }
    > .idp {
        margin-top: 2vh;
        color: #AFAFAF;
    }
    > .id {
        width: 21vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > button {
        position: absolute;
        width: 80px;
        height: 7vh;
        border: 0;
        border-radius: 3px;
        background-color: #597DFF;
        > text {
            color: white;
        }
        :hover {
            cursor: pointer;
        }
    }
    > .pwp {
        margin-top: 20px;
        color: #AFAFAF;
    }
    > .pw {
        width: 21vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > .pwc {
        width: 21vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > .nextb {
        display: flex;
        margin-top: 7vh;
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