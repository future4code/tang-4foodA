import React,{ useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { RestaurantInfo, MealsContainer, TypeTitle } from './styles';
import GlobalStateContext from "../../Global/GlobalStateContext";
import useRequestData from '../../CustomHooks/useRequestData';
import { BASE_URL } from '../../Constants/urls';
import PopUpQuantidade from '../../Components/PopUpQuantidade';
import axios from 'axios'
import useProtectedPage from '../../CustomHooks/useProtectedPage'

export default function RestaurantPage() {
    useProtectedPage()
    const {states, setters} = useContext(GlobalStateContext)
    const [categorias, setCategorias] = useState([])

    const history = useHistory();
    const params = useParams()

    // const data = useRequestData(`${BASE_URL}/restaurants/${params.id}`,{})
    
    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants/${params.id}`,{headers: {"auth": localStorage.getItem('token')}})
        .then((response) => {
                setters.setRestaurante(response.data.restaurant)
        }).catch((error) => {
            console.log(error.message)
        })

        // if (states.restaurante && states.restaurante.products) {
        //     let arrayMap = states.restaurante.products.map((item) => {
        //         return item.category
        //     })
        //     const uniqueSet = new Set(arrayMap)
        //     arrayMap = [...uniqueSet]
        //     setCategorias(arrayMap)
        // }

    }, [ params.id])

    useEffect(() => {
        if (states.restaurante && states.restaurante.products) {
            let arrayMap = states.restaurante.products.map((item) => {
                return item.category
            })
            const uniqueSet = new Set(arrayMap)
            arrayMap = [...uniqueSet]
            setCategorias(arrayMap)
        }
    }, [states.restaurante])
    // states.restaurante, params.id

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
    
    // console.log(states.restaurante)
    console.log(states.restaurante.products);
    const renderCategory = categorias.map(item => {
        const categoria = item
        return (
            <MealsContainer>
                <TypeTitle>{categoria}</TypeTitle>
                
                {(states.restaurante.products).map(item => {
                    if (item.category === categoria) {
                        return (
                            <ItemCard 
                                key={item.id}
                                idPedido={item.id}
                                img={item.photoUrl}
                                name={item.name}
                                ingredientes={item.description}
                                valor={Number(item.price).toFixed(2)}
                            />
                        )
                    }
                })}
            </MealsContainer>
        )           
    })

    return (
        <div>
            {states.popUp ? <PopUpQuantidade/> : null}

            <Header button='true' pageName='Restaurante'/>

            {states.restaurante ? renderRestaurantInfo() : <p>Carregando...</p> }

            {states.restaurante && states.restaurante.products ? renderCategory : null }

        </div>
    )
}
