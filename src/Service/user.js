import axios from 'axios';
import {BASE_URL} from '../Constants/urls'
import { goToAddAddressPage, goToHomePage } from '../Routes/coordinators';

export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)// token da criação do novo usuario
            goToAddAddressPage(history)
        })
        .catch((error) => {
            console.log(error);
        })
}


export const addAddress = (body, history) => {
    const headers ={
        headers:{
            auth:localStorage.getItem('token')
        }
    }
    axios.put(`${BASE_URL}/address`, body, headers)
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token)// token da criação do endereço
            goToHomePage(history)
        })
        .catch((error) => {
            console.log(error);
        })
}