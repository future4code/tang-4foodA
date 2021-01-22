import React from 'react'
import GlobalStateContext from "../Global/GlobalStateContext";
import axios from "axios";
import useRequestData from '../CustomHooks/useRequestData'
import {useState, useEffect} from 'react'

export default function GlobalState(props) {
   
    const [carrinho, setCarrinho] = useState([])
    const [perfil, setPerfil] = useState({})
    const [restaurante, setRestaurante] = useState({})
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [token, setToken] = useState("")
    const [searchInput, setSearchInput] = useState("") /* Controla input da barra de pesquisa */
    const [filter, setFilter] = useState("") /* Controla o filtro do menu do feed */


    const states = {carrinho, perfil, restaurante, listaRestaurantes, token, searchInput, filter}
    const setters = {setCarrinho, setPerfil, setRestaurante, setListaRestaurantes, setToken, setSearchInput, setFilter}
    const requests = {}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
