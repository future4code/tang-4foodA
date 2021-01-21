import React,{useContext} from 'react'
import SearchBar from "../../Components/SearchBar/SearchBar"
import Header from "../../Components/Header/index"
import GlobalStateContext from "../../Global/GlobalStateContext";
import useStyles from './styles'

export default function SearchPage() {

    const {states, setters} = useContext(GlobalStateContext)
    const classes = useStyles()

    return (
        <div>
            <Header pageName={"Busca"}/>
            <SearchBar onclick={"off"}/>
            {states.searchInput === ""? <p className={classes.searchPlaceholder}>Busque por nome de Restaurante</p> 
            : states.searchInput }
        </div>
    )
}
