import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToHomePage } from '../../Routes/coordinators';
import FormAdress from '../../Components/FormAdress';
import Buttons from '../../Components/Button';
import Header from '../../Components/Header';


export default function AddAddressPage() {
    const history = useHistory();

    return (
        <div>
            <Header />
            <FormAdress 
            texto={"Seu endereço"}/>
            
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>

            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}