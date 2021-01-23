import React from 'react'
import { PopUpContainer, PopUpCard } from './styles'


export default function PopUpQuantidade() {
    const renderOptions = () => {
        for (let i = 0; i < 10; i++) {
            return (
                <option value={i} key={i}>{i}</option>
            )
        }
    }
    
        const handleSelect = (event) => {
            setQuantidade(event.target.value)
        }
    
        const addQuantidade = () => {
            setPopUp(false)
        }
        
    return (
        <PopUpContainer>
                <PopUpCard>
                    <p>Selecione a quantidade desejada</p>
                    <select name="quantidade" id="quantidade" onChange={() => handleSelect()}>
                        {renderOptions()}
                    </select>
                    <button onClick={() => addQuantidade()}>ADICIONAR AO CARRINHO</button>
                </PopUpCard>
        </PopUpContainer>
    )
}
