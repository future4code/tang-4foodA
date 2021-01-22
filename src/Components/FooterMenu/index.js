import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToCartPage, goToHomePage, goToProfilePage } from '../../Routes/coordinators'
import { ReactComponent as AvatarIcon} from "../../assets/footerMenuIcons/avatar.svg";
import { ReactComponent as HomeIcon } from "../../assets/footerMenuIcons/homepage.svg";
import { ReactComponent as CartIcon } from "../../assets/footerMenuIcons/shopping-cart.svg";
import { FooterContainer } from './styles';

export default function FooterMenu() {
    const history = useHistory()
    const [fill, setFill] = useState({
        home: "#B8B8B8", 
        cart: "#B8B8B8" , 
        avatar: "#B8B8B8"
    })

    const selectHomeIcon = () => {
        setFill({home: "#E8222E", cart: "#B8B8B8" , avatar: "#B8B8B8"})
        goToHomePage(history)
    }

    const selectCartIcon = () => {
        setFill({home: "#B8B8B8", cart: "#E8222E" , avatar: "#B8B8B8"})
        goToCartPage(history)
    }

    const selectAvatarIcon = () => {
        setFill({home: "#B8B8B8", cart: "#B8B8B8" , avatar: "#E8222E"})
        goToProfilePage(history)
    }

    return (
        <FooterContainer>
            <button onClick={selectHomeIcon}  >
                <HomeIcon fill={fill.home}/>
            </button>
            
            <button onClick={selectCartIcon} >
                <CartIcon fill={fill.cart} />
            </button>
            
            <button onClick={selectAvatarIcon} >
                <AvatarIcon fill={fill.avatar}/>
            </button>
        </FooterContainer>
    )
}
