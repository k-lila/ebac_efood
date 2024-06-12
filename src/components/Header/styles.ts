import styled from 'styled-components'
import Cores from '../../styles/cores'
import { Link } from 'react-router-dom'
import header from '../../assets/Imagens/header.png'

export const Cabecalho = styled.header`
  height: 162px;
  background-color: ${Cores.bege2};
  display: flex;
  justify-content: center;
  position: relative;
  background-image: url(${header});
  background-position: center;
`

export const Line = styled.div`
  position: absolute;
  max-width: 1366px;
  top: 59px;
  padding: 0 171px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: transparent;
  span {
    cursor: pointer;
    background-color: transparent;
    font-size: 18px;
    font-weight: 900;
    color: ${Cores.vermelho};
  }
`
export const Restaurantes = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  font-weight: 900;
  color: ${Cores.vermelho};
  text-decoration: none;
`
