import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToCartPage, goToHomePage, goToProfilePage } from '../../Routes/coordinators'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


export default function FooterMenu() {
    const history = useHistory()

    return (
        <div>
            <button onClick={() => goToHomePage(history)} ></button>
            <button onClick={() => goToCartPage(history)} ></button>
            <button onClick={() => goToProfilePage(history)} ></button>
        </div>
    )
}
