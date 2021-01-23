import styled from "styled-components"


const Rectangle = styled.div `
    width: 100vw;
    height: 7.375rem;
    background-color: #e8222e;
    position: fixed;
    bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    .clock {
        width: 2rem;
        height: 2rem;
        color: white;
    }

    .infoDiv {
        width: 17rem;
    }

    .whiteP {
        width: 16rem;
        height: 1.125rem;
        margin: 0 0 0.125rem 1.5rem;
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #ffffff;
    }

    .nomeRestaurante {
        width: 16rem;
        height: 1.125rem;
        margin: 0.5rem 0 0.5rem 1.5rem;
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--black);
    }

    .subtotal {
        width: 16rem;
        height: 1.125rem;
        margin: 0.5rem 0 0 1.5rem;
        font-family: Montserrat;
        font-size: 1rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--black);
    }
`
export default Rectangle;
