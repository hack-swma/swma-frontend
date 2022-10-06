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
    }
    > .locate {
        position: absolute;
        margin-left: 1.5%;
        width: calc((100vw / 1240) * 30);
        height: calc((100vw / 1240) * 30);
    }
    > .place {
        position: absolute;
        margin-left: 5%;
        margin-top: 0%;
        font-size: calc((100vw / 1240) * 20);
    }
    > .persone {
        position: absolute;
        margin-left: 16%;
        margin-top: -0.3%;
        width: calc((100vw / 1240) * 35);
        height: calc((100vw / 1240) * 35);
    }
    > .num {
        position: absolute;
        margin-left: 19.5%;
        margin-top: 0%;
        font-size: calc((100vw / 1240) * 20);
    }
    > .cal {
        position: absolute;
        width: calc((100vw / 1240) * 32);
        height: calc((100vw / 1240) * 32);
        margin-left: 25%;
        margin-top: -0.3%;
    }
    > .calen {
        position: absolute;
        margin-top: 0%;
        margin-left: 28.4%;
        font-size: calc((100vw / 1240) * 20);
    }
    .lined {
        position: absolute;
        width: calc((100vw / 1240) * 1050);
        margin-left:1.8%;
        height: 2px;
        margin-top: 5%;
        background-color: #000000;
    }
    > .letchat {
        display: flex;
        margin-left: 73%;
        margin-top: -8%;
        width: 20vw;
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

export const writer = styled.div`
margin-top: -5%;
margin-left:80%;
position: absolute;
background-color: #FFFFFF;
border-radius: 10px;
    > h2 {
        font-size: calc((100vw / 1240) * 30);
    }
    > img {
        position: absolute;
        width: calc((100vw / 1240) * 80);
        height: calc((100vw / 1240) * 80);
        margin-left: 120%;
        margin-top: -100%;
        :hover {
            cursor: pointer;
        }
    }
`
export const textfield = styled.div`
    margin-left: 22%;
    margin-top: 13.5%;
    width: calc((100vw / 1240) * 580);
    height: calc((100vw / 1240) * 220);
    font-size: calc((100vw / 1240) * 30);
    font-weight: bold;
`