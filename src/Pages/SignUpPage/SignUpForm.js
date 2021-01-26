import React from 'react';
import axios from 'axios';
import Buttons from '../../Components/Buttons'
import { Container, CampoText, InputArea, Title, ContainerSignUp, Image } from './styles';
import Logo from '../../assets/logo-future-eats-invert.png';
import { IconButton, InputAdornment, InputLabel } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useForm from '../../CustomHooks/useForm';
import { useHistory } from "react-router-dom";
import { goToAddAddressPage } from '../../Routes/coordinators';
import { signUp } from '../../Service/user';



export default function SignUpForm(props) {
    const history = useHistory();
    const [form, handleInput, resetState] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        passwordConfirm: '',
    })


    const [showSenha, setShowSenha] = React.useState(false);


    const handleClickShowPassword = () => {
        setShowSenha(!showSenha);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitForm = (e) => {
        e.preventDefault()
       
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }
        console.log(body);//-------------------------------------------------//
        signUp(body, history)
        
        // axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/signup', body)
        // .then((response) =>{
        //     console.log(response.data.token);// token da criação do novo usuario
        // })
        // .catch((error) => {
        //     console.log(error);
        // })
      }

    return (
        <ContainerSignUp>
            <Image>
                <img src={ Logo } alt="" />
            </Image>
            <Title>{ props.texto }</Title>
            <form onSubmit={ submitForm }>
                <Container>
                    <CampoText>
                        <InputArea
                            required
                            autoFocus
                            value={ form.name }
                            onChange={ handleInput }
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
                            value={ form.email }
                            onChange={ handleInput }
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
                            value={ form.cpf }
                            onChange={ handleInput }
                            name="cpf"
                            label="CPF"
                            // defaultValue="Apt / Bloco"
                            placeholder="000.000.000-00"
                            variant="outlined"
                            type="number"
                        />
                    </CampoText>

                    <CampoText>
                        <InputArea
                            required
                            value={form.password || undefined}
                            onChange={handleInput}
                            // inputProps={{ pattern: "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" }}
                            name="password"
                            id="outlined-disabled"
                            label="Senha"
                            placeholder="Mínimo de 6 caracteres"
                            variant="outlined"
                            type={showSenha ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showSenha ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </CampoText>

                    <CampoText>
                        <InputArea
                            required
                            value={form.passwordConfirm || undefined}
                            onChange={handleInput}
                            name="passwordConfirm"
                            id="outlined-disabled"
                            label="Confirmação"
                            placeholder="Mínimo de 6 caracteres"
                            variant="outlined"
                            type={showSenha ? "text" : "password"}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showSenha ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </CampoText>

                </Container>
                <Buttons
                    texto={"Criar"} 
                    submeter = {submitForm}
                />
            </form>
        </ContainerSignUp>
    )
}
