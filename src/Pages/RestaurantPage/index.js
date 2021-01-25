import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToCartPage, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';
import Header from "../../Components/Header";
import ItemCard from "../../Components/ItemCard/ItemCard";

import { RestaurantInfo, MealsContainer, TypeTitle } from './styles';

export default function RestaurantPage() {
    const history = useHistory();

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

{/* 
            <button onClick={() => goToHomePage(history)}>
                HOME
            </button>
            <button onClick={() => goToCartPage(history)}>
                CARRINHO
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button> */}

        </div>
    )
}
