import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToHomePage } from '../../Routes/coordinators';
import FormAdress from '../../Components/FormAdress'
import Header from '../../Components/Header'
import Buttons from '../../Components/Buttons';

export default function EditAdressPage() {
    const history = useHistory();

    
    return (
        <div>
            <Header 
            pageName={"Endereço"} />
            <FormAdress />
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>

            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}