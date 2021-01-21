import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goBack, goToHomePage } from "../../Routes/coordinators";
import FormLogin from "../../Components/FormLogin";
import Header from "../../Components/Header";
import Buttons from "../../Components/Button";
import InitialScreen from "../../Components/InitialScreen";

export default function LoginPage() {
  const history = useHistory();
  const [exibirLogin, setExibirLogin] = useState(false);

  useEffect(() => {
    if (!exibirLogin) {
      setTimeout(function () {
        setExibirLogin(true);
      }, 2000);
    }
  }, [exibirLogin]);

  return (
    <>
      {!exibirLogin && <InitialScreen />}
      {exibirLogin && <FormLogin texto={"Entrar"} />}
    </>
  );
}
