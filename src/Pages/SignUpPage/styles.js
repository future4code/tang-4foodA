import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";


export const ContainerSignUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    max-width: 100vw;
`

export const Image = styled.div`
    text-align: center;
    margin: 1.5rem 0 1.75rem 0;
`
export const Title = styled.h3`
    font-family: Roboto;
    text-align: center;
    font-size: 1rem;
    /* font-weight: normal; */
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`

export const Container = styled.div`
    display: flex;
    width: 20.5rem;
    flex-direction: column; 
    align-items: center;
`

export const CampoText = styled.div`
    margin:0.5rem 0;
`

export const InputArea = styled(TextField)`
    width: 20.5rem;
    height: 3.5rem;
`

export const AlertPassword = styled.p`
    color:#e02020;
    font-size: 0.75rem;
    letter-spacing: -0.29px;
    margin:0 0 0.75rem 1rem;
`