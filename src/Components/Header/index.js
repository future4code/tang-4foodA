import React from 'react'
import { useHistory } from 'react-router-dom'
import { goBack } from '../../Routes/coordinators'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { HeaderContainer } from './styles';



export default function Header(props) {
    const history = useHistory()


    return (
        <HeaderContainer>
            {/* o estado inicial para mostrar o botão é true, caso sua tela não precise,
            use a prop button com o valor "false" (string)*/}
            {props.button === "false" ? null : <button onClick={() => goBack(history)}><ArrowBackIosIcon/></button>}
            {/* para nomear a sua página use a prop >>> pageName='nome da sua página' */}
            <h3>{props.pageName}</h3>
        </HeaderContainer>
    ) 
}
