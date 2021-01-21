import { Search } from '@material-ui/icons'
import React from 'react'
import SearchBar from "../../Components/SearchBar/SearchBar"
import Header from "../../Components/Header/index"

export default function index() {
    return (
        <div>
            <Header pageName={"Busca"}/>
            <SearchBar onclick={"off"}/>
        </div>
    )
}
