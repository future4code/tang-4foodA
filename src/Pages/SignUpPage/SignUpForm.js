import React from 'react';
import Buttons from '../../Components/Buttons'
import { Container, CampoText, InputArea, Title, ContainerSignUp, Image, ContainerInputPassword} from './styles';
import Logo from '../../assets/logo-future-eats-invert.png';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { IconButton, InputAdornment, InputLabel } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useForm from '../../CustomHooks/useForm';

export default function SignUpForm(props) {
    const [form, handleInput, resetState] = useForm({
        name:'',
        email:'',
        cpf:'',
        password: '',
      })

    const [values, setValues] = React.useState({
        password: '',
        confirmPassword:'',
        showPassword: false,
        showConfirmPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues(
            { ...values, showPassword: !values.showPassword });
      };
      
      const handleClickShowConfirmPassword = () => {
        setValues(
            { ...values, showConfirmPassword: !values.showConfirmPassword });
      };

      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <ContainerSignUp>
            <Image>
            <img src={Logo} alt="" />
            </Image>
            <Title>{props.texto}</Title>
            <form 
            // onSubmit={submitForm}
            >
                <Container>
                    <CampoText>
                        <InputArea
                            required
                            autoFocus
                            // value={form.name}
                            // onChange={handleInput}
                            name="street"
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
                            // value={form.email}
                            // onChange={handleInput}
                            name="number"
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
                            // value={form.cpf}
                            // onChange={handleInput}
                            name="complement"
                            label="CPF"
                            // defaultValue="Apt / Bloco"
                            placeholder="000.000.000-00"
                            variant="outlined"
                            type="number"
                        />
                    </CampoText>
                    <CampoText>
                        <ContainerInputPassword variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                            <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                // value={form.password}
                                // onChange={handleInput}
                                name="senha"
                                label="Senha"
                                // defaultValue="senha"
                                placeholder="Mínimo de 6 caracteres"
                                variant="outlined"
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }

                            />
                        </ContainerInputPassword>

                        
                        {/* <InputArea
                            required
                            // value={form.password}
                            // onChange={handleInput}
                            name="password"
                            label="Senha"
                            // defaultValue="Password"
                            placeholder="Mínimo de 6 caracteres"
                            variant="outlined"
                            type="password"
                        /> */}
                    </CampoText>
                    <CampoText>

                    <ContainerInputPassword variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Confirmar </InputLabel>
                            <OutlinedInput
                                required
                                id="outlined-adornment-password"
                                type={values.showConfirmPassword ? 'text' : 'password'}
                                value={values.confirmPassword}
                                // value={form.}
                                // onChange={handleInput}
                                name="senha"
                                label="Senha"
                                // defaultValue="senha"
                                placeholder="Confirme a senha anterior"
                                variant="outlined"
                                // type="password"
                                onChange={handleChange('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }

                            />
                        </ContainerInputPassword>

                        {/* <InputArea
                            required
                            // onChange={handleInput}
                            name="confirm"
                            label="Confirmar"
                            // defaultValue="cConfirmar
                            placeholder="Confirmar a senha anterior"
                            variant="outlined"
                            type="password"
                        /> */}
                    </CampoText>

                </Container>
                <Buttons
                    texto={"Criar"} />
            </form>
        </ContainerSignUp>
    )
}
