import React, { useState, useRef, useContext } from "react";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Form } from "@unform/web";
import api from "../../Service/api";
import { goToHomePage, goToSignUpPage } from "../../Routes/coordinators";
import { useHistory } from "react-router-dom";
import {
  Container,
  CampoText,
  InputArea,
  ContainerButton,
  CampoButton,
} from "./styles";
import { Title } from "./styles";
import useForm from "../../CustomHooks/useForm";
import Logo from "../../assets/logo-future-eats-invert.svg";
import { toast } from "react-toastify";
import GlobalStateContext from "../../Global/GlobalStateContext";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
const FormLogin = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setters } = useContext(GlobalStateContext);
  const formRef = useRef(null);
  const [showSenha, setShowSenha] = useState(false);
  const [form, handleInput, resetState, handleFormErrors] = useForm({
    email: undefined,
    password: undefined,
    errors: {
      email: null,
      password: null,
    },
  });

  const getValidationErrors = (err) => {
    const validationErrors = {};

    err.inner.forEach((error) => {
      validationErrors[error.path] = error.message;
    });

    return validationErrors;
  };

  const submitForm = async () => {
    try {
      handleFormErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Precisamos de um email válido.")
          .required("O e-mail é obrigatório."),
        password: Yup.string()
          .min(6, "Mínimo de 6 dígitos.")
          .required("A senha é obrigatória."),
      });

      await schema.validate(form, {
        abortEarly: false,
      });

      const response = await api.post("/login", form);

      window.localStorage.setItem("token", response.data.token);
      setters.setPerfil(response.data.user);

      goToHomePage(history);
    } catch (err) {
      if (err.inner) {
        const errors = getValidationErrors(err);
        handleFormErrors(errors);
        return;
      }
      if (err.response) {
        if (err.response.data.message === "Usuário não encontrado") {
          toast.error("Usuário não cadastrado");

          goToSignUpPage(history);
        }
        if (err.response.data.message === "Senha incorreta") {
          toast.error("Senha incorreta");
        }
        return;
      }

      throw err;
    }
  };

  const handleClickShowPassword = () => {
    setShowSenha(!showSenha);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs="auto" className={classes.main}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <Title>Entrar</Title>
        <Form onSubmit={submitForm} ref={formRef}>
          <Container>
            <CampoText>
              <InputArea
                required
                autoFocus
                value={form.email}
                onChange={handleInput}
                name="email"
                label="E-mail"
                placeholder="E-mail"
                variant="outlined"
                type="text"
                error={!!form.errors.email}
                helperText={form.errors.email}
              />
            </CampoText>
            <CampoText>
              <InputArea
                required
                value={form.senha}
                onChange={handleInput}
                name="password"
                id="outlined-disabled"
                label="Senha"
                placeholder="Senha"
                variant="outlined"
                type={showSenha ? "text" : "password"}
                error={!!form.errors.password}
                helperText={form.errors.password}
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
          <CampoButton>
            <ContainerButton type="submit" color="primary" variant="contained">
              Entrar
            </ContainerButton>
          </CampoButton>
        </Form>
      </Grid>
    </Grid>
  );
};

export default FormLogin;
