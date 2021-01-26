import React from 'react'
import { useHistory } from 'react-router-dom'
import { goBack } from '../../Routes/coordinators'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { HeaderContainer , BackButton } from './styles';



export default function Header(props) {
    const history = useHistory()


    return (
        <div>
            <HeaderContainer>
                {/* para nomear a sua página use a prop >>> pageName='nome da sua página' */}
                <h3>{props.pageName}</h3>
            </HeaderContainer>
            {/* o estado inicial para mostrar o botão é true, caso sua tela não precise,
            use a prop button com o valor "false" (string)*/}
            {props.button === "false" ? null : <BackButton onClick={() => goBack(history)}><ArrowBackIosIcon/></BackButton>}
        </div>
    ) 
}
