import React from 'react';
import Button from "@material-ui/core/Button";
import { ContainerButton, CampoButton} from './styles'

export default function Buttons() {
    return (
        <CampoButton>
          <ContainerButton color="primary" variant="contained">
            Salvar
          </ContainerButton>
        </CampoButton>
    )
}
