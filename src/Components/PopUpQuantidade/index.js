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


        if (states.quantidade <= 0 || states.restaurante === {}) {
            return null 
        }

        const pedido = states.restaurante.products.filter(item => {
                
            if ( item.id === states.idPedido) {
                item.quantidade = states.quantidade
                    return item
                } 
               
        })

        if (!states.carrinho.pedido) {
            setters.setCarrinho({"restaurante": states.restaurante, "pedido": pedido})
        } else if (states.restaurante === states.carrinho.restaurante) {
                
            setters.setCarrinho({"restaurante": states.restaurante, "pedido": [...pedido,...states.carrinho.pedido]})
        } else if (states.restaurante !== states.carrinho.restaurante) {
            alert("Você tem itens de outro restaurante no Carrinho. \n Termine seu pedido ou exclua os itens antes de continuar")
        }
        
        setters.setQuantidade(0)
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
