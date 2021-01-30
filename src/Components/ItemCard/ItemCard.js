import React, { useState, useContext } from 'react'
import GlobalStateContext from "../../Global/GlobalStateContext";
import { 
    CardContainer, 
    InfoContainer, 
    HeaderContainer, 
    FooterContainer, 
    RemoveBtn, 
    AddBtn,
} from './styles'

export default function ItemCard(props) {
    const {states, setters} = useContext(GlobalStateContext)

    const addCarrinho = () => {
        setters.setIdPedido(props.idPedido)
        setters.setPopUp(true)
    }

    const removerCarrinho = () => {
      const novoPedido = states.carrinho.pedido.filter(item => {
           return item.id !== props.idPedido
        })
        if(!novoPedido[0]) {
            setters.setCarrinho({})
            return null
        }
        setters.setCarrinho({"restaurante": states.restaurante, "pedido": novoPedido})
    }

    const renderQuantidade = states.carrinho.pedido ? states.carrinho.pedido.filter(item => {
        if (item.id === props.idPedido) {
            return item.quantidade
        }}) : 0


    /* todas tags devem ser preenchidas por props quando for adicionar a lógica */
    return (
        <CardContainer>
            <img src={props.img} alt="" />
            <InfoContainer>
                <HeaderContainer>
                    <h3>{props.name}</h3>
                    {renderQuantidade[0] ? <button>{renderQuantidade[0].quantidade}</button> : null}
                </HeaderContainer>
                <p>{props.ingredientes}</p>
                <FooterContainer>
                    <span>R${props.valor}</span>
                    {renderQuantidade[0] ? 
                        <RemoveBtn onClick={() => removerCarrinho()}>remover</RemoveBtn>
                        :  <AddBtn onClick={() => addCarrinho()}>adicionar</AddBtn> }                   
                </FooterContainer>
            </InfoContainer>
        </CardContainer>
    )
}
