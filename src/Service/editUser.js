import axios from  'axios'
import {BASE_URL} from '../Constants/urls'
import { goToProfilePage } from '../Routes/coordinators'

export const editProfile = (body, history) => {
    const headers ={
        headers:{
            auth:localStorage.getItem('token')
        }
    }
    axios.put(`${BASE_URL}/profile`, body, headers)
        .then((response)=>{
            goToProfilePage(history)
            console.log(response);
    })
        .catch((error) => {
            alert(error)
    })
}