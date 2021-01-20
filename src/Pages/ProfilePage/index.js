import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToCartPage, goToEditPage, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';


export default function ProfilePage() {
    const history = useHistory();

    return (
        <div>
            perfil do usuário
            <button onClick={() => goToHomePage(history)}>
                HOME
            </button>
            <button onClick={() => goToCartPage(history)}>
                CARRINHO
            </button>
            <button onClick={() => goToEditPage(history)}>
                EDITAR PERFIL
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}
