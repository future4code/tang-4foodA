import React, { useState } from 'react'
import { 
    CardContainer, 
    InfoContainer, 
    HeaderContainer, 
    FooterContainer, 
    RemoveBtn, 
    AddBtn,
} from './styles'

export default function ItemCard(props) {
    /* todas tags devem ser preenchidas por props quando for adicionar a lógica */

    return (
        <CardContainer>
            <img src="https://picsum.photos/id/1/80/120" alt="" />
            <InfoContainer>
                <HeaderContainer>
                    <h3>Nome do Prato</h3>
                    <button onClick={props.quantidade}>0</button>
                </HeaderContainer>
                <p>Ingredientes do prato</p>
                <FooterContainer>
                    <span>R$46,00</span>
                    <AddBtn>adicionar</AddBtn> {/*ternario para alterar botões quanto necessário*/}
                    {/* <RemoveBtn>remover</RemoveBtn> */}
                </FooterContainer>
            </InfoContainer>
        </CardContainer>
    )
}
