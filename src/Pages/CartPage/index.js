import React, { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../Components/Header';
import { goBack, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';
import GlobalStateContext from "../../Global/GlobalStateContext";


export default function CartPage() {
    const history = useHistory();
    const {states, setters} = useContext(GlobalStateContext)

    useEffect(() => {
        setters.setHeaderButton(false)
    }, [])

    return (
        <div>
            <Header pageName='Meu carrinho' />
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
