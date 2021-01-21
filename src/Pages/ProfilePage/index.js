import React from 'react'
import { useHistory } from "react-router-dom";
import { goBack, goToCartPage, goToEditPage, goToHomePage } from '../../Routes/coordinators';
import { DivPerfil,
         HeaderDiv,
         CaixaInfo,
         CaixaPerfil,
         CaixaEndereco,
         CaixaEnd,
         CaixaInfoEnd,
         CaixaHistoricoPedidos,
         IconePerfil,
         IconeEndereco,
         ContainerDosPedidos,
         CaixaPedido,
         DivName,
         DivData,
         DivTotal
    } from './styles'
import icon from '../../assets/iconelapis.png'

export default function ProfilePage() {
    const history = useHistory();

    return (
      <div>
        <DivPerfil>
          <IconePerfil src={icon} />  
          <HeaderDiv>
            Meu Perfil
          </HeaderDiv>
          <CaixaPerfil>            
            <CaixaInfo>Bruna Olivera</CaixaInfo>
            <CaixaInfo>bruna_o@gmail.com</CaixaInfo>
            <CaixaInfo>333.333.333-33</CaixaInfo>
          </CaixaPerfil>
          <CaixaEndereco>
            <IconeEndereco src={icon} />
            <CaixaEnd>Endereço cadastrado:</CaixaEnd>
            <CaixaInfoEnd>Rua Alessandra Vieira, 42 - Santana</CaixaInfoEnd>
          </CaixaEndereco>
          <CaixaHistoricoPedidos>Histórico de Pedidos</CaixaHistoricoPedidos>
          <ContainerDosPedidos>
              <CaixaPedido>
                <DivName>Bullquer Vila Madalena</DivName>
                <DivData>23 outubro 2019</DivData>
                <DivTotal>SUBTOTAL R$67,00</DivTotal>
              </CaixaPedido>
              <CaixaPedido>
                <DivName>Vinil Burger Butantã</DivName>
                <DivData>30 setembro 2019</DivData>
                <DivTotal>SUBTOTAL R$89,00</DivTotal>
              </CaixaPedido>
              <CaixaPedido>
                <DivName>Bullquer Vila Madalena</DivName>
                <DivData>10 setembro 2019</DivData>
                <DivTotal>SUBTOTAL R$77,00</DivTotal>
              </CaixaPedido>
          </ContainerDosPedidos>

        </DivPerfil>
        perfil do usuário
        <button onClick={() => goToHomePage(history)}>
            HOME
        </button>
        <button onClick={() => goToCartPage(history)}>
            CARRINHO
        </button>
        <button onClick={() => goToEditPage(history)}>
            EDITAR PERFIL
        </button>
        <button onClick={() => goBack(history)}>
            VOLTAR
        </button>
      </div>
    )
}
