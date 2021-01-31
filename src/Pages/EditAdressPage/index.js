import React from 'react'
import FormAdress from '../../Components/FormAdress'
import Header from '../../Components/Header'
import useProtectedPage from '../../CustomHooks/useProtectedPage'

export default function EditAdressPage() {
  useProtectedPage()
    return (
        <div>
            <Header 
            pageName={"Endereço"} />
            <FormAdress />
        </div>
    )
}