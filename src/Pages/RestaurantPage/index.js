import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToCartPage, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';


export default function RestaurantPage() {
    const history = useHistory();

    return (
        <div>
            perfil do restaurante

            <button onClick={() => goToHomePage(history)}>
                HOME
            </button>
            <button onClick={() => goToCartPage(history)}>
                CARRINHO
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>

        </div>
    )
}
