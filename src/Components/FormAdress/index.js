import React from "react";
import Buttons from "../Buttons";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import { Container, CampoText, InputArea} from './styles';
import { Title } from './styles';
import useForm from '../../CustomHooks/useForm'

export default function FormAdress(props) {
  const [form, handleInput, resetState] = useForm({
    street:'',
    number:'',
    neighbourhood:'',
    city: '',
    state:'',
    complement:''
  })

  const submitForm = (e) => {
    e.preventDefault()
    resetState() //resetando os inputs//
    console.log(form) //----------------------------------------------//
  }

  return (
    <div>
      <Title>{props.texto}</Title>
      <form onSubmit={submitForm}>
        <Container>
          <CampoText>
            <InputArea
              required
              autoFocus
              value={form.street}
              onChange={handleInput}
              name="street"
              label="Rua/Av."
              placeholder="Rua/Av."
              // defaultValue="Rua/Av."
              variant="outlined"
              type="text"
            />
          </CampoText>
          <CampoText>
            <InputArea
            required
              value={form.number}
              onChange={handleInput}
              name="number"
              id="outlined-disabled"
              label="Número"
              // defaultValue="Número"
              placeholder="Número"
              variant="outlined"
              type="number"   
            />
          </CampoText>
          <CampoText>
            <InputArea
              value={form.complement}
              onChange={handleInput}
              name="complement"
              label="Complemento"
              // defaultValue="Apt / Bloco"
              placeholder="Apt / Bloco"
              variant="outlined"
              type="text"
            />
          </CampoText>
          <CampoText>
            <InputArea
              required
              value={form.neighbourhood}
              onChange={handleInput}
              name="neighbourhood"
              label="Bairro"
              // defaultValue="Bairro"
              placeholder="Bairro"
              variant="outlined"
              type="text"
            />
          </CampoText>
          <CampoText>
            <InputArea
              required
              value={form.city}
              onChange={handleInput}
              name="city"
              label="Cidade"
              // defaultValue="Cidade"
              placeholder="Cidade"
              variant="outlined"
              type="text"
            />
          </CampoText>
          <CampoText>
            <InputArea
              required
              value={form.state}
              onChange={handleInput}
              name="state"
              label="Estado"
              // defaultValue="Estado"
              placeholder="Estado"
              variant="outlined"
              type="text"
            />
          </CampoText>
        </Container>
        <Buttons 
        texto={"salvar"}/>
      </form>
    </div>
  );
}
