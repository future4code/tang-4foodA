import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToCartPage, goToHomePage, goToProfilePage } from '../../Routes/coordinators'
import { ReactComponent as AvatarIcon} from "../../assets/footerMenuIcons/avatar.svg";
import { ReactComponent as HomeIcon } from "../../assets/footerMenuIcons/homepage.svg";
import { ReactComponent as CartIcon } from "../../assets/footerMenuIcons/shopping-cart.svg";
import { FooterContainer } from './styles';

export default function FooterMenu(props) {
    const history = useHistory()
    const [fill, setFill] = useState({
        home: "#B8B8B8", 
        cart: "#B8B8B8" , 
        avatar: "#B8B8B8"
    })

    useEffect(() => {
        if( props.page === "home") {
            setFill({home: "#E8222E", cart: "#B8B8B8" , avatar: "#B8B8B8"})
        } else if (props.page === "cart") {
            setFill({home: "#B8B8B8", cart: "#E8222E" , avatar: "#B8B8B8"})
        } else if (props.page === "profile") {
            setFill({home: "#B8B8B8", cart: "#B8B8B8" , avatar: "#E8222E"})
        }
        
    },[] )

    

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
