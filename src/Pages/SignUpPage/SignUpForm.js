import React from 'react';
import Buttons from '../../Components/Buttons'
import { Container, CampoText, InputArea, Title, ContainerSignUp, Image, AlertPassword } from './styles';
import Logo from '../../assets/logo-future-eats-invert.png';
import { IconButton, InputAdornment, InputLabel } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useForm from '../../CustomHooks/useForm';
import { useHistory } from "react-router-dom";
import { signUp } from '../../Service/user';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function SignUpForm(props) {
    const [ showSenha, setShowSenha ] = React.useState(false)
    const [ showAlert, setShowAlert ] = React.useState (false)
    const [ loading, setLoading ] = React.useState(false)

    const history = useHistory();

    const [form, handleInput ] = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        passwordConfirm: '',
    })

    const handleClickShowPassword = () => {
        setShowSenha(!showSenha);
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const submitForm = (e) => {
        e.preventDefault()
        if(form.password !== form.passwordConfirm){
            setShowAlert(!showAlert)
        }
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }
        signUp(body, history, setLoading)// funçao está em service/user
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
                            inputProps={{ pattern: "[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}" }}
                            placeholder="000.000.000-00"
                            variant="outlined"
                            // type="number"
                        />
                    </CampoText>

                    <CampoText>
                        <InputArea
                            required
                            value={form.password || undefined}
                            onChange={handleInput}
                            inputProps={{ pattern: "(.){6,}" }}
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
                            inputProps={{ pattern: "(.){6,}" }}
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
                {showAlert && <AlertPassword>Deve ser a mesma que a anterior</AlertPassword>}
                <Buttons
                    texto={"Criar"} 
                    // texto={ loading ? <CircularProgress color="secondary" size="24" /> : 'criar' } 
                />
            </form>
        </ContainerSignUp>
    )
}
