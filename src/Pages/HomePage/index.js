import React from 'react'
import { useHistory } from "react-router-dom";
import { goToCartPage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';

export default function HomePage() {
    const history = useHistory();

    return (
        <div>
            home / feed

            <button onClick={() => goToCartPage(history)}>
                CARRINHO
            </button>
            <button onClick={() => goToRestaurantsPage(history)}>
                RESTAURANTES
            </button>
            <button onClick={() => goToProfilePage(history)}>
                PERFIL DO USUÁRIO
            </button>
        </div>
    )
}
