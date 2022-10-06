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
    > .name {
        margin-left: 45.4vw;
        margin-top: 1vh;
        color: #AFAFAF;
    }
    > .named {
        margin-left: 45.4vw;
        width: 21vw;
        height: 7vh;
        font-size: 13px;
        padding-left: 10px;
    }
    > .birthday {
        margin-left: 45.4vw;
        margin-top: 20px;
        color: #AFAFAF;
    }
    > .birthdaye {
        margin-left: 45.4vw;
        width: 10vw;
        height: 7vh;
        font-size: 13px;
        padding-left: 10px;
    }
    > .gender {
        margin-left: 57vw;
        margin-top: -12vh;
        color: #AFAFAF;
    }
    > .gendered {
        margin-left: 57vw;
        margin-top: 30px;
        > .genderone{
            > input[type=radio] {
                margin-top: 0vh;
                margin-left: 0vw;
                border: 0px;
                width: 20px;
                height: 20px;
            }
            > span {
                display: flex;
                margin-top: -3.6vh;
                margin-left: 1.8vw;
                font-size: 20px;
                font-weight: bold;
            }
        }
        > .gendertwo {
            > input[type=radio] {
                position: absolute;
                margin-top: -3.1vh;
                margin-left: 5vw;
                border: 0px;
                width: 20px;
                height: 20px;
            }
            > span {
                display: flex;
                margin-top: -3.4vh;
                margin-left: 7vw;
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
    .language {
        margin-left: 45.4vw;
        margin-top: 5vh;
        color: #AFAFAF;
    }
    >  .checkboxes {
        margin-left: 45.2vw;
        width: 17vw;
        > label {
            > input[type=checkbox] {
                width: 20px;
                height: 15px;
            }
            > text {
                font-size: 20px;
                font-weight: bold;
            }
        }
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
