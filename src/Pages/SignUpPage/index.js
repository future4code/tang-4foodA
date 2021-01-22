import React from 'react'
import { useHistory } from "react-router-dom";
import FooterMenu from '../../Components/FooterMenu';
import Header from '../../Components/Header';
import { goBack, goToAddAddressPage } from '../../Routes/coordinators';
import SignUpForm from './SignUpForm';


export default function SignUpPage() {
    const history = useHistory();

    return (
        <div>
            <Header />

            <SignUpForm 
            texto={"Cadastrar"}
            />

           
{/* 
            cadastro de usuário
            <button onClick={() => goToAddAddressPage(history)}>
                CADASTRAR ENDEREÇO
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button> */}
        </div>
    )
}