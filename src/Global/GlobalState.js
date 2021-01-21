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
    const [headerButton, setHeaderButton] = useState(true) /* Renderiza botão de voltar no header */
    const [searchInput, setSearchInput] = useState("") /* Controla input da barra de pesquisa */


    const states = {carrinho, perfil, restaurante, listaRestaurantes, token, headerButton, searchInput}
    const setters = {setCarrinho, setPerfil, setRestaurante, setListaRestaurantes, setToken, setHeaderButton, setSearchInput}
    const requests = {}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
