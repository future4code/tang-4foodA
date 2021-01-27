import React from 'react'
import { useHistory } from "react-router-dom";
import FooterMenu from '../../Components/FooterMenu';
import Header from '../../Components/Header';
import { goBack, goToAddAddressPage } from '../../Routes/coordinators';
import SignUpForm from './SignUpForm';
import styled from 'styled-components' 

export const Container = styled.div`
    margin: 1rem;
`
export default function SignUpPage() {

    return (
        <Container>
            <Header />

            <SignUpForm 
            texto={"Cadastrar"}
            />

        </Container>
    )
}