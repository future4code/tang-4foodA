import React, { useContext, useEffect , useState } from 'react'
import { useHistory } from "react-router-dom";
import Header from '../../Components/Header';
import { goBack, goToHomePage, goToProfilePage, goToRestaurantsPage } from '../../Routes/coordinators';
import GlobalStateContext from "../../Global/GlobalStateContext";
import Buttons from '../../Components/Button';
import { ContainerCarrinho, ContainerEndereco , MensagemVazio , SubtotalContainer , StyledForm } from './styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

export default function CartPage() {
    const history = useHistory();
    const {states, setters} = useContext(GlobalStateContext)

    useEffect(() => {
        setters.setHeaderButton(false)
    }, [])

    const frete = 5.99 /* logica para puxar o frete*/
    const subtotal = 60.99 /* logica para puxar o subtotal*/


    const [value, setValue] = useState('dinheiro');
    
    const handleChange = (event) => {
        setValue(event.target.value);
    }
    

    return (
        <div>
            <Header pageName='Meu carrinho' />

            <ContainerEndereco>
                <p>Endereço de entrega</p>
                <p>Rua Alessandra, 42</p> {/* lógica para puxar endereço */}
            </ContainerEndereco>

            <ContainerCarrinho>
                <MensagemVazio> Carrinho vazio </MensagemVazio> {/* ternario para renderizar o carrinho */}

                <SubtotalContainer>
                    <span> SUBTOTAL </span>
                    <div>
                        <span> Frete R${frete}</span> {/* logica para puxar o frete*/ }
                        <span> R$ {subtotal}</span> {/* logica para puxar o subtotal*/ }
                    </div>
                </SubtotalContainer>

                <StyledForm>
                    <p>Forma de Pagamento</p>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" /><br/>
                        <FormControlLabel value="credito" control={<Radio />} label="Cartão de crédito" />
                    </RadioGroup>

                    <Buttons texto='Confirmar'/>
                </StyledForm>

            </ContainerCarrinho>








            <button onClick={() => goToHomePage(history)}>
                HOME
            </button>
            <button onClick={() => goToRestaurantsPage(history)}>
                RESTAURANTES
            </button>
            <button onClick={() => goToProfilePage(history)}>
                PERFIL
            </button>
            <button onClick={() => goBack(history)}>
                VOLTAR
            </button>
        </div>
    )
}
