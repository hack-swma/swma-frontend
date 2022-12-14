import styled from 'styled-components'

export const background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10%;
    position: relative;
    background-color: white;
`   
export const bigbox = styled.div`
    margin-top: 10vh;
    width: 90vw;
    height: 75vh;
    background-color: #EAEAEA;
    border-radius: 10px;
`
export const littlebox = styled.div`
    margin-top: 2vh;
    margin-left: 1vw;
    position: absolute;
    width: 88vw;
    height: 71vh;
    background-color: #FFFFFF;
    border-radius: 10px;
    > h1{
        margin-left: 1.5%;
        font-size: calc((100vw / 1240) * 27);
        > input{
            position: absolute;
            margin-left: 1.5%;
            width: calc((100vw / 1240) * 700);
            height: calc((100vh / 1080) * 60);
            align-content: start;
            font-size: calc((100vw / 1240) * 14);
            text-align: center;
        }
    }
    > .locate {
        position: absolute;
        margin-left: 1.5%;
        width: calc((100vw / 1240) * 30);
        height: calc((100vw / 1240) * 30);
    }
    > .insertplace {
        position: absolute;
        margin-left: 6%;
        width: calc((100vw / 1240) * 100);
        height: calc((100vh / 1080) * 60);
        font-size: calc((100vw / 1240) * 12);
        text-align: center;
    }
    > .place {
        position: absolute;
        margin-left: 5%;
        margin-top: 0%;
        font-size: calc((100vw / 1240) * 20);
    }
    > .persone {
        position: absolute;
        margin-left: 17%;
        margin-top: -0.3%;
        width: calc((100vw / 1240) * 35);
        height: calc((100vw / 1240) * 35);
    }
    > .num {
        position: absolute;
        margin-left: 22%;
        margin-top: 0%;
        width: calc((100vw / 1240) * 100);
        height: calc((100vh / 1080) * 60);
        font-size: calc((100vw / 1240) * 12);
        text-align: center;
    }
    > .cal {
        position: absolute;
        width: calc((100vw / 1240) * 32);
        height: calc((100vw / 1240) * 32);
        margin-left: 33%;
        margin-top: -0.3%;
    }
    > .wow {
        position: absolute;
        margin-top: 0.3%;
        margin-left: 38%;
        font-size: calc((100vw / 1240) * 15);
    }
    .lined {
        position: absolute;
        width: calc((100vw / 1240) * 1050);
        margin-left:1.8%;
        height: 2px;
        margin-top: 5%;
        background-color: #000000;
    }
    .comp {
        display: flex;
        margin-left: 82%;
        margin-top: -1.5%;
        width: 10vw;
        height: 7vh;
        border: 0px;
        border-radius: 10px;
        background-color: #597DFF;
        > text{
            margin: auto;
            color: white;
            font-size: calc((100vw / 1240) * 20);
        }
        :hover {
            cursor: pointer;
        }
    }
`

export const textfield = styled.div`
    margin-left: 22%;
    margin-top: 8%;
    width: calc((100vw / 1240) * 580);
    height: calc((100vw / 1240) * 220);
    font-size: calc((100vw / 1240) * 30);
    font-weight: bold;
    border: 1px;
    > h1 {
        margin-left: 1.5%;
        font-size: calc((100vw / 1240) * 20);
    }
    > input {
        width: 100%;
        height: 95%;
    }
`