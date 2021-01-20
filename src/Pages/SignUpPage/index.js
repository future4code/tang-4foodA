import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToAddAddressPage } from '../../Routes/coordinators';

export default function SignUpPage() {
    const history = useHistory();

    return (
        <div>
            cadastro de usuário
            <button onClick={() => goToAddAddressPage(history)}>
                CADASTRAR ENDEREÇO
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}