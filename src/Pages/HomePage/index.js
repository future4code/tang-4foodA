import React,{ useContext, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/index.js"
import SearchBar from "../../Components/SearchBar/SearchBar"
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante"
import FeedMenu from "../../Components/FeedMenu/FeedMenu"
import FooterMenu from "../../Components/FooterMenu/index"
import PedidoEmAndamento from "../../Components/PedidoEmAndamento/index"
import GlobalStateContext from "../../Global/GlobalStateContext";
import HomeDiv from "./styles"
import useRequestData from '../../CustomHooks/useRequestData';
import { BASE_URL } from '../../Constants/urls';
import axios from "axios";
import useProtectedPage from '../../CustomHooks/useProtectedPage'
import Loading from '../../Components/Loading/index'

export default function HomePage() {
  useProtectedPage()
  
  const {states, setters, requests} = useContext(GlobalStateContext)
  const [emAndamento, setEmAndamento]  = useState('')
  const history = useHistory();


 
  useEffect (() =>{

    const headers ={
      headers:{
          auth:localStorage.getItem('token')
      }
  }
    axios.get(`${BASE_URL}/active-order`, headers)    
    .then((response) =>{
      if(response.data){      
        setEmAndamento(response.data)
      }
    }) 
    .catch((error) =>{
    }) 
  
   }, [])

let nomeRestaurante = ''
let totalDoPedido = 0
if(emAndamento.order){
  nomeRestaurante = emAndamento.order.restaurantName
  totalDoPedido =  emAndamento.order.totalPrice
}

const listaDeRestaurantes = useRequestData(`${BASE_URL}/restaurants`, {})

  if (!listaDeRestaurantes.restaurants) {
    return <HomeDiv><Loading className="loading"/></HomeDiv>
  }

  const filteredArray = listaDeRestaurantes.restaurants.filter(e => {
    return e.category === states.filter
  })


  return (
    <HomeDiv>
      <Header button={"false"} pageName={'Ifuture'} />
      <SearchBar />
      <FeedMenu />
      {states.filter === "" ? listaDeRestaurantes.restaurants.map(e => {
        return <CardRestaurante key={e.id} id={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping} />
      })
        : filteredArray.map(e => {
          return <CardRestaurante key={e.id} id={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping} />
        })}

      {/* Verificando se há pedido para renderizar */}
      {emAndamento.order !== null && <PedidoEmAndamento
        restaurante={nomeRestaurante}
        valor={ totalDoPedido.toFixed(2) }
      />}
      <FooterMenu page={"home"} />
    </HomeDiv>
  );
}
