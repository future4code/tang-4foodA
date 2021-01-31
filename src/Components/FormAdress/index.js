import React from "react";
import Buttons from "../Buttons";
import { Container, CampoText, InputArea, ContainerFormAddress } from './styles';
import { Title } from './styles';
import useForm from '../../CustomHooks/useForm'
import { useHistory } from "react-router-dom";
import { addAddress } from "../../Service/user";
import { CircularProgress } from "@material-ui/core";


export default function FormAdress(props) {
  const [loading, setLoading] = React.useState(false)  
  const [form, handleInput, resetState] = useForm({
    street:'',
    number:'',
    neighbourhood:'',
    city: '',
    state:'',
    complement:''
  })
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault()
    resetState() //resetando os inputs//
    addAddress(form, history, setLoading)//função está em service/user
  }

  return (
    <ContainerFormAddress>
      <Title>{props.texto}</Title>
      <form onSubmit = { submitForm }>
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
              placeholder="Estado"
              variant="outlined"
              type="text"
            />
          </CampoText>
          
        </Container>
        <Buttons 
        
        texto={ loading ? <CircularProgress color="secondary" size={24}/> : 'Salvar' } 
        submeter = {submitForm} 
        /> 
      </form>
    </ContainerFormAddress>
  );
}
