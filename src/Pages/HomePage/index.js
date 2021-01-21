import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToCartPage,
  goToProfilePage,
  goToRestaurantsPage,
  goToSearchPage,
} from "../../Routes/coordinators";
import Header from "../../Components/Header/index.js"
import SearchBar from "../../Components/SearchBar/SearchBar"

export default function HomePage() {
  const history = useHistory();
  


  return (
    <div>
      home / feed
      <Header pageName={'Ifuture'}/>
      <SearchBar/>
      <button onClick={() => goToCartPage(history)}>CARRINHO</button>
      <button onClick={() => goToRestaurantsPage(history)}>RESTAURANTES</button>
      <button onClick={() => goToProfilePage(history)}>
        PERFIL DO USUÁRIO
      </button>
    </div>
  );
}
