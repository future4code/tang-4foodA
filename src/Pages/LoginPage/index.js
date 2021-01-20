import React from 'react'
import { useHistory } from "react-router-dom";
import { goToHomePage, goToSignUpPage } from '../../Routes/coordinators';

export default function LoginPage() {
    const history = useHistory();

    return (
        <div>
            login
            <button onClick={() => goToSignUpPage(history)}>
                CADASTRO
            </button>
            <button onClick={() => goToHomePage(history)}>
                HomePage
            </button>
        </div>
    )
}