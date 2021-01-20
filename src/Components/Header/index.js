import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { goBack } from '../../Routes/coordinators'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { HeaderContainer } from './styles';
import GlobalStateContext from "../../Global/GlobalStateContext";


export default function Header(props) {
    const history = useHistory()
    const {states, setters} = useContext(GlobalStateContext)

    return (
        <HeaderContainer>
            {/* o estado inicial para mostrar o botão é true, caso sua tela não precise,
            faça um useEffect setando o headerButton para false */}
            {states.headerButton? <button onClick={() => goBack(history)}><ArrowBackIosIcon/></button> : null}
            {/* para nomear a sua página use a prop >>> pageName='nome da sua página' */}
            <h3>{props.pageName}</h3>
        </HeaderContainer>
    )
}
