import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToHomePage } from '../../Routes/coordinators';


export default function ErrorPage() {
    const history = useHistory();
    
    return (
        <div>
            ERRO 404
            <button onClick={() => goToHomePage(history)}>
                HOME
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}
