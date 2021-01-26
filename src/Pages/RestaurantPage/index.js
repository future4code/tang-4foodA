import React,{ useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import Header from "../../Components/Header";
import ItemCard from "../../Components/ItemCard/ItemCard";
import { RestaurantInfo, MealsContainer, TypeTitle } from './styles';
import GlobalStateContext from "../../Global/GlobalStateContext";


export default function RestaurantPage() {
    const {states, setters} = useContext(GlobalStateContext)

    const history = useHistory();
    const params = useParams()



    return (
        <div>
            <Header button='true' pageName='Restaurante'/>

            <RestaurantInfo>
                <img src="https://picsum.photos/200/200" alt="" />
                <h2>Nome do Restaurante</h2>
                <p>Tipo de cozinha</p>
                <div>
                    <span>tempo de entrega</span>
                    <span> valor do frete</span>
                </div>
                <p>endereço</p>
            </RestaurantInfo>

            {/* map para renderizar categorias */}
            <MealsContainer>
                <TypeTitle>categoria do prato</TypeTitle>
                {/* map para renderizar pratos da categoria */}
                <ItemCard/>
            </MealsContainer>
        </div>
    )
}
