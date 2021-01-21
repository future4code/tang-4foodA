import styled from 'styled-components'

export const DivPerfil = styled.div`
  width: 22.5rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  position: relative;  
`

export const HeaderDiv = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
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
  width: 20.5rem;
  height: 4.75rem;  
  padding: 0 1rem;
  background-color: #eeeeee;
  position: relative;  
`

export const CaixaEnd = styled.div`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0 0 0.5rem;  
  font-size: 1rem;  
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const CaixaInfoEnd = styled.div`
  width: 20.5rem;
  height: 1.125rem;
  margin-top: 1rem;  
  font-size: 1rem;  
  letter-spacing: -0.39px;
`

export const CaixaHistoricoPedidos = styled.div`
  width: 20.5rem;
  height: 1.625rem;
  margin-left: 1rem;  
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
  width: 22.5rem;
  height: 6.875rem;
`

export const CaixaPedido = styled.div`
  width: 20.5rem;
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

