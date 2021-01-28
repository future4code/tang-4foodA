import styled from "styled-components";

export const CardContainer = styled.div `
    display: flex;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    height: 7rem;
    margin-bottom: 0.5rem;
img {
    width: 6rem;
    height: calc(7rem + 2px);
    margin-top: -1px;
    margin-right: 1rem;
    margin-bottom:-1px;
    margin-left:-1px;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
}
`

export const InfoContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
p {
    margin: 0;
    height: 1.875rem;
    font-size: 0.75rem;
    letter-spacing: -0.29px;
    color: #b8b8b8;
}
` 

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 2.75rem;
h3 {
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #e8222e;
    font-weight: 500;
}
button {
    height: 2rem;
    width: 2rem;
    border: none;
    background: none;
    border-radius: 0 8px 0 8px;
    border: solid 1px #e8222e;
    color: #e8222e;
    font-weight: 500;
    font-size: 1rem;
    margin-top: -1px;
    margin-right: -1px;
}
` 

export const FooterContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 2.375rem;

span {
    letter-spacing: -0.39px;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
}
` 

export const AddBtn = styled.button `
    height: 2rem;
    width: 5.625rem;
    border: none;
    background: none;
    border-radius: 8px 0 8px 0;
    border: solid 1px black;
    font-weight: 500;
    font-size: 0.75rem;
    margin-right: -1px;
    margin-bottom: -1px;
`

export const RemoveBtn = styled.button `
    height: 2rem;
    width: 5.625rem;
    border: none;
    background: none;
    border-radius: 8px 0 8px 0;
    border: solid 1px #e8222e;
    color: #e8222e;
    font-weight: 500;
    font-size: 0.75rem;
    margin-right: -1px;
    margin-bottom: -1px;
`
