import React from 'react'
import { useHistory } from "react-router-dom";
import FooterMenu from '../../Components/FooterMenu';
import Header from '../../Components/Header';
import { goBack, goToAddAddressPage } from '../../Routes/coordinators';
import SignUpForm from './SignUpForm';


export default function SignUpPage() {

    return (
        <div>
            <Header />

            <SignUpForm 
            texto={"Cadastrar"}
            />

        </div>
    )
}