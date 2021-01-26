import styled from 'styled-components'

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    height: 2.75rem;
h3{
    flex-grow: 1;
    text-align: center;
    align-self: center;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.39px;
}
`

export const BackButton = styled.button `
    position: absolute;
    margin-top: -35px;
    margin-left: 1rem;
    border: none;
    background: none;
`