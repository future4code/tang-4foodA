import styled from "styled-components";

export const PopUpContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`

export const PopUpCard = styled.div `
    width: calc(100% - 2rem);
    height: 13.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    background-color: #ffffff;
p {
    font-size: 1rem;
    letter-spacing: -0.39px;
    margin-bottom: 2rem;
}
select {
    border: solid 1px #b8b8b8;
    border-radius: 4px;
    width: calc(100% - 2rem);
    height: 3.5rem;
    font-size: 1rem;
    margin-bottom: 1.75rem;
}
`
export const ButtonContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-end;
button {
    padding: 6px 0;
    margin-right: 1rem;
    border: none;
    background: none;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #4f81a8;
}
`