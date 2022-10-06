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
        margin-left: 47vw;
        margin-top: 42px;
    }
    > h2 {
        font-size: 30px;
        margin-lefT: 54vw;
        margin-top: -2vh;
    }
    > .profile {
        margin-left: 45.4vw;
        margin-top: 1vh;
        color: #AFAFAF;
    }
    
    > .filebox {
        position:absolute;
        margin-left: 5vw;
        margin-top: 5vh;
        > .pro {
            margin-left: 40.3vw;
            margin-top: -5vh;
            > img {
            width: 8vw;
            height: 16vh;
            }
        }
        > label {
            display: inline-block;
            margin-top: -20vh;
            padding: 10px 20px;
            color: #fff;
            vertical-align: middle;
            background-color: #597DFF;
            cursor: pointer;
            height: 40px;
            margin-left: 50vw;
            border-radius: 5px;
        }
        > input[type="file"] {
            position: absolute;
            width: 0;
            height: 0;
            padding: 0;
            overflow: hidden;
            border: 0;
        }
    }
    > .ment {
        position: absolute;
        margin-left: 45.4vw;
        margin-top: 18vh;
        color: #AFAFAF;
    }
    .textareas {
        margin-left: 45.4vw;
        margin-top: 23vh;
        width: 20vw;
        height: 15vh;
        padding-left: 1vw;
    }
    .nextb {
        margin-top: 6vh;
        margin-left: 46vw;
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
