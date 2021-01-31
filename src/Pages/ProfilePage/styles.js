import styled from 'styled-components'

export const DivPerfil = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;  
`

export const CaixaPerfil = styled.div`
  width: 100%;
  margin: 0;
  padding: 1rem 0;
`

export const CaixaInfo = styled.div`
  width: 20.5rem;
  height: 1.125rem;
  font-size: 1rem;
  letter-spacing: -0.39px;
  margin: 1rem 1rem 0.5rem;
  color: #000000;   
`

export const CaixaEndereco = styled.div`
  max-width: 100vw;
  height: 4.75rem;   
  padding: 0 1rem;
  background-color: #eeeeee;
  position: relative;  
`

export const CaixaEnd = styled.div`
  max-width: 100vw;
  height: 1.125rem;
  margin: 0 0 0.5rem;  
  font-size: 1rem;  
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const CaixaInfoEnd = styled.div`
  max-width: 100vw;
  height: 1.125rem;
  margin-top: 1rem;   
  font-size: 1rem;  
  letter-spacing: -0.39px;
`

export const CaixaHistoricoPedidos = styled.div`
  max-width: 100vw;
  height: 1.625rem;
  margin: 1rem;  
  font-size: 1rem;  
  letter-spacing: -0.39px;
  border-bottom: 1px solid black;  
`

export const IconePerfil = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  position: absolute;
  top: 6rem;
  right: 1rem;
 
  :hover {
    opacity: 0.5;
  }
  :active {
    opacity: 1;
  }
`

export const IconeEndereco = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  position: absolute;
  top: 1.625rem;
  right: 1rem;
 
  :hover {
    opacity: 0.5;
  }
  :active {
    opacity: 1;
  }
`

export const ContainerDosPedidos = styled.div`
  margin-bottom: 5rem;
  max-width: 100vw;
  height: 100%;  
  overflow: auto;
  scrollbar-width: none;
`

export const CaixaPedido = styled.div`
  max-width: 100vw;
  height: 6.375rem;
  margin: 0.438rem 1rem 0 1rem;
  border-radius: 8px;
  border: 1px solid #B8B8B8;
`

export const DivName = styled.div`
  width: 18.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0 1rem;
  font-size: 1rem;
  letter-spacing: -0ch.39px;
  color: #E8222E;
`

export const DivData = styled.div`
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.563rem 1rem 0 1rem;
  font-size: 0.75rem;
  letter-spacing: -0ch.29px;
`

export const DivTotal = styled.div`
  width: 18.5rem;
  height: 1.125rem;
  margin: 0.438rem 1rem 0 1rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: -normal.029px;
`

export const DivSemPedidos = styled.div`
  width: 100%;
  opacity: 0.89;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #000;
  margin-top: 1.75rem;
  text-align: center;
`

