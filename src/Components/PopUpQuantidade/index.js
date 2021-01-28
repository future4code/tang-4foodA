import React, {useContext} from 'react'
import { PopUpContainer, PopUpCard, ButtonContainer } from './styles'
import GlobalStateContext from "../../Global/GlobalStateContext";


export default function PopUpQuantidade() {
    const {states, setters} = useContext(GlobalStateContext)


    let quantity = []
    for (let i = 0; i < 11; i++) {
        quantity.push(i)
    }

    const renderOptions = quantity.map((item) => {
        return (
            <option value={item} key={item}>
                {item}
            </option>
        )            
    })
    

    const handleSelect = (event) => {
        setters.setQuantidade(event.target.value)
    }
    
    const addQuantidade = () => {
        setters.setPopUp(false)
        const pedido = !states.carrinho.pedido ? states.restaurante.products.map(item => {
            if (item.id === states.idPedido) {
                return {...item, "quantidade": states.quantidade }
            } 
            return item
        }) : states.carrinho.pedido.map(item => {
            if (item.id === states.idPedido) {
                return {...item, "quantidade": states.quantidade }
            } 
            return item
        })
        setters.setCarrinho({"restaurante": states.restaurante, "pedido": pedido})
    }
    
    return (
        <PopUpContainer>
                <PopUpCard>
                    <p>Selecione a quantidade desejada</p>
                    <select name="quantidade" id="quantidade" value={states.quantidade} onChange={(event) => handleSelect(event)}>
                        {renderOptions}
                    </select>
                    <ButtonContainer>
                        <button onClick={() => addQuantidade()}>ADICIONAR AO CARRINHO</button>
                    </ButtonContainer>
                </PopUpCard>
        </PopUpContainer>
    )
}
