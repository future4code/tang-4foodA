import React from 'react'
import EditProfileForm from './EditProfileForm'
import Header from '../../Components/Header'
import useProtectPage from '../../CustomHooks/useProtectedPage'

export default function EditProfilePage() {
    useProtectPage()
    return (
        <div>
            <Header pageName="Editar" />
            <EditProfileForm />
        </div>
    )
}
