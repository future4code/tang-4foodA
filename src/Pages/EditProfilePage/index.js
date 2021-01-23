import React from 'react'
import EditProfileForm from './EditProfileForm'
import Header from '../../Components/Header'

export default function EditProfilePage() {

    return (
        <div>
            <Header 
            pageName="Editar"
            />

            <EditProfileForm />
        
        </div>
    )
}
