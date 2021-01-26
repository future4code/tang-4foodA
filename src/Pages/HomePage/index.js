import React,{ useContext} from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/index.js"
import SearchBar from "../../Components/SearchBar/SearchBar"
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante"
import FeedMenu from "../../Components/FeedMenu/FeedMenu"
import FooterMenu from "../../Components/FooterMenu/index"
import PedidoEmAndamento from "../../Components/PedidoEmAndamento/index"
import GlobalStateContext from "../../Global/GlobalStateContext";
import HomeDiv from "./styles"

export default function HomePage() {
  
  const {states, setters, requests} = useContext(GlobalStateContext)
  const history = useHistory();

  if (!requests.listaDeRestaurantes.restaurants) {
    return <div>Loading...</div>
  }

  const filteredArray = requests.listaDeRestaurantes.restaurants.filter(e => {
    return e.category === states.filter
  })
 

  return (
    <HomeDiv>
      <Header button={"false"} pageName={'Ifuture'}/>
      <SearchBar/>
      <FeedMenu/>
      {states.filter === "" ? requests.listaDeRestaurantes.restaurants.map(e => {
          return <CardRestaurante  key={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping}/>
          }) 
        : filteredArray.map(e => {
          return <CardRestaurante  key={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping}/>
          }) }
      {/* ternário verificando se há pedido para renderizar */}
      {/* <PedidoEmAndamento/> */}
      <FooterMenu page={"home"}/>
    </HomeDiv>
  );
}
