import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToHomePage } from '../../Routes/coordinators';

export default function AddAddressPage() {
    const history = useHistory();

    return (
        <div>
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>

            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}