import styled from 'styled-components'
import Cores from '../../styles/cores'
import hero from '../../assets/Imagens/hero.png'

export const Cabecalho = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Cores.bege2};
  height: 360px;
  background-image: url(${hero});
  background-position: center;
`

export const Quote = styled.p`
  background-color: transparent;
  color: ${Cores.vermelho};
  font-size: 36px;
  font-weight: 900;
  width: 539px;
  text-align: center;
  line-height: 42.19px;
  margin-top: 138.5px;
`
