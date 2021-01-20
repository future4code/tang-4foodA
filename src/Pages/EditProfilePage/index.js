import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToCartPage, goToEditPage, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';


export default function EditProfilePage() {
    const history = useHistory();

    return (
        <div>
            Editar usuário / endereço

            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}
