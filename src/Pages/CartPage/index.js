import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToCartPage, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';


export default function CartPage() {
    const history = useHistory();

    return (
        <div>
            carrinho

            <button onClick={() => goToHomePage(history)}>
                HOME
            </button>
            <button onClick={() => goToRestaurantsPage(history)}>
                RESTAURANTES
            </button>
            <button onClick={() => goToProfilePage(history)}>
                PERFIL
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}
