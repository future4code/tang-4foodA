import React from "react";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, CampoText, InputArea} from './styles'
import { Title } from './styles'


export default function FormTextFields(props) {
  return (

    <div>
        <Title>{props.texto}</Title>
    <form noValidate autoComplete="off">
      <Container>
        <CampoText>
          <InputArea
            required
            id="outlined-required"
            label="Logadouro"
            defaultValue="Rua/Av."
            variant="outlined"
          />
        </CampoText>
        <CampoText>
          <InputArea
            required
            id="outlined-disabled"
            label="Número"
            defaultValue="Número"
            variant="outlined"
          />
        </CampoText>
        <CampoText>
          <InputArea
            id="outlined-required"
            label="Complemento"
            defaultValue="Apt / Bloco"
            variant="outlined"
          />
        </CampoText>
        <CampoText>
          <InputArea
            required
            id="outlined-required"
            label="Bairro"
            defaultValue="Bairro"
            variant="outlined"
          />
        </CampoText>
        <CampoText>
          <InputArea
            required
            id="outlined-required"
            label="Cidade"
            defaultValue="Cidade"
            variant="outlined"
          />
        </CampoText>
        <CampoText>
          <InputArea
            required
            id="outlined-required"
            label="Estado"
            defaultValue="Estado"
            variant="outlined"
          />
        </CampoText>
      </Container>
    </form>
    </div>
  );
}
