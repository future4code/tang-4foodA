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

export default function CartPage() {
    const history = useHistory();
    const {states, setters} = useContext(GlobalStateContext)
    
    const subtotal = 60.99 /* logica para puxar o subtotal*/
    
    
    const [value, setValue] = useState('dinheiro');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    
    console.log(states.carrinho)
    
    return (
        <CartPageContainer>
            {states.popUp ? <PopUpQuantidade/> : null}
            <Header button='false' pageName='Meu carrinho' />
            <ScrollSection>
                <ContainerEndereco>
                    <p>Endereço de entrega</p>
                    <p>Rua Alessandra, 42</p> {/* lógica para puxar endereço */}
                </ContainerEndereco>

                {states.carrinho.restaurante === undefined ? 
                    <MensagemVazio> Carrinho vazio </MensagemVazio> 
                    :
                    <div>
                        <ContainerRestaurante>
                            <h2>Nome restaurante</h2>
                            <p>Endereço restaurante</p>
                            <p>tempo entrega</p>
                        </ContainerRestaurante>

                        <ContainerCarrinho>
                            

                            {/* map nos itens do carrinho para renderizar os cards */}
                            <ItemCard/>

                            <SubtotalContainer>
                                <span> SUBTOTAL </span>
                                <div>
                                    <span> Frete R${Number(states.carrinho.restaurante.shipping).toFixed(2)}</span> 
                                    <span> R$ {subtotal}</span> 
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
                                <Buttons texto='Confirmar'/>
                            </StyledForm>

                        </ContainerCarrinho>
                    </div>         
                }
            </ScrollSection>
            <FooterMenu page={"cart"}/>
        </CartPageContainer>
    )
}
