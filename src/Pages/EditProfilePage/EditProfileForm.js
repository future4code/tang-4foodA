import React from 'react';
import Buttons from '../../Components/Buttons'
import { Container, CampoText, InputArea, ContainerEditProfile } from './styles';
import useForm from '../../CustomHooks/useForm'
import { useHistory } from "react-router-dom";
import { editProfile } from '../../Service/editUser';
import { CircularProgress } from '@material-ui/core';

export default function EditProfileForm() {
    const [loading, setLoading] = React.useState(false)
    const [form, handleInput, resetState] = useForm({
        name: '',
        email: '',
        cpf: '',
    })
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault()
        resetState() //resetando os inputs//
        editProfile(form, history, setLoading)//funçao está em service/user
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
                            inputProps={{ pattern: "[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}" }}
                            placeholder="000.000.000-00"
                            variant="outlined"
                            // type="number"
                        />
                    </CampoText>
                </Container>
                <Buttons
                    
                    texto={ loading ? <CircularProgress color="secondary" size={24}/> : 'Salvar' } 
                />
            </form>
        </ContainerEditProfile>
    )
}