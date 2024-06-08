import styled from 'styled-components'
import Cores from '../../styles/cores'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 472px;
  height: 398px;
  position: relative;
`
export const Imagem = styled.div`
  width: 472px;
  height: 217px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const Descricao = styled.div`
  border: 1px solid ${Cores.vermelho};
  border-top: none;
  height: 181px;
  background-color: ${Cores.branco};
`

export const Titulo = styled.div`
  color: ${Cores.vermelho};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 8px 8px 16px 7px;
  p {
    display: flex;
    align-items: center;
  }
  img {
    margin-top: 0.5px;
    margin-left: 8px;
  }
`

export const Texto = styled.p`
  color: ${Cores.vermelho};
  font-size: 14px;
  margin: 0 8px;
  line-height: 22px;
  white-space: pre-line;
`
export const SaibaMais = styled(Link)`
  border: none;
  background-color: ${Cores.vermelho};
  color: ${Cores.bege1};
  font-size: 14px;
  font-weight: 700;
  margin-left: 8px;
  margin-top: 16px;
  width: 82px;
  height: 24px;
  cursor: pointer;
`
export const Faixa = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: end;
  span {
    padding: 6px 4px;
    background-color: ${Cores.vermelho};
    font-size: 12px;
    font-weight: 700;
    color: ${Cores.bege1};
    margin-left: 8px;
  }
`
