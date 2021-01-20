import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToSignUpPage } from "../../Routes/coordinators";
import InitialScreen from "../../Components/InitialScreen";
import Button from '@material-ui/core/Button';

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
      {exibirLogin && (
        <div>
          login
          <Button  variant="contained" color="primary" onClick={() => goToSignUpPage(history)}>CADASTRO</Button>
          <button onClick={() => goToHomePage(history)}>HomePage</button>
        </div>
      )}
    </>
  );
}
