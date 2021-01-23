import React from 'react';
import Buttons from '../../Components/Buttons'
import { Container, CampoText, InputArea, ContainerEditProfile } from './styles';
import useForm from '../../CustomHooks/useForm'
import { useHistory } from "react-router-dom";
import { goToProfilePage } from '../../Routes/coordinators';

export default function EditProfileForm() {

    const history = useHistory();
    const [form, handleInput, resetState] = useForm({
        name: '',
        email: '',
        cpf: '',
    })


    const submitForm = (e) => {
        e.preventDefault()
        resetState() //resetando os inputs//
        console.log(form) //----------------------------------------------//
      }

    return (
        <ContainerEditProfile>
            <form onSubmit={ submitForm }>
                <Container>
                    <CampoText>
                        <InputArea
                            required
                            autoFocus
                            value={form.name}
                            onChange={handleInput}
                            name="name"
                            label="Nome"
                            placeholder="Nome e sobrenome"
                            // defaultValue="Nome"
                            variant="outlined"
                            type="text"
                        />
                    </CampoText>

                    <CampoText>
                        <InputArea
                            required
                            value={form.email}
                            onChange={handleInput}
                            name="email"
                            id="outlined-disabled"
                            label="E-mail"
                            // defaultValue="Email"
                            placeholder="email@email.com"
                            variant="outlined"
                            type="email"
                        />
                    </CampoText>

                    <CampoText>
                        <InputArea
                            required
                            value={form.cpf}
                            onChange={handleInput}
                            name="cpf"
                            label="CPF"
                            // defaultValue="Apt / Bloco"
                            placeholder="000.000.000-00"
                            variant="outlined"
                            type="number"
                        />
                    </CampoText>
                </Container>
                <Buttons
                    texto={"Salvar"} 
                    submeter = {() => goToProfilePage(history)}// trocar pela funçao de requisiçao na api. assim os inputs não estão controlados
                />
            </form>
        </ContainerEditProfile>
    )
}