import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";


export const ContainerFormAddress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
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
  width: 20.5rem;
`

export const CampoText = styled.div`
 margin: 1rem;
`

export const InputArea = styled(TextField)`
  width: 20.5rem;
  height: 3.5rem;
`
