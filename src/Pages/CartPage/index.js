import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../Components/Header';
import { goBack, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';
import GlobalStateContext from "../../Global/GlobalStateContext";
import Buttons from '../../Components/Buttons';
import PopUpQuantidade from "../../Components/PopUpQuantidade";
import { 
    ContainerCarrinho, 
    ContainerEndereco , 
    MensagemVazio , 
    SubtotalContainer , 
    StyledForm , 
    CartPageContainer,
    ContainerRestaurante,
    ScrollSection
} from './styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FooterMenu from '../../Components/FooterMenu';
import ItemCard from '../../Components/ItemCard/ItemCard';
import useRequestData from '../../CustomHooks/useRequestData';
import { BASE_URL } from '../../Constants/urls';
import { order } from '../../Service/user'
import useProtectPage from '../../CustomHooks/useProtectedPage'

export default function CartPage() {
    useProtectPage()
    const history = useHistory();
    const {states, setters} = useContext(GlobalStateContext)
    
    
    const [loading, setLoading] = React.useState(false)
    const [value, setValue] = useState('dinheiro');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    
    const pedidos = states.carrinho.pedido ? states.carrinho.pedido : null

    const frete = states.carrinho.restaurante ? Number(states.carrinho.restaurante.shipping) : 0

    const subtotal = pedidos? frete + pedidos.reduce((resultado, item) => {
        return (item.quantidade * item.price) + resultado;
      }, 0): 0
   
    const endereco = useRequestData(`${BASE_URL}/profile/address`, {})//pegando endereco na API
   
    console.log(pedidos);
    
    let body = {}
    if (pedidos) {
        body = {
            "products": pedidos.map((item) => {
                return { "id": item.id, "quantity": item.quantidade }
            }
            ),
            "paymentMethod": "creditcard"
        }
        
    }
    console.log(body);


    let idRestaurante = ""
    if(states.carrinho.restaurante !== undefined){        
        idRestaurante = states.carrinho.restaurante.id
        console.log(idRestaurante);
    }
    
    const submitOrder = (e) => {
        e.preventDefault()
        order(body, history, setLoading, idRestaurante, setters.setCarrinho)//função está no service/user
    }
    

    return (
        <CartPageContainer>
            {states.popUp ? <PopUpQuantidade/> : null}
            <Header button='false' pageName='Meu carrinho' />
            <ScrollSection>
                <ContainerEndereco>
                    <p>Endereço de entrega</p>
                    <p>{endereco.address?endereco.address.street:null}, {endereco.address?endereco.address.number:null}</p> 
                </ContainerEndereco>

                {states.carrinho.restaurante === undefined ? 
                    <MensagemVazio> Carrinho vazio </MensagemVazio> 
                    :
                    <div>
                        <ContainerRestaurante>
                            {/* {console.log(states.carrinho)} */}
                            <h2>{states.carrinho.restaurante.name}</h2>
                            <p>{states.carrinho.restaurante.address}</p>
                            <p>{states.carrinho.restaurante.deliveryTime} min</p>
                        </ContainerRestaurante>

                            

                            {pedidos.map(item => {
                                return <ItemCard 
                                key={item.id}
                                idPedido={item.id}
                                img={item.photoUrl}
                                name={item.name}
                                ingredientes={item.description}
                                valor={Number(item.price).toFixed(2)}
                            />
                            })}
                    </div>         
                }
                        <ContainerCarrinho>

                            <SubtotalContainer>
                                <span> SUBTOTAL </span>
                                <div>
                                    <span> Frete R${frete.toFixed(2)}</span> 
                                    <span> R$ {subtotal.toFixed(2)}</span> 
                                </div>
                            </SubtotalContainer>

                            <StyledForm>
                                <div>
                                    <p>Forma de Pagamento</p>
                                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                        <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
                                        <FormControlLabel value="credito" control={<Radio />} label="Cartão de crédito" />
                                    </RadioGroup>
                                </div>
                                <Buttons 
                                submeter = {submitOrder}
                                texto='Confirmar'/>
                            </StyledForm>

                        </ContainerCarrinho>

            </ScrollSection>
            <FooterMenu page={"cart"}/>
        </CartPageContainer>
    )
}
