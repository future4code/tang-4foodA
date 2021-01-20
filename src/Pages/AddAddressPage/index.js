import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToHomePage } from '../../Routes/coordinators';
import FormAdress from '../../Components/FormAdress';
import Buttons from '../../Components/Button';


export default function AddAddressPage() {
    const history = useHistory();

    return (
        <div>
            <FormAdress 
            texto={"Seu endereço"}/>
            <Buttons />
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>

            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}