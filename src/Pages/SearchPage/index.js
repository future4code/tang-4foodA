import React,{useContext} from 'react'
import SearchBar from "../../Components/SearchBar/SearchBar"
import Header from "../../Components/Header/index"
import GlobalStateContext from "../../Global/GlobalStateContext";
import useStyles from './styles'
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante"
import useProtectedPage from '../../CustomHooks/useProtectedPage';

export default function SearchPage() {
  useProtectedPage()
    const {states, setters, requests} = useContext(GlobalStateContext)
    const classes = useStyles()
   
    if (!requests.listaDeRestaurantes.restaurants) {
      return <div>Loading...</div>
    }

      const filteredArray = requests.listaDeRestaurantes.restaurants.filter(e => {
        return e.name.toLowerCase().includes(states.searchInput.toLowerCase()) || e.category.toLowerCase().includes(states.searchInput.toLowerCase())
      })

      const arrayMap = filteredArray.map(e => {
        return <CardRestaurante key={e.id} id={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping}/>
        }) 
     

    return (
        <div>
            <Header pageName={"Busca"}/>
            <SearchBar onclick={"off"}/>
            {states.searchInput === "" ? <p className={classes.searchPlaceholder}>Busque por nome de Restaurante</p>  
                : (arrayMap[0]? arrayMap : <p className={classes.searchPlaceholder}>Não encontramos :(</p>) }
        </div>
    )
}
