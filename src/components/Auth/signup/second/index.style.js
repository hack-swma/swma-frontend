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
        margin-top: 3%;
    }
    > h2 {
        position: absolute;
        font-size: 30px;
        margin-lefT: 54vw;
        margin-top: 0%;
    }
    > .name {
        position: absolute;
        margin-left: 45.4vw;
        margin-top: 3%;
        color: #AFAFAF;
        font-size: calc((100vw / 1240) * 15);
    }
    > .named {
        position: absolute;
        margin-top: 5.5%;
        margin-left: 45.4vw;
        width:  20%;
        height: 6%;
        font-size: 13px;
        padding-left: 10px;
    }
    > .birthday {
        position: absolute;
        margin-left: 45.4vw;
        margin-top: 10%;
        color: #AFAFAF;
        font-size: calc((100vw / 1240) * 15);
    }
    > .birthdaye {
        position: absolute;
        margin-left: 45.4vw;
        margin-top: 12.5%;
        width:  calc((100vw / 1240) * 120);
        height: calc((100vh / 1240) * 80);
        font-size: 13px;
        padding-left: 10px;
    }
    > .gender {
        position: absolute;
        margin-left: 57vw;
        margin-top: 10%;
        color: #AFAFAF;
        font-size: calc((100vw / 1240) * 15);
    }
    > .gendered {
        position: absolute;
        margin-left: 57vw;
        margin-top: 13.5%;
        width: 5%;
        > .genderone{
            > input[type=radio] {
                position: absolute;
                margin-left: 0vw;
                border: 0px;
                width: 20px;
                height: 20px;
            }
            > span {
                position: absolute;
                display: flex;
                margin-left: 1.8vw;
                font-size: 20px;
                font-weight: bold;
            }
        }
        > .gendertwo {
            margin-left: 100%;
            > input[type=radio] {
                position: absolute;
                border: 0px;
                width: 20px;
                height: 20px;
            }
            > span {
                position: absolute;
                display: flex;
                margin-left: 140%;
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
    .language {
        position: absolute;
        margin-left: 45.4vw;
        margin-top: 17%;
        color: #AFAFAF;
    }
    >  .checkboxes {
        position: absolute;
        margin-left: 45.2vw;
        margin-top: 19%;
        width: calc((100vw / 1240) * 130);
        > label {
            > input[type=checkbox] {
                width: 20px;
                height: 15px;
            }
            > text {
                fposition: absolute;
                margin-left: 0%;
                font-size: 10px;
                font-weight: bold;
            }
        }
    }
    > .region {
        position: absolute;
        margin-left: 57vw;
        margin-top: 17%;
        color: #AFAFAF;
    }
    > .selectc {
        position: absolute;
        margin-left: 57vw;
        margin-top: 19.5%;
        width: 8%;
        height: 4%;
    }
    .nextb {
        position: absolute;
        margin-top: 28%;
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
