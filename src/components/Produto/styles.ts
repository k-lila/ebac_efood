import styled from 'styled-components'
import Cores from '../../styles/cores'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${Cores.vermelho};
  padding: 8px;
`
export const Imagem = styled.div`
  width: 100%;
  height: 167px;
`

export const Texto = styled.div`
  background-color: ${Cores.vermelho};
  h3,
  p {
    margin-top: 8px;
    background-color: transparent;
    color: ${Cores.bege2};
  }
  h3 {
    font-size: 16px;
    font-weight: 900;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`
export const Adicionar = styled.button`
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  border: none;
  color: ${Cores.vermelho};
  background-color: ${Cores.bege2};
  cursor: pointer;
`
