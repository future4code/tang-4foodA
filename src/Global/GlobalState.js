import React from 'react'
import GlobalStateContext from "../Global/GlobalStateContext";
import axios from "axios";
import useRequestData from '../CustomHooks/useRequestData'
import {useState, useEffect} from 'react'
import {BASE_URL} from '../Constants/urls.js'

export default function GlobalState(props) {
   
    const [carrinho, setCarrinho] = useState([])
    const [perfil, setPerfil] = useState({})
    const [restaurante, setRestaurante] = useState({})
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [token, setToken] = useState("")
    const [searchInput, setSearchInput] = useState("") /* Controla input da barra de pesquisa */
    const [filter, setFilter] = useState("") /* Controla o filtro do menu do feed */
    const [popUp, setPopUp] = useState(false)
    // const token = localStorage.getItem('token')
    const tokenTeste = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkN1QVc2SjQ1bjhpYW9ESVJXT202IiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlJ1YSBkb3MgY2FuYWxoYSwgMTIzNCwgMTIzIC0gT2xpbmRhIiwiaWF0IjoxNjExNjg0MTg0fQ.nRWQ2d5GRx8qGHzMNrAUaWY-_fzbgSxDBhve5hTLnLg"

    const listaDeRestaurantes = useRequestData(`${BASE_URL}/restaurants`, {headers: {"auth": `${tokenTeste}`, "Content-Type": "application/json"}}, {})

    const states = {carrinho, perfil, restaurante, listaRestaurantes, token, searchInput, filter, popUp}
    const setters = {setCarrinho, setPerfil, setRestaurante, setListaRestaurantes, setToken, setSearchInput, setFilter, setPopUp}
    const requests = {listaDeRestaurantes}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
