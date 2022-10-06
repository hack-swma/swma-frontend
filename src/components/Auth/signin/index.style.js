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
        margin-left: 50%;
    > h1 {
        margin-top: 42px;
        font-size: calc((100vw / 1240) * 27);
    }
    > .idp {
        margin-top: 50px;
        color: #AFAFAF;
    }
    > .id {
        width: 16vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > .pwp {
        margin-top: 35px;
        color: #AFAFAF;
    }
    > .pw {
        width: 16vw;
        height: 7vh;
        font-size: 15px;
        padding-left: 15px;
    }
    > .log{
        display: flex;
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
        :hover {
            cursor: pointer;
        }
    }
    > .sign {
        display: flex;
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
        font-size: calc((100vw / 1240) * 35);
        :hover {
            cursor: pointer;
        }
    }
    > p {
        margin-top: 65%;
        margin-left: 40px;
        margin-right: 40px;
        color: white;
        font-size: calc((100vw /1240) * 35);
        font-weight: bold;
    }
`