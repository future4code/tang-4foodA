import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { goToEditPage, goToEditAddressPage } from '../../Routes/coordinators';
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
         DivTotal,
         DivSemPedidos
    } from './styles'
import icon from '../../assets/iconelapis.png';
import Header from '../../Components/Header';
import FooterMenu from '../../Components/FooterMenu';
import GlobalStateContext from '../../Global/GlobalStateContext';
import axios from 'axios';
import { BASE_URL } from '../../Constants/urls';

export default function ProfilePage() {
    const history = useHistory();
    const {states} = useContext(GlobalStateContext)
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
      const headers ={
        headers:{
            auth:localStorage.getItem('token')
        }
      }
      
      axios.get(`${BASE_URL}/orders/history`, headers)
      .then((response) => {
        setOrders(response.data.orders)        
      })
      .catch((error) => {
        console.log(error)
      })
    }, []);

    function timeConverter(UNIX_timestamp){
      let a = new Date(UNIX_timestamp);
      let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Augusto','Setembro','Outubro','Novembro','Dezembro'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();      
      let time = date + ' ' + month + ' ' + year + ' '; 
      return time;
    }     

    console.log(orders)
   
    return (
      <div>
        <DivPerfil>
          <IconePerfil onClick={() => goToEditPage(history)} src={icon} />  
          <Header button='false' pageName='Meu perfil'/>         
          <CaixaPerfil>            
            <CaixaInfo>{states.perfil.name}</CaixaInfo>
            <CaixaInfo>{states.perfil.email}</CaixaInfo>
            <CaixaInfo>{states.perfil.cpf}</CaixaInfo>
          </CaixaPerfil>
          <CaixaEndereco>
            <IconeEndereco onClick={() => goToEditAddressPage(history)} src={icon} />
            <CaixaEnd>Endereço cadastrado:</CaixaEnd>
            <CaixaInfoEnd>{states.perfil.address}</CaixaInfoEnd>
          </CaixaEndereco>
          <CaixaHistoricoPedidos>Histórico de Pedidos</CaixaHistoricoPedidos>
          <ContainerDosPedidos> 
            {orders.length !== 0 ? orders.map((item) => {                
                  return (
                  <CaixaPedido>
                    <DivName>{item.restaurantName}</DivName>
                    <DivData>{timeConverter(item.createdAt)}</DivData>
                    <DivTotal>{`SUBTOTAL R$${item.totalPrice}`}</DivTotal>
                  </CaixaPedido>
                ) 
              }
            ) : <DivSemPedidos>Você não realizou nenhum pedido</DivSemPedidos> } 
              
            <FooterMenu/>
          </ContainerDosPedidos>

        </DivPerfil>
        <FooterMenu page={"profile"}/>
      </div>
    )
}
