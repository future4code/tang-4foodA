import React from 'react'
import Header from '../../Components/Header'
import FooterMenu from '../../Components/FooterMenu';
import Image from '../../assets/logo-future-eats-invert.svg'
import { Container, ContainerImage } from './styles'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import useProtectedPage from '../../CustomHooks/useProtectedPage';

export default function ErrorPage() {
    useProtectedPage()
    return (
        <div>
            <Header />
            <Container>
                <ContainerImage>
                    <img src={ Image } alt="" />
                </ContainerImage>
                <h2>Algo deu errado </h2>
                <SentimentVeryDissatisfiedIcon color="primary" style={{ fontSize: 40 }} />
                <p>Confira se você digitou o endereço correto. Pode ser que o endereço não esteja mais disponível. </p>
            </Container>
            <FooterMenu />
        </div>
    )
}
