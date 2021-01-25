import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtectedPage = () => {
  const history = useHistory();

//Assim que a pagina abre realiza a verificação
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/"); //Caso não esteja autorizado retorna a LoginPage
    }
  }, [history]);
};

export default useProtectedPage;