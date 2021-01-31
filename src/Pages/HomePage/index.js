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

export default function HomePage() {

  
  const {states, setters, requests} = useContext(GlobalStateContext)
  const [emAndamento, setEmAndamento]  =useState()
  const history = useHistory();


  // const pedidoEmAndamento = useRequestData(`${BASE_URL}/active-order`, {})
  // setEmAndamento(pedidoEmAndamento)
 
 
  useEffect (() =>{



    const headers ={
      headers:{
          auth:localStorage.getItem('token')
      }
  }
    axios.get(`${BASE_URL}/active-order`, headers)    
    .then((response) =>{
      console.log(response.data);//----------------------------------
      if(response.data){      
        console.log(response.data);
        setEmAndamento(response.data)
      }
    }) 
    .catch((error) =>{
      console.log(error);
    }) 
  
   }, [])

let nomeRestaurante = ''
let totalDoPedido = 0
if(emAndamento){
  nomeRestaurante = emAndamento.order.restaurantName
  totalDoPedido =  emAndamento.order.totalPrice
}
console.log(nomeRestaurante);
console.log(totalDoPedido);
// const nomeRestaurante = emAndamento.order.restaurantName
   console.log(emAndamento);

const listaDeRestaurantes = useRequestData(`${BASE_URL}/restaurants`, {})

  if (!listaDeRestaurantes.restaurants) {
    return <div>Loading...</div>
  }

  const filteredArray = listaDeRestaurantes.restaurants.filter(e => {
    return e.category === states.filter
  })


  return (
    <HomeDiv>
      <Header button={"false"} pageName={'Ifuture'}/>
      <SearchBar/>
      <FeedMenu/>
      {states.filter === "" ? listaDeRestaurantes.restaurants.map(e => {
          return <CardRestaurante  key={e.id}  id={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping}/>
          }) 
        : filteredArray.map(e => {
          return <CardRestaurante  key={e.id} id={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping}/>
          }) }

      {/* ternário verificando se há pedido para renderizar */}
      {emAndamento !== null && <PedidoEmAndamento
      restaurante = {nomeRestaurante}
      valor = {totalDoPedido}
      /> }
      <FooterMenu page={"home"}/>
    </HomeDiv>
  );
}
