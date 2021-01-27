import axios from 'axios'
import {BASE_URL} from '../Constants/urls'
import { goToAddAddressPage, goToHomePage } from '../Routes/coordinators'

export const signUp = (body, history, setLoading) => {
    setLoading(true)
    axios.post(`${BASE_URL}/signup`, body)
        .then((response) => {
            localStorage.setItem('token', response.data.token)// token da criação do novo usuario
            setLoading(false)
            goToAddAddressPage(history)
        })
        .catch((error) => {
            console.log(error);
            // alert(error)
            setLoading(false)
        })
}


export const addAddress = (body, history, setLoading) => {
    const headers ={
        headers:{
            auth:localStorage.getItem('token')
        }
    }
    setLoading(true)
    axios.put(`${BASE_URL}/address`, body, headers)
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token)// token da criação do endereço
            setLoading(false)
            goToHomePage(history)
        })
        .catch((error) => {
            console.log(error);
            setLoading(false)
        })
}