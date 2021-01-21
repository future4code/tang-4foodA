import styled from "styled-components";

export const CartPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
`


export const ContainerCarrinho = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 1rem;
`

export const ContainerEndereco = styled.div `
    background-color: #eeeeee;
    padding: 0.5rem;
p {
    margin: 0.5rem;
    color: #b8b8b8;
    font-size: 1rem;
    letter-spacing: -0.39px;
}
p:nth-child(2) {
    color: black;
    font-weight: 500;
}
`

export const MensagemVazio = styled.div `
    text-align: center;
    margin-top: 1.25rem;
    margin-bottom: 3rem;
    font-weight: 500;
`

export const SubtotalContainer = styled.div `
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
span {
    display: block;
    font-size: 1rem;
    letter-spacing: -0.39px;
    font-weight: 500;
}
span:nth-child(2) {
    color: #e8222e;
    font-weight: bold;
    font-size: 1.125rem;
    letter-spacing: -0.43px;
    text-align: right;
    margin-top: 0.875rem;   
}
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    margin-bottom: 1rem;
p {
    border-bottom: 1px solid black;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    letter-spacing: -0.39px;
    font-weight: 500;
}
`

