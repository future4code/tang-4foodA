import React,{ useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { RestaurantInfo, MealsContainer, TypeTitle } from './styles';
import GlobalStateContext from "../../Global/GlobalStateContext";
import useRequestData from '../../CustomHooks/useRequestData';
import { BASE_URL } from '../../Constants/urls';
import axios from 'axios';


export default function RestaurantPage() {
    const {states, setters} = useContext(GlobalStateContext)
    const [categorias, setCategorias] = useState([])

    const history = useHistory();
    const params = useParams()

    const data = useRequestData(`${BASE_URL}/restaurants/${params.id}`,{headers: {"auth": localStorage.getItem('token')}},{})
    
    useEffect(() => {
        setters.setRestaurante(data.restaurant)

        if (states.restaurante && states.restaurante.products) {
            let arrayMap = states.restaurante.products.map((item) => {
                return item.category
            })
            const uniqueSet = new Set(arrayMap)
            arrayMap = [...uniqueSet]
            setCategorias(arrayMap)
        }

    }, [data, states.restaurante])
    
    console.log(states.restaurante)
    console.log(categorias)

    const renderRestaurantInfo = () => {
        const frete = Number(states.restaurante.shipping).toFixed(2)
        return (
            <RestaurantInfo>
                <img src={states.restaurante.logoUrl} alt={`${states.restaurante.name} logo`} />
                <h2>{states.restaurante.name}</h2>
                <p>{states.restaurante.category}</p>
                <div>
                    <span>{`${states.restaurante.deliveryTime} min`}</span>
                    <span> {`Frete R$${frete}`}</span>
                </div>
                <p>{states.restaurante.address}</p>
            </RestaurantInfo>
        )
    }
    
    const renderCategory = categorias.map(item => {
        return (
            <MealsContainer>
                <TypeTitle>{item}</TypeTitle>
                {/* map para renderizar pratos da categoria */}
                <ItemCard/>
            </MealsContainer>
        )           
    })

    return (
        <div>
            <Header button='true' pageName='Restaurante'/>

            {states.restaurante ? renderRestaurantInfo() : <p>Carregando...</p> }

            {states.restaurante && states.restaurante.products ? renderCategory : null }

        </div>
    )
}
