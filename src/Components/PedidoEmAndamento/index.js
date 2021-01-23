import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Rectangle from "./style.js"

export default function index(props) {
    return (
        <Rectangle>
            <div>
                <AccessTimeIcon className={'clock'}></AccessTimeIcon>
            </div>
            <div className={"infoDiv"}>
                <p className={"whiteP"}>Pedido em Andamento</p>
                <p className={"nomeRestaurante"}>{props.restaurante? props.restaurente: "TESTE"}</p>
                <p className={"subtotal"}> SUBTOTAL R${props.valor}</p>
            </div>
        </Rectangle>
    )
}
