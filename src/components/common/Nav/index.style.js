import styled from 'styled-components'
export const background = styled.div`
    width: 100vw;
    height: 75px;
    display: flex;
    border-bottom: 3px solid black;
    border-color: black;
    > h1 {
        position: absolute;
        margin-left: 1vw;
        :hover {
            cursor: pointer;
        }
    }
    > h2 {
        position: absolute;
        margin-bottom: 30px;
        margin-left: 90vw;
        :hover {
            cursor: pointer;
        }
    }
`
export const normalText = styled.span`
    position: absolute;
    right: 13vw;
    top: 25px;
    cursor: pointer;
`