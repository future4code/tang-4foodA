import React, { useState } from "react";
import Buttons from "../Button";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import { Container, CampoText, InputArea } from "./styles";
import { Title } from "./styles";
import useForm from "../../CustomHooks/useForm";
import { Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Logo from "../../assets/logo-future-eats-invert.svg";
import { makeStyles } from "@material-ui/core/styles";

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
  const [showSenha, setShowSenha] = useState(false);
  const [form, handleInput, resetState] = useForm({
    email: "",
    senha: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    resetState(); //resetando os inputs//
    console.log(form); //----------------------------------------------//
  };
  const handleClickShowPassword = () => {
    setShowSenha(!showSenha);
  };

  const handleMouseDownPassword = () => {};

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={0} className={classes.main}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <Title>Entrar</Title>
        <form onSubmit={submitForm}>
          <Container>
            <CampoText>
              <InputArea
                required
                autoFocus
                value={form.email || undefined}
                onChange={handleInput}
                name="email"
                label="E-mail"
                placeholder="E-mail"
                variant="outlined"
                type="text"
              />
            </CampoText>
            <CampoText>
              <InputArea
                required
                value={form.senha || undefined}
                onChange={handleInput}
                name="senha"
                id="outlined-disabled"
                label="Senha"
                placeholder="Senha"
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
          <Buttons texto={"Entrar"} />
        </form>
      </Grid>
    </Grid>
  );
};

export default FormLogin;
