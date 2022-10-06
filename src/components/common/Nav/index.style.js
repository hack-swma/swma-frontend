import styled from 'styled-components'
export const background = styled.div`
    width: 100vw;
    height: 75px;
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
        margin-left: 90vw;
        :hover {
            cursor: pointer;
        }
    }
`
