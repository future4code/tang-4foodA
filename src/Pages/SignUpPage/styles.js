import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";


export const ContainerSignUp = styled.div`

`
export const ContainerInputPassword = styled(FormControl)`
  width:20.5rem;
  `

export const Image = styled.div`
text-align: center;
margin:2.5rem 0 1.75rem 0;
`
export const Title = styled.h1`
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
    flex-direction: column; 
    align-items: center;
    margin: 0.5rem;
`

export const CampoText = styled.div`
    margin: 0.5rem;
`

export const InputArea = styled(TextField)`
    width: 20.5rem;
    height: 3.5rem;
`
