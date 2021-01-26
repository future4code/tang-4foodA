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
    

        // const handleSelect = (event) => {
        //     setQuantidade(event.target.value)
        // }
    
        const addQuantidade = () => {
            setters.setPopUp(false)
        }
        
    return (
        <PopUpContainer>
                <PopUpCard>
                    <p>Selecione a quantidade desejada</p>
                    <select name="quantidade" id="quantidade">
                        {renderOptions}
                    </select>
                    <ButtonContainer>
                        <button onClick={() => addQuantidade()}>ADICIONAR AO CARRINHO</button>
                    </ButtonContainer>
                </PopUpCard>
        </PopUpContainer>
    )
}
