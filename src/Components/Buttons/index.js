import React from 'react';
import { ContainerButton, CampoButton} from './styles'

export default function Buttons(props) {
    return (
        <CampoButton>
          <ContainerButton 
          type="submit"
          color="primary" 
          variant="contained"
          onClick={props.submeter}>
            {props.texto}
          </ContainerButton>
        </CampoButton>
    )
}
