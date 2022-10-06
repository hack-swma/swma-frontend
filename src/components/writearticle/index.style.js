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
        margin-left: 1.5%;
        width: calc((100vw / 1240) * 30);
        height: calc((100vw / 1240) * 30);
    }
    > .place {
        margin-left: 5%;
        margin-top: -2.7%;
        font-size: calc((100vw / 1240) * 20);
    }
    > .persone {
        margin-left: 16%;
        margin-top: 1%;
        width: calc((100vw / 1240) * 35);
        height: calc((100vw / 1240) * 35);
    }
    > .num {
        position: absolute;
        left: 250px;
        top: 68px;
        font-size: 20px;
    }
    > .cal {
        position: absolute;
        width: 40px;
        height: 40px;
        left: 300px;
        top: 79px;
    }
    > .calen {
        position: absolute;
        margin-top: -4.7vh;
        margin-left: 27.2vw;
    }
    .lined {
        position: absolute;
        width: 85vw;
        height: 2px;
        background-color: #000000;
    }
`

export const writer = styled.div`
    margin-left: 73vw;
    > h2 {
        font-size: 30px;
        margin-top: -10vh;
    }
    > img {
        position: absolute;
        margin-left: 6.3vw;
        margin-top: -13vh;
        :hover {
            cursor: pointer;
        }
    }
`