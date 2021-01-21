import React,{ useContext} from "react";
import { useHistory } from "react-router-dom";
import {
  goToCartPage,
  goToProfilePage,
  goToRestaurantsPage,
  goToSearchPage,
} from "../../Routes/coordinators";
import Header from "../../Components/Header/index.js"
import SearchBar from "../../Components/SearchBar/SearchBar"
import GlobalStateContext from "../../Global/GlobalStateContext";

export default function HomePage() {
  
  const {states, setters} = useContext(GlobalStateContext)
  const history = useHistory();
  


  return (
    <div>
      <Header button={"false"} pageName={'Ifuture'}/>
      <SearchBar/>
      <button onClick={() => goToCartPage(history)}>CARRINHO</button>
      <button onClick={() => goToRestaurantsPage(history)}>RESTAURANTES</button>
      <button onClick={() => goToProfilePage(history)}>
        PERFIL DO USUÁRIO
      </button>
    </div>
  );
}
